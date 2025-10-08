const fs = require('fs')

fs.readFile('test.js','utf8',(err,data)=>{
    (err) ? console.log('error reading the file') :
    console.log(data)
})

fs.appendFile('new1.js',"console.log('newly created file here') /n", (err) =>{
    (err) ? console.log('unable to save data') :
    console.log('data saved')
})

fs.readFile('new1.js','utf8',  (err,data)=>{
     (err) ? console.log('error reading the file') :
    console.log(data)
})