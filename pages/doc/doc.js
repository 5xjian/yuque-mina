// pages/doc/doc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var WxParse = require('../../wxParse/wxParse.js')
    wx.request({
      url: 'https://www.yuque.com/api/v2/repos/5xjian/blog/docs/'+getApp().docSlug, //仅为示例，并非真实的接口地址
      data: {
        raw: 1
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        'X-Auth-Token': '8T5yn5ZrwzmNW1WEKFe37YqctOgkISvJpYPPBFoK'
      },
      success(res) {
        that.setData({
          docData: res.data.data
        });
        var article = res.data.data.body_html
        WxParse.wxParse('article', 'html', article, that, 5);
        // console.log(article)
      }
    })
  }
})