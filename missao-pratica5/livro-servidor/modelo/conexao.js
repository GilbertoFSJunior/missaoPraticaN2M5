const mongoose = require("mongoose");
require("dotenv").config();

const banco = mongoose.createConnection(
  "mongodb+srv://gilbertojuniorfr:<password>@cluster01.2bnsixn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

banco.on(
  "error",
  console.error.bind(console, "Erro na conexão com o MongoDB:")
);
banco.once("open", () => {
  console.log("Conexão com o MongoDB estabelecida com sucesso!");
});
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

module.exports = banco;
