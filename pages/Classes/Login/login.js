
var app = getApp()
Page({
    
    onLoad:function(){
        //获取open id，请在官网填写微信小程序key
        wx.login({
          success: function(res) {
              if (res.code) {
                  //发起网络请求
                  console.log(res.code)
              } else {
                  console.log('获取用户登录态失败！' + res.errMsg)
              }
          }
      });
    } ,
    formSubmit:function(event){
        wx.request({
          url: 'http://wechat.hoyofuwu.com/FamilyAccount/AppLogin',
          data: {"phone":event.detail.value.username,
                 "password":event.detail.value.paswd},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            console.log(res.data.msg)
            wx.setStorageSync('logined', '1')
            wx.setStorageSync('tooken', res.data.msg)
          },
          fail: function() {
            // fail
            console.log('失败')
          },
          complete: function() {
            // complete
            console.log('成功')
            
            //跳转到应用内某个非tabbar得界面
            // wx.redirectTo({
            //   url: 'tabBar'
            // //   console.log('跳转成功')
            // })
            //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
            wx.switchTab({
              url: '/pages/Classes/Home/index',
              success: function(res){
                // success
              },
              fail: function() {
                // fail
              },
              complete: function() {
                // complete
              }
            })
          }
        })
    }     
})