console.log('Hola mundo');
const express = require('express');
const app = express();
app.get ('/api', (req,res)=>{console.log('Paso por api');
res.json({mensaje:'HOLA MUNDO', estado: 'ok'}).status(200)
});
app.listen(3000,()=>{console.log('escuchando en el puerto 3000')});