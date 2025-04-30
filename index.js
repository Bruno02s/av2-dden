const express = require("express");
const app = express();

app.get("/home/", function(req, res) {
  res.send("Seja Bem-Vindo")
})

app.get("/data_servidor/", function(req, res) {
  const data = new Date();

  const formatado = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(data);

  res.send(`a data que esta no servidor eh: ${formatado}`)
})

app.get("/numero_sorte/", function(req, res) {
  const number = Math.random() * (10 - 5) + 5;

  res.send(`seu numero da sorte eh: ${number}`)
})

app.listen(4000, function(erro) {
  if (erro) {
    console.log("erro ao iniciar")
  } else {
    console.log("servidor iniciado")
  }
})
