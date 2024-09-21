const express = require("express")
const router = express.Router() // configurando a rota

const app = express() 
const porta = 3333 

function mostraOla(request, response) { // função para responder a requisição do cliente em localhost:3333/ola
    response.send("Olá, mundo!")
}


function mostraPorta() { 
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta) 