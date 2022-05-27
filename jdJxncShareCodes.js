/*
京喜农场助力码
此助力码要求种子 active 相同才能助力，多个账号的话可以种植同样的种子，如果种子不同的话，会自动跳过使用云端助力
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京京喜农场的好友码。
// 同一个京东账号的好友助力码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 每个账号 shareCdoe 是一个 json，示例如下
// {"smp":"22bdadsfaadsfadse8a","active":"jdnc_1_btorange210113_2","joinnum":"1"}
let JxncShareCodes = [
  '{"smp":"53d864d53d2cd9d383cbdc0d835a90a8","active":"jdnc_1_2yuantudou210616_2","joinnum":1}@{"smp":"dc3e4ae496e62dda84b484c9a39323a7","active":"jdnc_1_3yuanfanqiej210422_2","joinnum":1}@{"smp":"11effd0f45ca194e966ec880e53da87e","active":"jdnc_1_3yuanguifeimang210616_2","joinnum":1}@{"smp":"db8ad8f88e4d5148bfb217399c17d9be","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"466119539a1f68ac30fc34325fda7a3b","active":"jdnc_1_2yuanguifeimang210315_2","joinnum":1}@{"smp":"60bff4187006cd5508453b30988097df","active":"jdnc_1_2yuanguifeimang210315_2","joinnum":1}@{"smp":"16e5e1f16033469d030f8fafcc4a2100","active":"jdnc_1_3yuanshupian210601_2","joinnum":1}@{"smp":"c251b5a397d2f2d00b41a8537157dc3b","active":"jdnc_1_3yuanshupian210601_2","joinnum":1}@{"smp":"867642eda21c5a3b01e32c49bc962d5b","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"6ebe5e8eb44e50214768c8025b6bb05a","active":"jdnc_1_3yuanyoutao210616_2","joinnum":1}@{"smp":"a7327738b0faf987bada843ba22205e5","active":"jdnc_1_dami210601_2","joinnum":1}@{"smp":"b2d5022ed824d0dd4cd6495a39f678a3","active":"jdnc_1_3yuanshousibang210601_2","joinnum":1}@{"smp":"f16acd467b071571a114c64011420a0f","active":"jdnc_1_2yuanguoba210601_2","joinnum":1}@{"smp":"6a9ac35f0ccfd644ac4bf49d55306f4a","active":"jdnc_1_3yuanshupian210601_2","joinnum":1}',//账号一的好友shareCode,不同好友中间用@符号隔开
//账号二的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有京喜农场助力码
if (process.env.JXNC_SHARECODES) {
  if (process.env.JXNC_SHARECODES.indexOf('&') > -1) {
    console.log(`您的京喜农场助力码选择的是用&隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('&');
  } else if (process.env.JXNC_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的京喜农场助力码选择的是用换行隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('\n');
  } else {
    JxncShareCodes = process.env.JXNC_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  // console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < 50; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JxncShareCode' + index] = JxncShareCodes[0];
}
