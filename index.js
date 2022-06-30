const fs = require('fs');
const fileReaded = fs.readFileSync('list.json', 'utf8');
console.log(fileReaded);
