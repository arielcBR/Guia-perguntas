const express = require("express");
const app = express();

// Estou dizendo para o express usar o EJS para view engine
app.set("view engine", "ejs");

// Rota
app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    var lang = req.params.lang;
    res.render("index", {
        nome,
        lang,
        empresa: "Guia do Programador",
        inscritos: 8000
    });
});


// Colocar servidor online, deve ser o último bloco de código do programa

app.listen(8080, () => {
   console.log("Servidor online!!!"); 
});