const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
const connection = require("./database/database");      // Carregando conexão do banco de dados
const Pergunta = require("./database/Pergunta");   // Carregando model de pergunta

// Configuração para arquivos estáticos (HTML, CSS, Javascript, Imagens...)
app.use(express.static("public"))

// Estou dizendo para o express usar o EJS para view engine
app.set("view engine", "ejs");

// Linkando body-parser ao node (responsável por captar os dados do form para o backend)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) => {
    Pergunta.findAll({
        raw: true, order: [
        ["id", "DESC"] // DESC = ordenação descrescente, ASC = ordenação crescente
    ]}).then(perguntas => {
        console.log(perguntas);
        res.render("index", {
            perguntas: perguntas
        });
    });
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

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if (pergunta != undefined) { // Pergunta encontrada no banco de dados
            res.render("pergunta", {
                pergunta: pergunta
            });
        }                            // Pergunta não encontrada no banco de dados
        else {
            res.redirect("/");       
        }
    })
});

// Banco de dados
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados OK!");
    })
    .catch((msgErro) => {
        console.error("Conexão falhou: " + msgErro);
    })

// Colocar servidor online, deve ser o último bloco de código do programa

app.listen(8080, () => {
   console.log("Servidor online em localhost:8080"); 
});