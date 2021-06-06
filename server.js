const express = require("express")
const app = express()
app.use(express.json()) //Possibilita trabalhar com JSON

//conecta o mongo com o mongoose
const db = require("./src/data/database")
db.connect()

// usar as rotas
const titulo = require("./src/routes/titulos.routes")
const estudio = require("./src/routes/estudios.routes")

app.use("/titulos", titulo)
app.use("/estudios", estudio)

app.listen(3333, () => console.log("Servidor Rodando!"))