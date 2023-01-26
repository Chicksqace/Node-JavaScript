// 1. 导入 fs 文件系统模块
const fs=require('fs')
// 调用fs.writeFile()方法，写入文件内容
// 参数1 文件的存放路径 
// 参数2表示要写入的内容
// 参数3，表示编码方式 一般为utf-8
// 参数 4 为回调函数
fs.writeFile("./files/3.txt","hello node2222","utf-8",function(err){
  if(err){
    return console.log("文件写入失败"+err.message);
  }
  console.log("文件写入成功");
  // 如果文件写入成功，则err的值等于null
  // 如果文件写入失败，则err的值等于一个错误对象
  console.log(err);
})
