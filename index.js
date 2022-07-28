const express = require("express");
const app = express();

// Estou dizendo para o express usar o EJS para view engine
app.set("view engine", "ejs");

// Rota
app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;
    var produtos = [
        { nome: "Doritos", preco: 3.14 },
        { nome: "Coca-cola", preco: 5 },
        { nome: "Leite", preco: 1.45 }
    ]

    res.render("index", {
        nome,
        lang,
        empresa: "Guia do Programador",
        inscritos: 8210,
        msg: exibirMsg,
        produtos
    });
});


// Colocar servidor online, deve ser o último bloco de código do programa

app.listen(8080, () => {
   console.log("Servidor online em localhost:8080"); 
});