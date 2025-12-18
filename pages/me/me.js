// pages/me/me.js
var app = getApp()
var mockData = require('../../utils/mockData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'',
    avatarUrl:'',
    hasUserInfo: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(wx.getStorageSync('nickName') && wx.getStorageSync('avatarUrl')){
      this.setData({
        hasUserInfo:true,
        nickName : wx.getStorageSync('nickName'),
        avatarUrl : wx.getStorageSync('avatarUrl')
      })
    }else{
      this.setData({
        hasUserInfo:false
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  // 获取用户头像昵称（本地模拟）
  getUserProfile(){
    // 使用本地mock数据中的第一个用户信息
    const mockUser = mockData.users[0]
    
    this.setData({
      nickName: mockUser.nickName,
      avatarUrl: mockUser.avatarUrl,
      hasUserInfo: true
    })
    
    wx.setStorageSync('nickName', mockUser.nickName)
    wx.setStorageSync('avatarUrl', mockUser.avatarUrl)
    wx.setStorageSync('openid', mockUser.openid)
    
    wx.showToast({
      icon: 'success',
      title: '登录成功'
    })
  },

  // 退出登录
  logout(){
    wx.showModal({
      title: '提示',
      content: '是否要退出登录',
      success: res=> {
        if (res.confirm) {
          wx.removeStorageSync('nickName')
          wx.removeStorageSync('avatarUrl')
          wx.removeStorageSync('openid')
          this.setData({
            nickName: '',
            avatarUrl: '',
            hasUserInfo: false
          })
        }
      }
    })
  }
})