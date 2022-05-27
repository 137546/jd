/*
东东萌宠互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PetShareCodes = [
  // IOS本地脚本用户这个列表填入你要助力的好友的shareCode
     //账号一的好友shareCode,不同好友的shareCode中间用@符号隔开
     'MTE1NDQ5OTUwMDAwMDAwNDM4ODgxNTc=@MTAxODc2NTE0NzAwMDAwMDAyMDA0NDMxNw==@MTEyNjkzMjAwMDAwMDAwMDUyNTgxODUx@MTAxODc2NTEzMTAwMDAwMDAzMjc4MTk4OQ==@MTAxODc2NTEzMzAwMDAwMDAyMDU4NTIxMw==@MTE1NDY3NTMwMDAwMDAwNTA0Nzk2MzM=@MTE1NDUwMTI0MDAwMDAwMDQzNjIzNzQx@MTE1NDUyMjEwMDAwMDAwNDM3ODI1MDU=@MTEzMzI0OTE0NTAwMDAwMDA0NDAyOTc5NQ==@MTE1NDQ5OTIwMDAwMDAwNDQwMjk3NTM=@MTE1NDQ5OTUwMDAwMDAwNDQwMjkxOTU=@MTEzMzI0OTE0NTAwMDAwMDA0NDAzMTQxMQ==@MTEyNjE4NjQ2MDAwMDAwMDQ5NTk0NTE3@MTE5MzEwNTEzODAwMDAwMDA0OTk3Njk0MQ==@MTAxNzIxMDc1MTAwMDAwMDA0OTY1NDk5Nw==@MTE1NDQ5OTUwMDAwMDAwNDA1NDM0Mzc=@MTAxNzIyNTU1NDAwMDAwMDA0OTM0MDc0MQ==@MTEzMzI1MTE4NTAwMDAwMDA1MDA1MjY2Nw==@MTEyNjkzMjAwMDAwMDAwMDUxMDM4NDU5@MTAxODc2NTEzNTAwMDAwMDAyMDA0MzYwOQ==@MTE1NDUyMjEwMDAwMDAwNDM4NzAyNTM='
  ]

for (let i = 0; i < 50; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PetShareCode' + index] = PetShareCodes[0];
}
