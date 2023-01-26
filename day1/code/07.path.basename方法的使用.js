const path=require('path')
const fpath='/a/b/c/1.txt'
console.log(path.basename(fpath));
console.log(path.basename(fpath,'.txt'));
