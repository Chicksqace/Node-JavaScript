const http=require('http')
const server=http.createServer()
// 绑定request事件 监听客户端的请求
server.on('request',(req,res)=>{
  console.log('request success');
})
// 启动服务器
server.listen(8080,()=>{
  console.log('server running at http://127.0.0.1:8080');
})