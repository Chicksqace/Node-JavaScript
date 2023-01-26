const express=require('express')
const app=express()
// 1.定义路由
app.get('/',(req,res)=>{
    throw new Error("服务器内部发生了错误")
    res.send("get")
})

// 2.定义错误级别的中间件，捕获整个项目的异常，从而防止程序的崩溃
app.use((err,req,res,next)=>{
    console.log('发生了错误'+err.message);
    res.send('Error'+err.message)
    // next函数主要负责将控制权交给下⼀个中间件，如果当前中间件没有终结请求，并且next没有被调⽤，那么请求将被挂起，后边定义的中间件将得不到被执⾏的机会
    
})



app.listen('80',()=>{
    console.log('http://127.0.0.1');
})