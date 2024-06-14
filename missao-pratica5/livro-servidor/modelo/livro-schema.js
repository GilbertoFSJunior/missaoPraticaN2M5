const banco = require("./conexao");

const LivroSchema = new banco.Schema({
  codigo: {
    type: "Number",
    required: true,
  },
  codigoEditora: {
    type: "Number",
    required: true,
  },
  titulo: {
    type: "String",
    required: true,
  },
  Resumo: {
    type: "String",
    required: true,
  },
  autor: {
    type: "String",
    required: true,
  },
});

const Livro = banco.model("Livro", LivroSchema, "livros");

module.exports = Livro;
