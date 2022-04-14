const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
require('./Models/dbConection.js')

app.set('view engine', 'handlebars');
app.engine('handlebars',handlebars.engine({layoutsDir:__dirname+'/Views/layouts',defaultLayout:'index', partialsDir:__dirname+'/Views/partials'}));
app.use(express.static('Public'));

app.get('/', (req, res)=>{
    res.render('main');
});

let port = 8081;
app.listen(port, ()=>console.log(`listening on port: ${port}`))