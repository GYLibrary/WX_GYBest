var app=getApp()
Page({
  //页面的初始数据
  data: {
    // motto: 'Hello World',
    // userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //MARK : - 生命周期函数
  //监听页面加载
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  onReady: function() {
    console.log('监听页面初次渲染完成')
  },
  onShow: function() {
     console.log('监听页面显示')
  },
  onHide: function() {
     console.log('监听页面隐藏')
  },
  onUnload: function() {
    console.log('监听页面卸载')
  },
  onPullDownRefresh: function(){
    console.log('监听用户下拉动作')
  },
  onReachBottom: function() {
    console.log('页面上拉触底事件的处理函数')
  },
  onShareAppMessage: function() {
    console.log('用户点击右上角分享')
  }


})