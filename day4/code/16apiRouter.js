const express=require('express')
const router=express.Router()

// 在这里挂载对应的路由
router.get('/get',(req,res)=>{
    // 使用req.query获取客户端通过查询字符串，发送到服务器的数据
    const query=req.query
    // res.send（）方法,向客户端响应处理的结果
    res.send({
        status:0,//0 表示成功 1 表示不成功
        msg:'get请求成功',//状态的描述
        data:query//需要响应给客户端的数据
    })

})

// 定义post接口
router.post('/post',(req,res)=>{
    // 通过req.body来获取请求体中包含的url-encodeed格式的数据
    const body=req.body
    res.send({
        status:0,
        msg:"post请求成功",
        data:body
    })
})

// 定义delete接口
router.delete('/delete',function(req,res){
    res.send({
        status:0,
        msg:'delete请求成功'
    })
})
module.exports=router




