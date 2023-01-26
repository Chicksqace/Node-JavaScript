const r=require('express')
const app=r();
// 在这里 调用express.static()方法，快速对外提供静态资源
app.use('/abcddddd',r.static('./files'))
app.use(r.static('./clock'))

app.listen(80,()=>{
    console.log('express server running http://127.0.0.1');
})
