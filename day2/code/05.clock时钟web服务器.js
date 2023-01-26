const http=require('http')
const fs=require('fs')
const path=require('path')
const server=http.createServer()
server.on('request',(req,res)=>{
  // 就是我们返回的url地址是端口后面的 不完整的
  // /clock/index.html
  const url=req.url
  // 实现了 在浏览器中输入url 然后url转换为文件路径 读文件
  // const fpath=path.join(__dirname,url)

  let fpath=''
  if(url==='/'){
    fpath=path.join(__dirname,'./clock/index.html')
  }else{
    //  此时用户写的是 /index.html
    fpath=path.join(__dirname,'/clock',url)
  }

  // 根据映射过来的文件路径读取文件的内容
  fs.readFile(fpath,'utf-8',(err,dataStr)=>{
    if(err){return res.end('404 Not found.')}
    // console.log(dataStr); dataStr返回的是文件里面的内容
    // 只有是html文件的时候 才加上res.setHeader("Content-Type", "text/html; charset=utf-8");
    // res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(dataStr)
  })
})
server.listen(80,()=>{
  console.log('server running at http://127.0.0.1');
})
