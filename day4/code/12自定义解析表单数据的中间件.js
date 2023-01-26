// 导入express模块
const express=require('express')
// 创建express的服务器实例
const app=express()
// 导入Node.js 内置的querystring模块
const qs=require('querystring')
// 这是解析表单数据的中间件
app.use((req,res,next)=>{
    // 定义中间件具体的业务逻辑
    // 1.定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str="";
    // 2.监听req.data事件
    req.on('data',(a)=>{
        str+=a;
    })
    // 3.监听req的end事件
    req.on("end",()=>{
        // 在str中存放的是完整的请求体数据
        // console.log(str);
        // 把字符串格式的请求体数据，解析成对象格式

        const body=qs.parse(str)
        req.body=body
        next()
    })
})
 app.post('/user',(req,res)=>{
    res.send(req.body)
 })


// 调用app.listen方法，指定端口号并启动web服务器
app.listen('80',()=>{
    console.log('http://127.0.0.1');
})