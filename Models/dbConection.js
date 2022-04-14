const mongoose = require('mongoose');
require('dotenv').config();
const conection = mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mydb.e5utc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(()=>console.log('CONECTED AT THE DATABASE')).catch(error=>console.log('ERRO:',error));
