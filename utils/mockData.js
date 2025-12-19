// mock数据文件
const mockData = {
  // 轮播图数据
  rotationList: [
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
  // 分类标签数据
  sortList: [
    {
      id: 1,
      icon: "../../assets/images/sort/timetable.png",
      sortid: 2,
      text: "我的课表",
      page: '/pages/timetable/timetable'
    }, {
      id: 2,
      icon: "../../assets/images/sort/calendar.png",
      sortid: 3,
      text: "校历查询",
      page: '/pages/article/article?type=calendar'
    }, {
      id: 3,
      icon: "../../assets/images/sort/achievement.png",
      sortid: 4,
      text: "成绩查询",
      page: '/pages/article/article?type=achievement'
    }, {
      id: 4,
      icon: "../../assets/images/sort/pay.png",
      sortid: 5,
      text: "缴费大厅",
      page: '/pages/article/article?type=pay'
    }, {
      id: 5,
      icon: "../../assets/images/sort/repair.png",
      sortid: 6,
      text: "寝室报修",
      page: '/pages/article/article?type=repair'
    }, {
      id: 6,
      icon: "../../assets/images/sort/46ji.png",
      sortid: 7,
      text: "四级查询",
      page: '/pages/article/article?type=exam'
    }, {
      id: 7,
      icon: "../../assets/images/sort/other.png",
      sortid: 8,
      text: "更多",
      page: '/pages/article/article?type=more'
    },
  ],
  // 文章数据
  articles: [
    {
      _id: 'article_001',
      headImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
      images: [
        'https://i.loli.net/2021/05/16/7P2la8DwiKVLjqM.jpg',
        'https://i.loli.net/2021/05/16/oSYXhs6wKG5Wq3u.jpg'
      ],
      video: '',
      text: '今天天气真好，适合去图书馆学习！有一起的同学吗？',
      time: 1704067200000, // 2024-01-01
      location: '北京市·清华大学图书馆',
      type: '生活分享',
      userName: '小明同学',
      prizeList: [
        { nickName: '小红', openid: 'user_002', isPrize: true },
        { nickName: '小刚', openid: 'user_003', isPrize: true }
      ],
      isPrize: false
    },
    {
      _id: 'article_002',
      headImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoj0hHXhgJNOTSOFsS4uZs8x1ConecaVOB8eIl115xmJZcT4oCicvia7wMEufibKtTLqiaJeanU2Lpg3w/132',
      images: [
        'https://i.loli.net/2021/05/16/Lsx8PobdcAu5pvY.jpg'
      ],
      video: '',
      text: '出售二手教材：高等数学、线性代数、大学物理，有需要的同学联系我！',
      time: 1703980800000, // 2023-12-31
      location: '北京市·北京大学',
      type: '闲置交易',
      userName: '学霸小李',
      prizeList: [
        { nickName: '小王', openid: 'user_004', isPrize: true }
      ],
      isPrize: false
    },
    {
      _id: 'article_003',
      headImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoj0hHXhgJNOTSOFsS4uZs8x1ConecaVOB8eIl115xmJZcT4oCicvia7wMEufibKtTLqiaJeanU2Lpg3w/132',
      images: [
        'https://i.loli.net/2021/05/16/Lsx8PobdcAu5pvY.jpg'
      ],
      video: '',
      text: '求购二手自行车一辆，价格合理，有意者联系！',
      time: 1703894400000, // 2023-12-30
      location: '北京市·北京理工大学',
      type: '求购信息',
      userName: '小李同学',
      prizeList: [],
      isPrize: false
    }
  ],
  // 课程表数据
  courses: [
    {
      _id: 'course_001',
      name: '高等数学',
      teacher: '张老师',
      time: '周一 08:00-09:40',
      location: '教学楼A101',
      week: '1-16周'
    },
    {
      _id: 'course_002',
      name: '大学英语',
      teacher: '李老师',
      time: '周二 10:00-11:40',
      location: '教学楼B202',
      week: '1-16周'
    },
    {
      _id: 'course_003',
      name: '计算机基础',
      teacher: '王老师',
      time: '周三 14:00-15:40',
      location: '实验楼C303',
      week: '1-16周'
    },
    {
      _id: 'course_004',
      name: '大学物理',
      teacher: '赵老师',
      time: '周四 08:00-09:40',
      location: '教学楼A102',
      week: '1-16周'
    },
    {
      _id: 'course_005',
      name: '线性代数',
      teacher: '刘老师',
      time: '周五 10:00-11:40',
      location: '教学楼B203',
      week: '1-16周'
    }
  ],
  // 用户数据
  users: [
    {
      _id: 'user_001',
      openid: 'user_001',
      nickName: '小明同学',
      avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
      gender: 1,
      city: '北京',
      province: '北京',
      country: '中国'
    },
    {
      _id: 'user_002',
      openid: 'user_002',
      nickName: '小红同学',
      avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoj0hHXhgJNOTSOFsS4uZs8x1ConecaVOB8eIl115xmJZcT4oCicvia7wMEufibKtTLqiaJeanU2Lpg3w/132',
      gender: 2,
      city: '上海',
      province: '上海',
      country: '中国'
    }
  ]
}

module.exports = mockData