// pages/index/index.js
var app = getApp()
const mockData = require('../../utils/mockData.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: 0,
    // 轮播图数据，添加id和链接字段
    rotationList:[
      {
        id: 1,
        image: 'https://i.loli.net/2021/05/16/7P2la8DwiKVLjqM.jpg',
        link: '/pages/article/article?id=1',
        title: '校园新闻'
      },
      {
        id: 2,
        image: 'https://i.loli.net/2021/05/16/oSYXhs6wKG5Wq3u.jpg',
        link: '/pages/article/article?id=2',
        title: '活动通知'
      },
      {
        id: 3,
        image: 'https://i.loli.net/2021/05/16/Lsx8PobdcAu5pvY.jpg',
        link: '/pages/article/article?id=3',
        title: '学术讲座'
      },
      {
        id: 4,
        image: 'https://i.loli.net/2021/05/16/5fjAtRqTuS3Eca7.jpg',
        link: '/pages/article/article?id=4',
        title: '校园风光'
      },
    ],
    swiperCurrent: 0,
    // 默认图片，用于加载失败时显示
    defaultImage: '../../assets/images/default.png',

    // 分类标签数据
    sortList:[
      {
        id: 1,
        icon: "../../assets/images/sort/timetable.png",
        sortid: 2,
        text:"我的课表",
        page: '/pages/timetable/timetable'
      },{
        id: 2,
        icon: "../../assets/images/sort/calendar.png",
        sortid: 3,
        text:"校历查询",
        page: '/pages/article/article?type=calendar'
      },{
        id: 3,
        icon: "../../assets/images/sort/achievement.png",
        sortid: 4,
        text:"成绩查询",
        page: '/pages/article/article?type=achievement'
      },{
        id: 4,
        icon: "../../assets/images/sort/pay.png",
        sortid: 5,
        text:"缴费大厅",
        page: '/pages/article/article?type=pay'
      },{
        id: 5,
        icon: "../../assets/images/sort/repair.png",
        sortid: 6,
        text:"寝室报修",
        page: '/pages/article/article?type=repair'
      },{
        id: 6,
        icon: "../../assets/images/sort/46ji.png",
        sortid: 7,
        text:"四级查询",
        page: '/pages/article/article?type=exam'
      },{
        id: 7,
        icon: "../../assets/images/sort/other.png",
        sortid: 8,
        text:"更多",
        page: '/pages/article/article?type=more'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 使用mock数据初始化轮播图和分类标签
    this.setData({
      navH: app.globalData.navHeight,
      rotationList: mockData.rotationList,
      sortList: mockData.sortList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //轮播图改变事件
  swiperChange: function (e) {
    if (e.detail.source === 'touch'){
      this.setData({
        swiperCurrent: e.detail.current
      })
    }
  },

  // 轮播图图片加载失败处理
  imageLoadError: function (e) {
    const index = e.currentTarget.dataset.index;
    const rotationList = this.data.rotationList;
    rotationList[index].image = this.data.defaultImage;
    this.setData({
      rotationList: rotationList
    });
  },

  // 轮播图点击事件
  swiperItemClick: function (e) {
    const index = e.currentTarget.dataset.index;
    const item = this.data.rotationList[index];
    // 跳转到对应的链接
    wx.navigateTo({
      url: item.link
    });
  },

  // 分类标签点击事件
  itemClick: function (e) {
    const index = e.currentTarget.dataset.index;
    const item = this.data.sortList[index];
    // 跳转到对应的页面
    wx.navigateTo({
      url: item.page
    });
  },

  // 添加分类标签
  addSortItem: function (item) {
    const sortList = this.data.sortList;
    sortList.push(item);
    this.setData({
      sortList: sortList
    });
  },

  // 删除分类标签
  removeSortItem: function (id) {
    const sortList = this.data.sortList.filter(item => item.id !== id);
    this.setData({
      sortList: sortList
    });
  }
})