const fs=require('fs')
// 出现路径拼接错误的问题，是因为提供了./或../开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放
// fs.readFile('./files/1.txt','utf-8',function(err,dataStr){
//   if(err){
//     return console.log('读取文件失败'+err.message);
//   }
//   console.log('读取文件成功'+dataStr);
// })

// 在JS中一个\代表转义 \\才代表路径 shift+Alt+C复制完整路径
// 移值性非常差，不利于维护
// fs.readFile('D:\\前端学习\\Node.js\\day1\\code\\files\\1.txt','utf-8',function(err,dataStr){
//   if(err){
//     return console.log('读取文件失败'+err.message);
//   }
//   console.log('读取文件成功'+dataStr);
// })
// __dirname表示当前文件所处的路径
console.log(__dirname);
fs.readFile(__dirname+'/files/1.txt','utf-8',function(err,dataStr){
  if(err){
    return console.log('读取文件失败'+err.message);
  }
  console.log('读取文件成功'+dataStr);
})