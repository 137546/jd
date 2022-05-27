/*
东东工厂互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let shareCodes = [
  'T0205KkcBURshDaxXEGC_Z9_CjVWnYaS5kRrbA@T0225KkcRRhI9QWFcUv1kqJbdACjVWnYaS5kRrbA@T0225KkcRBcRpgLWJk_2laQCfQCjVWnYaS5kRrbA@T0225KkcRhlP9AeEI0_zkqQOfQCjVWnYaS5kRrbA@T0225KkcRh1I_FfRdknzxfEJJwCjVWnYaS5kRrbA@T0225KkcRxZN9wHVdEj2waNfcACjVWnYaS5kRrbA@T0225KkcR0tPpFGGJUn9wPdZcQCjVWnYaS5kRrbA@T0225KkcRh9K9lXfKBjylKIMdwCjVWnYaS5kRrbA@T0225KkcRh0c8QaFJxL3nP8JcwCjVWnYaS5kRrbA@T022aFPflp-oIMFa9bxZlPEIdwCjVWnYaS5kRrbA@T0225KkcR0wZ_VbTIE6glvYOcACjVWnYaS5kRrbA@T020v_hwQBYQ81fKJBvykvcKCjVWnYaS5kRrbA@T019-akQGWBHpgKGZ3OXwagCjVWnYaS5kRrbA@T0225KkcRxcQp13XdRz2xvJedQCjVWnYaS5kRrbA@T0225KkcRxkdowfWIEvznPFYcQCjVWnYaS5kRrbA@T020uPRwRBoR9FTKIR3zkvcMCjVWnYaS5kRrbA@T0225KkcRB4dp1XfIRv3x6NcfACjVWnYaS5kRrbA',//账号一的好友shareCode,不同好友中间用@符号隔开
]
// 判断github action里面是否有东东工厂互助码
if (process.env.DDFACTORY_SHARECODES) {
  if (process.env.DDFACTORY_SHARECODES.indexOf('&') > -1) {
    console.log(`您的互助码选择的是用&隔开\n`)
    shareCodes = process.env.DDFACTORY_SHARECODES.split('&');
  } else if (process.env.DDFACTORY_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的互助码选择的是用换行隔开\n`)
    shareCodes = process.env.DDFACTORY_SHARECODES.split('\n');
  } else {
    shareCodes = process.env.DDFACTORY_SHARECODES.split();
  }
} else if (process.env.DDFACTORY_SHARECODES) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i <50; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[0];
}
