// 1. 导入 fs 模块，来操作文件
const fs=require('fs')

// 2.调用fs.readFile()方法来读取文件
// 1.第一个参数是文件的存放路径
// 2.第二个参数是 使用的编码格式 一般为utf-8
// 3.回调函数 拿到读取失败和成功的结果 err dataStr
fs.readFile('./files/1fsafasf.txt','utf-8',function(err,dataStr){
  // 打印失败的结果
  // 如果读取成功，则err的值为null
  // 如果读取失败，err的值就是错误对象 dataStr的值为undefined
  console.log(err);
  console.log("----------------");
  // 打印成功的结果
  console.log(dataStr);
})