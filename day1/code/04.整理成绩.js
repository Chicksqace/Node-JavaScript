// 1. 导入 fs 模块
const fs=require("fs")
// 2.读取文件的内容
fs.readFile('../素材/成绩.txt','utf-8',function(err,dataStr){
  // 3.判断是否读取成功
  if(err){
    return console.log('读取失败'+err.message);
  }
  // console.log('读取文件成功'+dataStr);
  // 4.1先把成绩的数据，先按照空格进行分割
  const arrNew=dataStr.split(' ').join('\r\n').replace(/=/g,":")
  console.log(arrNew);
  // 4.2循环分割后的数组，对每一项数据，进行字符串的替换操作
  // 4.3把新数组中的每一项，进行合并，得到一个新的字符串

  // 5.调用fs.writeFile()方法 把处理完毕的成绩，写到新数文件中
  fs.writeFile('./files/成绩-ok.txt',arrNew,function(err){
    if(err){
      return console.log('写入文件失败'+err.message);
    }
    console.log('成绩写入成功');
  })
})
