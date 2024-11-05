const mongoose = require('mongoose')
require('dotenv').config

async function conectaBancodeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro){
        console.log(erro)
    }
}

module.exports = conectaBancodeDados // exporta a função do banco de dados para ser usada em outros códigos