const bcrypt = require('bcrypt')
    let saltlength = 10;
    let user = 'oluochvn'
    let password = 1234;
async function hashed(password){
        try{
            let hash = await bcrypt.hash(password.toString(),saltlength)

           await auth('1235',hash)
        }
        catch(error){
            console.error(error)
        }
}
async function auth(password,hash){
        try{
            let match = await bcrypt.compare(password.toString(),hash);
            (match)? console.log(`welcome ${user}`) : console.log(`invalid credintials`)
        }
        catch(error){
            console.error(error)
        }
}
hashed(password)