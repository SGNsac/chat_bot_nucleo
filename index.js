// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const express = require('express')

const venom = require('venom-bot');

venom.create().then((client) =>{

    start(client);

}).catch((erro) => { 
    console.error("ERROR: ", erro);
});


function start(client) {

    var app = express();

    app.get('/message', async(req, res) => {

        try{
            let messageSala =   req.query.linha1 +  "\n"
                            +   req.query.linha2 +  "\n" 
                            +   req.query.linha3 +  "!";
            await client.sendText(req.query.number + '@c.us',"" + messageSala);

        res.json(req.query);
        }catch(e){
            console.log(e)
        }

    });

    app.get('/', (req, res) => {
        
        res.status(200).status({message: 'OK'});

    })

    app.listen(3000,() => {

        console.log('"Server na porta 3000')

    });


}
