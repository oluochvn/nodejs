let bcrypt = require('bcrypt')

    let username = 'admin';
    let password = '2144456gcds'
   let  saltround = 10;

    async function hashedpass(password){
        try{
            let hash = await bcrypt.hash(password,saltround)
            console.log(hash)
        }
        catch(error){
            console.error(error)
        }
    }
    hashedpass(password)
    