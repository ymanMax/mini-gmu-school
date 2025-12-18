// pages/article.js
var formatDate = require('../../utils/formatDate.js')
var mockData = require('../../utils/mockData.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
    articles:[],
    isBackTop:false,
    isPublish:false,
    inputValue:'',
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 模拟获取发布开关状态
    this.setData({
      isPublish: true, // 默认为开启发布功能
      openid: wx.getStorageSync('openid') || 'user_001' // 如果没有openid，使用默认用户
    })
    this.getArticle()
  },
  
  /**
   * 生命周期函数--页面显示
   */
  onShow(){
    this.setData({
      openid: wx.getStorageSync('openid') || 'user_001',
    })
    this.getArticle()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉刷新动作
   */
  onPullDownRefresh(e) {
    this.getArticle()
  },

  /**
   * 页面上拉触底加载事件的处理函数
   */
  onReachBottom() {
    // this.getArticle()
  },

  /**
   * 监听页面滚动处理函数 
   */
  onPageScroll(e){
    if(e.scrollTop >= 500){
      this.setData({
        isBackTop:true
      })
    }else{
      this.setData({
        isBackTop:false
      })
    }
  },


  // 获取搜索框输入值
  getInputValue(e){
    this.setData({
      inputValue: e.detail.value
    })
  },

  // 模糊查询
  goSearch(){ 
    if(this.data.inputValue === ''){
      wx.showToast({
        icon: 'error',
        title: '输入不能为空',
      })
      this.getArticle()
    }else{
      // 使用本地mock数据进行模糊查询
      let searchValue = this.data.inputValue.toLowerCase()
      let articles = mockData.articles.filter(article => {
        return article.userName.toLowerCase().includes(searchValue) || 
               article.text.toLowerCase().includes(searchValue)
      })
      // 时间格式化
      for (var n in articles) articles[n].time = formatDate.formatDate(new Date(articles[n].time),'yyyy-MM-dd hh:mm:ss')
      this.setData({
        articles: articles
      })
      console.log('查询成功', articles)
    }
  },

  // 回到顶部处理函数
  backTop(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  // 帖子分享处理函数
  onShareAppMessage(e) {
    let index = e.target.dataset.index;
    return {
      title: this.data.articles[index].text,
      imageUrl: this.data.articles[index].images[0],
      path: '/pages/article/article',
    }
  },

  // 跳转发布页面
  goPublish(){
    if(wx.getStorageSync('nickName') && wx.getStorageSync('avatarUrl')){
      wx.navigateTo({
        url: '/pages/publish/publish',
      })
    }else{
      wx.showToast({
        icon: 'error',
        title: '还未登录',
      })
    }
  },

  // 获取发布列表数据
  getArticle(){ 
    // 使用本地mock数据
    let articles = mockData.articles
    // 时间格式化
    for (var n in articles) articles[n].time = formatDate.formatDate(new Date(articles[n].time),'yyyy-MM-dd hh:mm:ss')
    this.setData({
      articles: articles
    })
    wx.stopPullDownRefresh()
  },

  // 帖子图片点击大图预览
  previewImg(e){
    wx.previewImage({
      current: "e.currentTarget.dataset.src",
      urls: this.data.articles[e.currentTarget.dataset.index].images
  });
  },

  // 帖子删除
  deleteArticle(e){
    // 模拟删除帖子（本地数据不会真的删除，只是重新获取数据）
    wx.showToast({
      icon: 'success',
      title: '删除成功'
    })
    this.getArticle()
  },

  // 帖子点赞
  prizeAction(e){
    if(wx.getStorageSync('nickName') && wx.getStorageSync('avatarUrl')){
        // 模拟点赞功能
        wx.showToast({
          icon: 'success',
          title: '点赞成功'
        })
        this.getArticle()
    }else{
      wx.showToast({
        icon: 'error',
        title: '还未登录',
      })
    }
  }
})
