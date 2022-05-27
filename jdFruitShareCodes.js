/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
 
let FruitShareCodes = [
     //账号一的好友shareCode,不同好友的shareCode中间用@符号隔开
     '0115a7c1a19f4ddc8669d8f86c429449@9896bdb13f6f422cb10075e332fb5c8f@70fc8d9590f244a5818ef2516813f560@2ba19c15880e48e880105b55838c0fea@154c5360b8c34ca281b816eb4f160fc1@e76f5ec4d9c64ee09c52a9cd2a314815@0eaa5b4652fe4933a3b9f986de523fba@f24ac07a18f1421f8ca7877e574dc009@635d711b006749cc84111cf8ab5c8c8e@cceea3a1b00b48d794d0f8f5bc73645d@71d1420dc61e45ccb533da99a8996c8e@b2560e15b0b944429d0bf8aa6a2389e9@3a85da70c8834a96813d8af655b25265@1cf1be1d7c194566a93158943d5ea033@3bcf6231cd1645439744f94fc5b3b0d5@ed2d301828ea4a2a8879fa21e3ab58f0@33b7ec83f76f4ff396985522ad0ea5c2@314efb7ca70841719d881ca1cc47247f@f821f92035cc4450bcb9671128ed7860@a6f971ca7aef4c768d397a80be3ba22a@8cafc3f6f8b64e4585e31ac21f97d275@a3d0091eea4441fcab60e72e844524d9@7ce68f884d594ea1a7da013c7698e5fd@7da2da682ff7456e91a0ae0d9d17469d@878acb4b69db49598ee71c4024868f06@0678c9df3a4d4e6b802804e3bb35352e@e473e6eb857b4d929ddfbf6ecc4a0ad9@41a39b4c18f94cc48e7545f1532ed624',
    ]
// 判断github action里面是否有东东农场互助码

for (let i = 0; i < 50; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[0];
}
