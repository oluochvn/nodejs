let order =() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('ordered sucessfully')
        },1000)
    });
}

let preparing=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("please wait we're preparing your order")
        }, 3000);
    });
}
let done = ()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('your order is ready')
        },12000)
    });
}

order()
        .then(value => console.log(value),preparing()
        .then(value=> console.log(value)),done()
        .then(value=>{console.log(value)}));