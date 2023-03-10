const express=require('express')
const app=express()
// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过express.json()这个中间件，解析表单的json格式的数据
app.use(express.json())
// 通过express.urlencoded（)来解析表单中的url-encoded格式的数据
// 这个比较特殊要传入一个配置项
app.use(express.urlencoded({extended:false}))
// extended:false的意思是：不使用第三方的解析方式，只使用自身的解析方式；如果是true就使用第三方解析方式
// 1.定义路由
app.post('/user',(req,res)=>{
    // 在服务器，可以使用req.body这个属性，来接收客户端发过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body);
    res.send('ok')
})

app.post('/book',(req,res)=>{
    // 在服务器，可以使用req.body这个属性，来接收JSON 格式的表单数据和url-encoded数据
    console.log(req.body);
    res.send('ok')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})