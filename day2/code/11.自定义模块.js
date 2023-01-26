// 在一个自定义模块中，默认情况下， module.exports = {}
const age=20
// 像module.exports对象上挂载username属性
module.exports.username='zs'
// 像module.exports对象上挂载sayhello方法
module.exports.sayhello=()=>{
  console.log('hello');
}
module.exports.age=age
// 让module.exports指向一个全新的对象
module.exports={
  nickname:'小黑',
  sayhi(){
    console.log('hi');
  }
}