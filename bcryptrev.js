const bcrypt = require('bcrypt')
let pass = 1234;
let user = 'admin'
let salt = 10;
        hashed(pass)
    async function hashed(pass) {
        try{
            let hash = await bcrypt.hash(pass.toString(),salt);
        console.log(hash)
        await auth(1234,hash)
        }
        catch(error){
            console.error(error)
        }
        
    }

    async function auth(pass1,hash){
        try{
            let match = await bcrypt.compare(pass1.toString(),hash);
            (match)? console.log(`welcome ${user}`)
            : console.log('invalid credentials')
        }
        catch(error){
            console.error(error)
        }
        
    }
