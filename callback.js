let add =(callback,a,b) =>{
    let result =  a + b;
    callback(result)
}

let displayResult = (result) =>{
    console.log(result)
}
add(displayResult,12,10)

let multiply = (callback,a,b) =>{
    let answer = a * b;
    callback(answer)
}
let display = (answer) =>{
    console.log(answer)
}
multiply(display,12,12)
