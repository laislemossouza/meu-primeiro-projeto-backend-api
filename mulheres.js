const express = require("express") // aqui iniciamos o express
const router = express.Router() // aqui configuramos a primeira parte da rota
const cors = require('cors') // aqui estou trazendo o pacote cors que permite consumir essa api no front-end

const conectaBancodeDados = require("./bancoDeDados"); // aqui estou ligando ao arquivo banco de dados
conectaBancodeDados() // estou chamando a função que conecta o banco de dados

const Mulher = require('./mulherModel') //importa infos do modelMulher que será usado para salvar os objetos no Banco de Dados

const app = express() // aqui iniciamos o app
app.use(express.json()) // aqui dizemos que as requisições também estarão no formato jason
app.use(cors())

const porta = 3333 // aqui criamos a porta


// GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados)
    }catch (erro) {
        console.log(erro)
    }
}

// POST
async function criaMulher(request,response) {
     const novaMulher = new Mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}

// PATCH
async function corrigeMulher(request, response) {
    try { 
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome // armazena o nome novo (sobreescreve)
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio // armazena a minibio nova
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem // armazena a imagem nova
        }

        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao // armazena a citacao nova
        }
        
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados) // retorna lista atualizada de mulheres
    } catch(erro) {
        console.log(erro)
    }
}

// DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Mulher deletada com sucesso!'})
    } catch(erro) {
        console.log(erro)
    }
}

// ROTAS
app.use(router.get('/mulheres', mostraMulheres)) // configurei rota GET "/mulheres"
app.use(router.post('/mulheres', criaMulher)) // configurei rota POST "/mulheres"
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota PATCH "/mulheres/:id"
app.use(router.delete('/mulheres/:id', deletaMulher)) // configurei a rota DELETE "/mulheres/:id"

// PORTA
function mostraPorta() { 
    console.log('Servidor criado e rodando na porta ', porta)
}

app.listen(porta, mostraPorta) // servidor ouvindo porta