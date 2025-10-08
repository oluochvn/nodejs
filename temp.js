let temp = 22;

let checkTemperature = ()=>{
    return new Promise((resolve,reject)=>{
        (temp < 37)? resolve('Normal Temp')
        : reject('High temp')
    })
}

 async function answer(){
    try{
        let answer1 = await checkTemperature()
        console.log(answer1)
    }
    catch(error){
        console.error(error)
    }
    
 }
 answer();