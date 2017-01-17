// Page(
//     {
//         onLoad:function() {
//             //获取open id，请在官网填写微信小程序key
//         wx.login({
//           success: function(res) {
//               if (res.code) {
//                   //发起网络请求
//                   console.log(res.code)
//                   Bmob.User.requestOpenId(res.code, {
//                       success: function(result) {
//                           console.log(result)                         
//                       },
//                       error: function(error) {
//                           // Show the error message somewhere
//                           console.log("Error: " + error.code + " " + error.message);
//                       }
//                   });
//               } else {
//                   console.log('获取用户登录态失败！' + res.errMsg)
//               }
//           }
//       });
//     } 
//         }
//     }
// )

var app = getApp()
Page({
    
    onLoad:function(){
        //获取open id，请在官网填写微信小程序key
        wx.login({
          success: function(res) {
              if (res.code) {
                  //发起网络请求
                  console.log(res.code)

                  Bmob.User.requestOpenId(res.code, {
                      success: function(result) {
                          console.log(result)                         
                      },
                      error: function(error) {
                          // Show the error message somewhere
                          console.log("Error: " + error.code + " " + error.message);
                      }
                  });
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
            console.log(res.data)
          },
          fail: function() {
            // fail
            console.log('失败')
          },
          complete: function() {
            // complete
            console.log('成功')
          }
        })
    }     
})