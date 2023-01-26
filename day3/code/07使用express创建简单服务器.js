// 导入express
const express=require('express')
// 创建webf服务器
const app=express()
// 启动web服务器


// 监听客户端的get和post请求，并向客户端响应具体的内容
app.get('/user',(req,res)=>{
    // 调用express提供的res.send()方法，向客户端响应一个json对象
    res.send({name:"zs",age:20,gender:"男"})
})
app.post('/user',(req,res)=>{
    // 调用express提供的res.send()方法，向客户端响应一个字符串
    res.send("请求成功")
})

app.get('/',(req,res)=>{
    // res.query默认为一个空对象
    // 客户端使用 ?name=zs&age=20 这种查询字符串形式，发送到服务器的参数
    // 可以通过req,query对象访问到 例如
    // req.query.name req.query.age
    console.log(req.query)
    // console.log("请求成功");
    // res.send("请求成功")
    res.send(req.query)

})

// 注意：这里的：id是一个动态的参数
app.get('/user/:ids/:name',(req,res)=>{
    // req.params是动态匹配到的url参数，默认也是一个空对象
    console.log(req.params);
    res.send(req.params)
})

app.listen(80,()=>{
    console.log('express server running http://127.0.0.1');
})


