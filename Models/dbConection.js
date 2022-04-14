const mongoose = require('mongoose');
require('dotenv').config()
const conection = async ()=> {mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mydb.e5utc.mongodb.net/${process.env.DB_NAME}}?retryWrites=true&w=majority`,
async (error)=>{
try{
    console.log('CONECTADO AO BANCO DE DADOS')
}catch{
    console.log('ERRO:',error);
        }
    })
};
module.exports = conection;