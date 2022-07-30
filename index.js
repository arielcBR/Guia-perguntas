const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
const connection = require("./database/database");      // Carregando conexão do banco de dados
const Pergunta = require("./database/Pergunta");   // Carregando model de pergunta

// Banco de dados
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados OK!");
    })
    .catch((msgErro) => {
        console.error("Conexão falhou: " + msgErro);
    })

// Estou dizendo para o express usar o EJS para view engine
app.set("view engine", "ejs");

// Linkando body-parser ao node (responsável por captar os dados do form para o backend)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração para arquivos estáticos (HTML, CSS, Javascript, Imagens...)
app.use(express.static("public"))

// Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    })
});


// Colocar servidor online, deve ser o último bloco de código do programa

app.listen(8080, () => {
   console.log("Servidor online em localhost:8080"); 
});