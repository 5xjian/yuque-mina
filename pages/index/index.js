//index.js
//获取应用实例
const app = getApp()
const jinrishici = require('../../utils/jinrishici.js')

Page({
  data: {
    userData: []
  },
  // iView Start
  handleClick({ detail }) {
    wx.navigateTo({
      url: '/pages/blog/index'
    })
  },
  // iView End
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.yuque.com/api/v2/users/5xjian', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        that.setData({
          userData: res.data.data
        });
        console.log(res.data.data)
      }
    }),
      jinrishici.load(result => {
        // 下面是处理逻辑示例
        this.setData({ "jinrishici": result.data.content })
      })
  }
})
