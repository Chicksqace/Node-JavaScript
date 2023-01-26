const express=require('express')
const app=express()


// 简化
app.use(function(req,res,next){
    const time=Date.now()
    // 获取到请求到达到服务器的时间
    // 为req对象，挂载自定义属性，从而将时间共享给后面的所有路由
    req.startTime=time
    // 把流转关系，转交给下一个中间件或路由
    next()
})



app.get('/',(req,res)=>{
    
    res.send('get'+req.startTime)
})

app.get('/user',(req,res)=>{
    res.send('get user'+req.startTime)
})


app.listen('80',()=>{
    console.log('http://127.0.0.1');
})