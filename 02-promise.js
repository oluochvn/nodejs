let age = 12;

let checkAge=()=>{
    return new Promise((resolve,reject)=>{
        (age>=18)? resolve('you are an adult'):
                    reject('you are a minor')
    })
}
checkAge()
            .then(result => console.log(result))
            .catch(error=> console.error(error));
let x = 23;
    let checkEven = () =>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            (x % 2 === 0)? resolve('EVEN')
            : reject('ODD')
            },1000)

        })
}
async function result(){
    try{
        let ageresult = await checkAge();
        console.log(ageresult);

        let checkeven = await checkEven();
        console.log(checkeven)
    }
        catch(error){
            console.error(error)
        }
    };
result()