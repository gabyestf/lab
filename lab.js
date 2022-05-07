const axios = require('axios');

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((response) => {

    const data = response.data.bpi
        
    const USD = [`${data.USD.code} ` + `${data.USD.rate}`,]
    const GBP = [`${data.GBP.code} ` + `${data.GBP.rate}`,]
    const EUR =[`${data.EUR.code} ` + `${data.EUR.rate}`,]
        

    console.log("valor de bitcoins:");
    
    USD.forEach(valor=>console.log(" Valor en $ es igual a: " , valor));
    GBP.forEach(valor=>console.log(" Valor en £ es igual a: " , valor));
    EUR.forEach(valor=>console.log(" Valor en € es igual a: " , valor));
        
       
})