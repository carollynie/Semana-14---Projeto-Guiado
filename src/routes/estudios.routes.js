const express = require("express")
const router = express.Router()
const estudioController = require("../controllers/estudioController")

router.post("/", estudioController.criarEstudio)

router.get("/", estudioController.mostraEstudio)

module.exports = router




















module.exports = router