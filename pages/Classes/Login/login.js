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