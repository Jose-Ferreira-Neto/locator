const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const {randomUUID} = require('crypto');
require('./Models/dbConection.js');
const CreateUser = require('./Models/userModel.js');
app.set('view engine', 'handlebars');
app.engine('handlebars',handlebars.engine({layoutsDir:__dirname+'/Views/layouts',defaultLayout:'index', partialsDir:__dirname+'/Views/partials'}));
app.use(express.static('Public'));
app.use(express.json());
app.post('/cadastrar', async (req, res)=>{
    try{ 
        console.log(req.body);
        var data = await new CreateUser(req.body);  
         data.save();
}
    catch{
        console.log('ERRO AO INSERIR NO BANCO');
    }
});

let port = 8081;
app.listen(port, ()=>console.log(`listening on port: ${port}`))