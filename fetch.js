fetchData();
async function fetchData(){

    try{
        let jokes = await fetch('https://official-joke-api.appspot.com/random_joke');
        let joke1 = await jokes.json();
        console.log(joke1.setup)
        setTimeout(()=>{
            console.log(joke1.punchline)
        },5000)
    }
    catch(error){
        console.error(error)
    }
    
}