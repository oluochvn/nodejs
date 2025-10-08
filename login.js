let username = 'admin'
let password = 1234;

    let loginUser = (username,password) =>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            (username === 'admin' && password === 1234)? 
            resolve(`welcome ${username}`)
            : reject('invalid Credentials. enter the correct password and username') 
            },2000)
        })
    }

async function auth(){
   try{
        let login = await loginUser('admin',1234)
    console.log(login)
   } 
   catch(error){
    console.error(error)
   }
}
auth();