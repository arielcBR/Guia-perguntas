const express = require("express");
const app = express();

// Estou dizendo para o express usar o EJS para view engine
app.set("view engine", "ejs");

// Configuração para arquivos estáticos (HTML, CSS, Javascript, Imagens...)
app.use(express.static("public"))

// Rota
app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});


// Colocar servidor online, deve ser o último bloco de código do programa

app.listen(8080, () => {
   console.log("Servidor online em localhost:8080"); 
});