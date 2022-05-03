const fetch = require('node-fetch');
const fs = require('fs');

async function getBitcoins(){
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        let bitcoinsList = "";
        Array.from(data).forEach(bpi => {
            bitcoinsList+=`${bpi['rate.code.description']}`;
        });

        //crear archivo
        fs.writeFile('bitcoins.csv', bitcoinsList, (error) => {
            if(error){
                console.log(error);
                return;
            }
            console.log('Se a creado el archivo');
        })

        //console.log(data)
    }catch(error){
        console.log(error)
    }
}

getBitcoins();