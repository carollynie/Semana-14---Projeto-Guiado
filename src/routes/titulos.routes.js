const express = require("express")
const router = express.Router()
const titulosController = require("../controllers/tituloController")

router.post("/", titulosController.criaTitulo)

router.get("/", titulosController.mostraTitulos)
//router.get("/marvel", titulosController.mostraTitulosMarvel)


module.exports = router