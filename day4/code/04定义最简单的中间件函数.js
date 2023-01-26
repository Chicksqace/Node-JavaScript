const express=require('express')
const app=express()

// // 定义一个最简单的中间件的函数
// const mw=function(req,res,next){
//     console.log('这是中间件函数');
//     // 把流转关系，转交给下一个中间件或路由
//     next()
// }

// // 将mw注册为全局生效的中间件
// app.use(mw)

// 简化
app.use(function(req,res,next){
    console.log('这是中间件函数');
    // 把流转关系，转交给下一个中间件或路由
    next()
})



app.get('/',(req,res)=>{
    console.log("调用/");
    res.send('get')
})

app.get('/user',(req,res)=>{
    console.log("调用/user");
    res.send('get user')
})


app.listen('80',()=>{
    console.log('http://127.0.0.1');
})