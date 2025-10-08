fetchData();

async function fetchData() {
  try{
    let ddata = await fetch('https://fake-json-api.mock.beeceptor.com/companies')
    let data = await ddata.json()
    console.log(`${data[0].id}  ${data[0].name} address: ${data[0].address} ${data[0].country}`)
    console.log(`${data[1].id}  ${data[1].name} address: ${data[1].address} ${data[1].country}`)
    console.log(`${data[2].id}  ${data[2].name} address: ${data[2].address} ${data[2].country}`)
  }
  catch(error){
    console.error(error)
  }
}