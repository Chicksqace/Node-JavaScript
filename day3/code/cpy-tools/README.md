## 安装
```
npm i cpy-tools
```

## 导入
```js
const cpy=require('./cpy-tools/index')
```

## 格式化时间
```js
// 调用dateFormat对时间进行格式化
const dtStr=cpy.dateFormat(new Date())
console.log(dtStr);
// 结果 2022-11-20 12:58:41
```


## 转义HTML中的特殊字符
```js
// 带转义的HTML字符串
const htmlStr='<h1 title="abc"><span>123</span><h1>'
// 调用htmlEscape方法进行转换
const str=cpy.htmlEscape(htmlStr)
console.log(str);
// 结果 &lt;h1 title=&quot;abc&quot;&gt;&lt;span&gt;123&lt;/span&gt;&lt;h1&gt;
```


## 还原HTML中的特殊字符
```js
// 带还原的HTML字符串
const htmlStr1='&lt;h1 title=&quot;abc&quot;&gt;&lt;span&gt;123&lt;/span&gt;&lt;h1&gt;'
// 调用htmlUnEscape方法进行转换
const str1=cpy.htmlUnEscape(htmlStr1)
console.log(str1);
// 结果 <h1 title="abc"><span>123</span><h1>
```

## 开源协议
ISC


