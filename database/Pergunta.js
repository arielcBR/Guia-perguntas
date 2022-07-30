const Sequelize = require("sequelize");
const connection = require("./database");

// Definindo model
const Pergunta = connection.define("pergunta", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false                // Não permite valor nulo neste campo
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({ force: false }).
    then(() => {
    console.log("Tabela criada com sucesso");
    })

module.exports = Pergunta;