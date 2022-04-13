const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({layoutsDir:__dirname+'Views/layouts'}));

app.use(express.static('Public'));

app.get('/', (req, res)=>{
    res.send('HORRIVANTE');
});

let port = 8081;
app.listen(port, ()=>console.log(`listening on port: ${port}`))