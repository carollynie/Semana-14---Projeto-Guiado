const express = require("express")
const router = express.Router()
const estudioController = require("../controllers/estudioController")

router.post("/", estudioController.criarEstudio)

router.get("/", estudioController.mostraEstudio)

router.patch("/:id", estudioController.atualizaEstudio)

router.delete("/:id", estudioController.deletaEstudio)

module.exports = router




















module.exports = router