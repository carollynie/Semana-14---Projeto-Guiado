require("dotenv").config()
const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log("Database Conectada com sucesso")) //espera a resposta de sucesso e mostra no console
    .catch(err => console.error) // se a conexao der errado pega o erro e mostra no console
}

module.exports = {connect} //porque estamos exportando uma função