// pages/publish/publish.js
var mockData = require('../../utils/mockData.js')

Page({
  data: {
    theme: {
      color: '#1890FF',
      tabColor: '#333' || '#20ACAB',
    },
    topic:{
      sorts: ["生活分享", "闲置交易", "表白交友","失物招领", "疑问互答", "任务兼职"],
      selected:0
    },
    content:"", // 输入框内容
    location: "",
    tempFilePaths: [], // 上传图片小程序临时路径
    video:'',
    anonymous: false,
    isChecked:false, // 阅读并同意选中状态
    isPublish: true // 本地模拟发布功能状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 本地模拟获取发布状态
    this.setData({
      isPublish: true
    })
  },

  // 获取文本框输入内容
  inputContent: function(e) {
    this.setData({content: e.detail.value})
  },

  // 清空视频或者图片
  clearInput: function(name){
    if (name != 'tempFilePaths') {
      this.setData({ tempFilePaths: [] })
    }
    if (name != 'video') {
      this.setData({ video: '' })
    }
  },

  // 选择照片
  chooseImage: function(e){
    let surplus = 9 - this.data.tempFilePaths.length
    wx.chooseImage({
      count: surplus, // 可以选择多少张图片
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res=> {
        this.clearInput("tempFilePaths");
        this.addNewImage(res.tempFilePaths);
      }
    })
  },

  addNewImage(imagePath){
    var list = this.data.tempFilePaths
    list = list.concat(imagePath)
    this.setData({
      tempFilePaths: list
    })
  },

  // 点击图片大图预览
  thisImage:function(e){
    let index = e.currentTarget.dataset.imageid;
    let list = this.data.tempFilePaths;
    wx.previewImage({
      urls: list,
      current: list[index]
    })
  },
  
  // 删除图片
  deleteImage: function(e){
    let index = e.currentTarget.dataset.imageid;
    let list = this.data.tempFilePaths;
    list.splice(index, 1)
    this.setData({
      tempFilePaths: list
    })
  },

  // 选择视频
  chooseVideo: function(e){
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success:(res)=>{
        this.clearInput("video")
        this.setData({
          video: res.tempFilePath // 使用本地临时路径
        })
      }
    })
  },

  deleteVideo: function(e){
    this.setData({
      video:''
    })
  },

  // 获取地理位置
  getCityName(address) {
    let city = undefined
    if (address) {
      let index0 = address.indexOf('省')
      let index1 = address.indexOf('市')
      if (index0 > 0 && index1 > 0 && index1 > index0 ) {
        city = address.substring(index0+1, index1+1)
      } else if (address.includes('北京市')) {
        city = '北京市'
      } else if (address.includes('上海市')) {
        city = '上海市'
      } else if (address.includes('天津市')) {
        city = '天津市'
      } else if (address.includes('重庆市')) {
        city = '重庆市'
      }
    }
    return city
  },

  chooseLocation:function(e){
    wx.showLoading({
      title: '正在加载',
    })
    wx.chooseLocation({
      success:(res)=>{
        wx.hideLoading({
          success: (res) => {},
        })
        let address = ''; 
        let locName = res.name;
        let city = this.getCityName(res.address)
        if(city){
          address = city + '·' + locName
        }else{
          address = locName
        }
        this.setData({
          location: address
        })
      },
      fail:(res)=>{
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  },

  deleteLocation:function(e){
    this.setData({
      location: ''
    })
  },

  // 是否匿名
  postStatus:function(e){
    this.setData({
      anonymous: !this.data.anonymous
    },()=>{
      console.log(this.data.anonymous)
    })
  },

  // 发布的类型
  clickTag:function(e){
    let topicId = e.target.dataset.topicid;
    let topic = this.data.topic;
    topic.selected = topicId;
    this.setData({
      topic
    })
  },

  // 阅读并同意协议
  agreeClick(e){
    if (e.detail.value.includes('true')) {
      this.setData({
        isChecked: true
      })
    } else {
      this.setData({
        isChecked: false
      })
    }
  },
  
  // 取消发布返回圈子
  backArticle(){
    wx.navigateBack({
      delta: 1
    })
  },

  // 发布帖子（本地模拟）
  publishArticle(){ 
    if(this.data.isChecked === false || this.data.content === ''){
      wx.showToast({
        icon: 'error',
        title: '未填写或未同意'
      })
    }else{
      // 本地模拟发布数据
      wx.showToast({
        icon: 'success',
        title: '发布成功'
      })
      // 跳转到文章列表页面
      wx.switchTab({
        url: '/pages/article/article'
      })
    }
  }
})
