const express=require('express')
const app=express()


// 1.定义中间件函数
const mw1=(req,res,next)=>{
    console.log('调用了局部生效的中间件mw1');
    next()
}
const mw2=(req,res,next)=>{
    console.log('调用了局部生效的中间件mw2');
    next()
}
const mw3=(req,res,next)=>{
    console.log('调用了全局生效的中间件mw3');
    next()
}
app.use(mw3)
// 2.创建路由
app.get('/',[mw1,mw2],(req,res)=>{
    res.send('/////////')
})
app.get('/user',(req,res)=>{
    res.send('/user')
})

app.listen('80',()=>{
    console.log('http://127.0.0.1');
})