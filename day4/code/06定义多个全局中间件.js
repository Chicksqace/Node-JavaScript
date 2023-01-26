const express=require('express')
const app=express()
// 定义第一个全局中间件
app.use((req,res,next)=>{
    console.log("第一");
    next()
})
// 定义第二个全局中间件
app.use((req,res,next)=>{
    console.log("第二");
    next()
})

// 路由

app.get('/user',(req,res)=>{
    console.log(' 成功');
})

app.listen('80',()=>{
    console.log('http://127.0.0.1');
})