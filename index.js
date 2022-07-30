const express = require("express");
const app = express();

// Estou dizendo para o express usar o EJS para view engine
app.set("view engine", "ejs");

// Configuração para arquivos estáticos (HTML, CSS, Javascript, Imagens...)
app.use(express.static("public"))

// Rota
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    res.send("Formulário recebido!");
});


// Colocar servidor online, deve ser o último bloco de código do programa

app.listen(8080, () => {
   console.log("Servidor online em localhost:8080"); 
});