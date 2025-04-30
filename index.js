const express = require("express");
const app = express();

app.get("/home/", function(req, res) {
  res.send("Seja Bem-Vindo")
})

app.get("/data_servidor/", function(req, res) {
  const data = new Date();

  res.send(`a data que esta no servidor eh: ${data}`)
})

app.get("/numero_sorte/", function(req, res) {
  const number = Math.random();

  res.send(`seu numero da sorte eh: ${number}`)
})

app.listen(4000, function(erro) {
  if (erro) {
    console.log("erro ao iniciar")
  } else {
    console.log("servidor iniciado")
  }
})
