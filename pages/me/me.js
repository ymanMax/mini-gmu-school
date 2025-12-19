// pages/me/me.js
var app = getApp()
var mockData = require('../../utils/mockData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    gender: 0, // 0: 未知, 1: 男, 2: 女
    city: '',
    province: '',
    country: '',
    signature: '', // 个人签名
    hasUserInfo: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadUserInfo()
  },

  // 加载用户信息
  loadUserInfo: function() {
    const nickName = wx.getStorageSync('nickName')
    const avatarUrl = wx.getStorageSync('avatarUrl')

    if (nickName && avatarUrl) {
      this.setData({
        hasUserInfo: true,
        nickName: nickName,
        avatarUrl: avatarUrl,
        gender: wx.getStorageSync('gender') || 0,
        city: wx.getStorageSync('city') || '',
        province: wx.getStorageSync('province') || '',
        country: wx.getStorageSync('country') || '',
        signature: wx.getStorageSync('signature') || '',
      })
    } else {
      this.setData({
        hasUserInfo: false
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
      gender: mockUser.gender || 0,
      city: mockUser.city || '',
      province: mockUser.province || '',
      country: mockUser.country || '',
      hasUserInfo: true
    })

    // 保存到本地存储
    wx.setStorageSync('nickName', mockUser.nickName)
    wx.setStorageSync('avatarUrl', mockUser.avatarUrl)
    wx.setStorageSync('openid', mockUser.openid)
    wx.setStorageSync('gender', mockUser.gender || 0)
    wx.setStorageSync('city', mockUser.city || '')
    wx.setStorageSync('province', mockUser.province || '')
    wx.setStorageSync('country', mockUser.country || '')

    wx.showToast({
      icon: 'success',
      title: '登录成功'
    })
  },

  // 选择头像
  chooseAvatar: function() {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePath = res.tempFilePaths[0]
        that.setData({
          avatarUrl: tempFilePath
        })
        wx.setStorageSync('avatarUrl', tempFilePath)
        wx.showToast({
          icon: 'success',
          title: '头像更新成功'
        })
      }
    })
  },

  // 编辑昵称
  editNickName: function() {
    var that = this
    wx.showModal({
      title: '编辑昵称',
      editable: true,
      placeholderText: '请输入昵称',
      success: function(res) {
        if (res.confirm && res.content.trim()) {
          that.setData({
            nickName: res.content.trim()
          })
          wx.setStorageSync('nickName', res.content.trim())
          wx.showToast({
            icon: 'success',
            title: '昵称更新成功'
          })
        }
      }
    })
  },

  // 选择性别
  chooseGender: function() {
    var that = this
    wx.showActionSheet({
      itemList: ['男', '女', '未知'],
      success: function(res) {
        const genderMap = [1, 2, 0]
        const selectedGender = genderMap[res.tapIndex]
        that.setData({
          gender: selectedGender
        })
        wx.setStorageSync('gender', selectedGender)
        wx.showToast({
          icon: 'success',
          title: '性别更新成功'
        })
      }
    })
  },

  // 编辑城市
  editCity: function() {
    var that = this
    wx.showModal({
      title: '编辑城市',
      editable: true,
      placeholderText: '请输入城市',
      success: function(res) {
        if (res.confirm) {
          that.setData({
            city: res.content.trim()
          })
          wx.setStorageSync('city', res.content.trim())
          wx.showToast({
            icon: 'success',
            title: '城市更新成功'
          })
        }
      }
    })
  },

  // 编辑个人签名
  editSignature: function() {
    var that = this
    wx.showModal({
      title: '编辑个人签名',
      editable: true,
      placeholderText: '请输入个人签名',
      success: function(res) {
        if (res.confirm) {
          that.setData({
            signature: res.content.trim()
          })
          wx.setStorageSync('signature', res.content.trim())
          wx.showToast({
            icon: 'success',
            title: '签名更新成功'
          })
        }
      }
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
          wx.removeStorageSync('gender')
          wx.removeStorageSync('city')
          wx.removeStorageSync('province')
          wx.removeStorageSync('country')
          wx.removeStorageSync('signature')
          this.setData({
            nickName: '',
            avatarUrl: '',
            gender: 0,
            city: '',
            province: '',
            country: '',
            signature: '',
            hasUserInfo: false
          })
        }
      }
    })
  }
})