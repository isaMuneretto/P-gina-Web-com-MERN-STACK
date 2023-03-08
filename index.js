const express = require('express')
const app = express()

//ROTA é a porta de entrada da nossa API, do nosso backend
//Method HTTP - É a forma como a internet se comunica - CRUD (CREATE, READ, UPDATE, DELETE)
    // GET - Pega uma info
    // POST - Cria uma info
    // PUT - Altera toda a info
    // PATH - Altera parte da info
    // DELETE - Apaga uma info

//Name - É um identificador da rota

//Function (Callback) - Responsavel por executar algum comando

app.get('/soma', function (req, res) {
    const soma = 1 + 1;
    res.send({soma: soma})
});

app.listen(3000)