Page({

  /**
   * 页面的初始数据
   */
  data: {
    navItems:[
      {
        title:"精选",
        id:1
      },
      {
        title:"电视剧",
        id:2
      },
      {
        title:"综艺",
        id:3
      },
      {
        title:"电影",
        id:4
      },
      {
        title:"动漫",
        id:5
      },
      {
        title:"少儿",
        id:6
      },
    ],
    swiper: {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      imgPath: ["/images/haibao1.jpg", "/images/haibao2.jpg", "/images/haibao3.jpg"],
      indicatorDots: false,
      vertical: false,
      interval: 2000,
      duration: 500,
      autoplay: true
    },
    scrollItem:[
      {
        id: "001",
        name: "我是第一个文字",
        imgPath: "/images/haibao1.jpg",
        text:'第一个文字详细内容'
      },
      {
        id: "002",
        name: "我是第二个文字",
        imgPath: "/images/haibao2.jpg",
        text:'第二个文字详细内容'
      },
      {
        id: "003",
        name: "我是第三个文字",
        imgPath: "/images/haibao3.jpg",
        text:'第三个文字详细内容'
      },
      {
        id: "004",
        name: "我是第四个文字",
        imgPath: "/images/haibao1.jpg",
        text:'第四个文字详细内容'
      },
    ],
    show:false
  },
  scroll(){
    this.setData({
      show:true
    })
  },
  gotoVideo(){
    wx.navigateTo({
      url: '/pages/videotest/videotest',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  }
})