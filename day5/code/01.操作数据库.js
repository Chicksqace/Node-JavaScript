const mysql=require('mysql')
// 建立与mysql数据库的连接关系
const db=mysql.createPool({
  host:'127.0.0.1',//数据库的ip地址
  user:'root',//登录数据库的账号
  password:'admin123',//登录数据库的密码
  database:'my_db_01'//指定要操作哪个数据库
})
// 测试mysql模块是否能正常运行   select 1没有实质性的作用，只是用来测试模块是不是能执行
// db.query('select 1',(err,results)=>{
//   // mysql模块工作期间报错了
//   if(err) return console.log(err.message);
//   // 能正常的执行 sql语句
//   console.log(results);
// })


// 查询users表中所有的数据
// const sqlStr='select * from users where id=5';
// db.query(sqlStr,(err,results)=>{
//     // mysql模块工作期间报错了
//     if(err) return console.log(err.message);
//     // 注意：如果执行的是select查询语句，则执行的结果是数组
//     console.log(results);
   
//   })





  //  
  //  向 users 表中新增数据， 其中 username 为 Spider-Man，password 为 pcc321
  // const user={username:'Spider-Man',password:'pcc123'}
  // // 定义sql语句
  // // ?就是占位符  写死不方便后面用户的填写
  // const sqlStr='insert into users (username,password) values(?,?)'
  // // 执行sql语句
  // db.query(sqlStr,[user.username,user.password],(err,results)=>{
  //   if(err) return console.log(err.message);//失败了
  //   // 注意执行的是insert into插入语句 则results是一个对象
  //   // 可以通过affectedRows属性，来判断是否插入数据成功
  //   if(results.affectedRows===1){
  //     console.log('插入数据成功');
  //   }
  // })


// 便捷插入数据
// const user={username:'SQIDER-Man2',password:'pcc4321'}
//   const sqlStr='insert into users set ?'
//   // 执行sql语句
//   db.query(sqlStr,user,(err,results)=>{
//     if(err) return console.log(err.message);//失败了
//     if(results.affectedRows===1){
//       console.log('插入数据成功');
//     }
//   })



// 更新用户的信息
// const user={id:5,username:'aaa',password:'000'}
// // // 定义sql语句
// const sqlStr='update users set username=?,password=? where id=?'
// // 执行sql语句
// db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
//   if(err) return console.log(err.message);
//   // 注意：执行了update语句之后，执行的结果，也是对象，可以通过affectedRows来判断是否成功
//   if(results.affectedRows===1){
//     console.log('更新成功');
//   }
// })


// 便捷更新
// const user={id:5,username:'aaaa',password:'00011111'}
// const sqlStr='update users set ? where id=?'
// db.query(sqlStr,[user,user.id],(err,results)=>{
//   if(err) return console.log(err.message);
//   if(results.affectedRows===1){
//     console.log('更新成功');
//   }
// })


// 删除id为5的用户
// const sqlStr='delete from users where id=?'
// db.query(sqlStr,5,(err,results)=>{
//     if(err) return console.log(err.message);
//     // 注意：执行delete语句之后，结果也是一个对象，也会包含affectedRow是属性
//   if(results.affectedRows===1){
//     console.log('删除成功');
//   }
// })

// 标记删除
const sqlStr='update users set status=? where id=?'
db.query(sqlStr,[1,11],(err,results)=>{
  if(err)return console.log(err.message);
  if(results.affectedRows===1){
    console.log('标记删除成功');
  }
})