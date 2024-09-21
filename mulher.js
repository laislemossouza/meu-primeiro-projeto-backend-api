const express = require("express")
const router = express.Router() // 1ª parte da configuração da rota

const app = express() 
const porta = 3333 

function mostraMulher(request, response) { 
    response.json( { //json é pra enviar várias informações organizadas como resposta da requisição. o send é só pra texto simples.
        nome: 'Simara Conceição',
        imagem: 'https://avatars.githubusercontent.com/u/50921892?v=4',
        minibio: 'Desenvolvedora e instrutora'
    })
    }

function mostraPorta() { 
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher)) // configura resposta da requisição
app.listen(porta, mostraPorta) 