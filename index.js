
const bcrypt = require('bcrypt');
let username = 'admin';
let password = 'oluochvn';
let saltround = 10;

   async function hashedpass(password){
        try{
            let hash = await bcrypt.hash(password.toString(),saltround)
            console.log(hash)
            await verify('oluochvn',hash)

        }
        catch(error){
            console.error(error)
        }
   }
    async function verify(password,hash){
        const match = await bcrypt.compare(password,hash)
        console.log(!match ? `incorrect password ` : `welcome back ${username}`)

    }

   hashedpass(password)