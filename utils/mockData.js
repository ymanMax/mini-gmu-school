// mock数据文件
const mockData = {
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
      title: '图书馆学习邀约',
      text: '今天天气真好，适合去图书馆学习！有一起的同学吗？',
      time: 1704067200000, // 2024-01-01
      location: '北京市·清华大学图书馆',
      type: '生活分享',
      userName: '小明同学',
      prizeList: [
        { nickName: '小红', openid: 'user_002', isPrize: true },
        { nickName: '小刚', openid: 'user_003', isPrize: true }
      ],
      commentList: [],
      isPrize: false
    },
    {
      _id: 'article_002',
      headImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoj0hHXhgJNOTSOFsS4uZs8x1ConecaVOB8eIl115xmJZcT4oCicvia7wMEufibKtTLqiaJeanU2Lpg3w/132',
      images: [
        'https://i.loli.net/2021/05/16/Lsx8PobdcAu5pvY.jpg'
      ],
      video: '',
      title: '二手教材出售',
      text: '出售二手教材：高等数学、线性代数、大学物理，有需要的同学联系我！',
      time: 1703980800000, // 2023-12-31
      location: '北京市·北京大学',
      type: '闲置交易',
      userName: '学霸小李',
      prizeList: [
        { nickName: '小王', openid: 'user_004', isPrize: true }
      ],
      commentList: [],
      isPrize: false
    },
    {
      _id: 'article_003',
      headImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoj0hHXhgJNOTSOFsS4uZs8x1ConecaVOB8eIl115xmJZcT4oCicvia7wMEufibKtTLqiaJeanU2Lpg3w/132',
      images: [
        'https://i.loli.net/2021/05/16/Lsx8PobdcAu5pvY.jpg'
      ],
      video: '',
      title: '求购二手自行车',
      text: '求购二手自行车一辆，价格合理，有意者联系！',
      time: 1703894400000, // 2023-12-30
      location: '北京市·北京理工大学',
      type: '求购信息',
      userName: '小李同学',
      prizeList: [],
      commentList: [],
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