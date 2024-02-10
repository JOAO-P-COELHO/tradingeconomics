const axios = require('axios');
(async () => {    
    const api_key = 'ff118324a9784dd:bsbyb0uhw8yhf11'
    const response = await axios.get(`https://api.tradingeconomics.com/country/mexico?c=${api_key}`)
    console.log(response.data)
})()