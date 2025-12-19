//index.js
//获取应用实例
var app = getApp()
var mockData = require('../../utils/mockData.js')
Page({

  data: {
		time:[
			{ index: '1', name: '08:30\n09:10' },
			{ index: '2', name: '09:20\n10:00' },
			{ index: '3', name: '10:20\n11:00' },
			{ index: '4', name: '11:10\n11:50' },
			{ index: '5', name: '14:00\n14:40' },
			{ index: '6', name: '14:45\n15:25' },
			{ index: '7', name: '15:45\n16:25' },
      { index: '8', name: '16:30\n17:10' },
      { index: '9', name: '19:00\n19:40' },
      { index: '10', name: '19:50\n20:30' }
		],
    colorArrays: [ '#f05261', '#48a8e4', '#ffd061', '#52db9a', '#66CCFF', '#ff9800', '#3f51b5', '#9966CC', '#4adbc3'],
    courses: [],
    isEditing: false,
    showCourseModal: false,
    editingCourse: null, // 正在编辑的课程索引
    formData: {
      course: '',
      day: 1,
      start: 1,
      count: 2
    }
  },

  onLoad(){
    this.loadCourses()
  },

  onShow(){
    this.loadCourses()
  },

  // 从本地存储加载课程数据
  loadCourses() {
    try {
      const storedCourses = wx.getStorageSync('timetable_courses')
      if (storedCourses && storedCourses.length > 0) {
        this.setData({
          courses: storedCourses
        })
      } else {
        // 如果本地存储没有数据，使用mock数据
        const mockCourses = this.convertMockDataToTimetableFormat(mockData.courses)
        this.setData({
          courses: mockCourses
        })
        this.saveCoursesToStorage(mockCourses)
      }
    } catch (e) {
      console.error('加载课程数据失败:', e)
      // 使用mock数据作为 fallback
      const mockCourses = this.convertMockDataToTimetableFormat(mockData.courses)
      this.setData({
        courses: mockCourses
      })
    }
  },

  // 将mockData中的课程格式转换为课表页面所需的格式
  convertMockDataToTimetableFormat(mockCourses) {
    // 这是一个简单的转换示例，实际项目中可能需要更复杂的逻辑
    // 这里我们将mock数据转换为课表页面所需的格式
    const timetableCourses = [
      { day: 1, start: 1, count: 2, course: '高等数学@教A-301' },
      { day: 1, start: 3, count: 2, course: '大学英语@教B-202' },
      { day: 2, start: 1, count: 2, course: '计算机基础@实验楼C303' },
      { day: 2, start: 5, count: 4, course: '大学物理@教A-102' },
      { day: 3, start: 1, count: 1, course: '线性代数@教B-203' },
      { day: 3, start: 3, count: 1, course: '概率论@教C-304' },
      { day: 3, start: 5, count: 2, course: '数据结构@实验楼D405' },
      { day: 4, start: 1, count: 4, course: '操作系统@实验楼E506' },
      { day: 4, start: 5, count: 2, course: '数据库原理@教D-407' },
      { day: 5, start: 1, count: 2, course: '软件工程@教E-508' },
      { day: 6, start: 3, count: 2, course: '人工智能@教F-609' },
      { day: 7, start: 1, count: 2, course: '机器学习@实验楼G710' }
    ]

    return timetableCourses
  },

  // 保存课程数据到本地存储
  saveCoursesToStorage(courses) {
    try {
      wx.setStorageSync('timetable_courses', courses)
      console.log('课程数据已保存到本地存储')
    } catch (e) {
      console.error('保存课程数据到本地存储失败:', e)
    }
  },

  // 开始编辑模式
  startEdit() {
    this.setData({
      isEditing: true
    })
  },

  // 保存编辑
  saveEdit() {
    this.setData({
      isEditing: false
    })
    wx.showToast({
      title: '保存成功',
      icon: 'success'
    })
  },

  // 取消编辑
  cancelEdit() {
    this.setData({
      isEditing: false
    })
  },

  // 显示添加课程弹窗
  showAddCourseModal() {
    this.setData({
      showCourseModal: true,
      editingCourse: null,
      formData: {
        course: '',
        day: 1,
        start: 1,
        count: 2
      }
    })
  },

  // 隐藏课程弹窗
  hideCourseModal() {
    this.setData({
      showCourseModal: false,
      editingCourse: null
    })
  },

  // 停止事件传播
  stopPropagation() {
    // 空函数，用于阻止事件冒泡
  },

  // 编辑课程
  editCourse(e) {
    const index = e.currentTarget.dataset.index
    const course = this.data.courses[index]

    this.setData({
      showCourseModal: true,
      editingCourse: index,
      formData: {
        course: course.course,
        day: course.day,
        start: course.start,
        count: course.count
      }
    })
  },

  // 删除课程
  deleteCourse(e) {
    const index = e.currentTarget.dataset.index
    const courses = [...this.data.courses]
    courses.splice(index, 1)

    this.setData({
      courses: courses
    })

    this.saveCoursesToStorage(courses)

    wx.showToast({
      title: '删除成功',
      icon: 'success'
    })
  },

  // 表单输入处理
  onFormInput(e) {
    const field = e.currentTarget.dataset.field
    const value = e.detail.value

    this.setData({
      [`formData.${field}`]: value
    })
  },

  // 星期选择处理
  onDayChange(e) {
    this.setData({
      [`formData.day`]: parseInt(e.detail.value) + 1 // picker的value是0-6，对应周一到周日
    })
  },

  // 开始节数选择处理
  onStartChange(e) {
    this.setData({
      [`formData.start`]: parseInt(e.detail.value) + 1 // picker的value是0-9，对应1-10节
    })
  },

  // 课程节数选择处理
  onCountChange(e) {
    this.setData({
      [`formData.count`]: parseInt(e.detail.value) + 1 // picker的value是0-3，对应1-4节
    })
  },

  // 确认添加/编辑课程
  confirmCourse() {
    const { formData, editingCourse, courses } = this.data

    // 验证表单数据
    if (!formData.course.trim()) {
      wx.showToast({
        title: '请输入课程名称',
        icon: 'none'
      })
      return
    }

    let updatedCourses

    if (editingCourse !== null) {
      // 编辑现有课程
      updatedCourses = [...courses]
      updatedCourses[editingCourse] = { ...formData }
      wx.showToast({
        title: '课程已更新',
        icon: 'success'
      })
    } else {
      // 添加新课程
      updatedCourses = [...courses, formData]
      wx.showToast({
        title: '课程已添加',
        icon: 'success'
      })
    }

    this.setData({
      courses: updatedCourses,
      showCourseModal: false,
      editingCourse: null
    })

    this.saveCoursesToStorage(updatedCourses)
  }
})