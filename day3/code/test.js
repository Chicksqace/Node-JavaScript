const cpy=require('./cpy-tools/index')
const dtStr=cpy.dateFormat(new Date())
console.log(dtStr);
console.log('--------------------------');
const htmlStr='<h1 title="abc"><span>123</span><h1>'
const htmlStr1='&lt;h1 title=&quot;abc&quot;&gt;&lt;span&gt;123&lt;/span&gt;&lt;h1&gt;'
const str=cpy.htmlEscape(htmlStr)
const str1=cpy.htmlUnEscape(htmlStr1)
console.log(str);
console.log('--------------------------');
console.log(str1);