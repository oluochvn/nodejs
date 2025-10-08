const fs = require('fs')
fs.readFile('calc.js', 'utf8', (err, data) =>{
  (err) ? console.log('error retriving the file')
     : console.log(data)

     console.log(data)
})


fs.readFile('math.js',(err,data) =>{
    (err) ? console.log('error retriving the file') :
    console.log(data)
})

fs.writeFile('test1.js',"console.log('newly created file')", (err) =>{
    console.log('file created')
})
fs.unlink('test1.js', ()=>{
   console.log("deleted") 
})

 