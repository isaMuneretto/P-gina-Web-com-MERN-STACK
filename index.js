const express = require("express");
//temos que importar a rota para cá, então primeiro exporta lá no user.route
const userRoute = require("./src/routes/user.route") //aqui importa

const app = express()

//como utilizar de fato o user.route
app.use("/soma", userRoute);

//ROTA é a porta de entrada da nossa API, do nosso backend
//Method HTTP - É a forma como a internet se comunica - CRUD (CREATE, READ, UPDATE, DELETE)
    // GET - Pega uma info
    // POST - Cria uma info
    // PUT - Altera toda a info
    // PATCH - Altera parte da info
    // DELETE - Apaga uma info

//Name - É um identificador da rota

//Function (Callback) - Responsavel por executar algum comando

app.listen(3000)