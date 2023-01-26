const fs=require('fs')
fs.readFile('./files/html.html','utf-8',function(err,dataStr){
  if(err){
    return console.log("读取文件失败"+err.message);
  }
  console.log("读取成功"+dataStr);
})