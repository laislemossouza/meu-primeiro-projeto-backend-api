const express = require("express")
const router = express.Router()

const app = express() 
const porta = 3333 

const mulheres = [ // uma constante para guardar a lista de objetos
    {
        nome: 'Simara Conceição',
        imagem: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwomenawards.globant.com%2Fsites%2Fdefault%2Ffiles%2F2022-07%2F1563116714583%2520Cropped.jpg&f=1&nofb=1&ipt=6fd23509ab6c8752223ed88cea91e37f48f93bd9c308cba0c5d3febe15c8c876&ipo=images',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwomenawards.globant.com%2Fsites%2Fdefault%2Ffiles%2F2022-09%2FIana%2520Chan%2520Perfil.jpeg&f=1&nofb=1&ipt=170415e992cf85e0b3d8f6001bdb87af3f0dba9487835ec58af153b1bb3d38c3&ipo=images',
        minibio: 'CEO & Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fportalaltadefinicao.com%2Fwp-content%2Fuploads%2F2022%2F07%2FNina.jpeg%3Fw%3D1200%26quality%3D100%26ssl%3D1&f=1&nofb=1&ipt=d6ecc29bf66841ba394dd870576d583c2006157edf4092e1941c2bfa9081124b&ipo=images',
        minibio: 'Hacker antirracista'
    },

]
function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() { 
    console.log('Servidor criado e rodando na porta ', porta)
}

app.listen(porta, mostraPorta) 
app.use(router.get('/mulheres', mostraMulheres))