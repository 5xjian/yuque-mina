// pages/blog/index.js
Page({
  data: {
    docData: []
  },
  // iView Start
  handleClick(e) {
    var slug = e.currentTarget.dataset.slug
    var app = getApp()
    app.docSlug = slug
    wx.navigateTo({
      url: '/pages/doc/doc'
    })
  },
  // iView End
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.yuque.com/api/v2/repos/5xjian/blog/docs', 
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        'X-Auth-Token': '8T5yn5ZrwzmNW1WEKFe37YqctOgkISvJpYPPBFoK'
      },
      success(res) {
        that.setData({
          docData: res.data.data
        });
        console.log(res.data.data)
      }
    })
  }
})
