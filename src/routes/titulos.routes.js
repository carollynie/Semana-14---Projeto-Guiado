const express = require("express")
const router = express.Router()
const titulosController = require("../controllers/tituloController")

router.post("/", titulosController.criaTitulo)

router.get("/", titulosController.mostraTitulos)
router.get("/marvel", titulosController.mostraTitulosMarvel)
router.get("/ghibli", titulosController.mostraTitulosGhibli)
router.get("/pixar", titulosController.mostraTitulosPixar)

router.patch("/:id", titulosController.atualizaTitulo)

router.delete("/:id", titulosController.deletaTitulo)

module.exports = router