const mongoose = require("mongoose")
const estudio = require("../models/estudio")
const estudioModel = require("../models/estudio")

const criarEstudio = async (request, response) => {
    const estudio = new estudioModel({ //palavra reservada do javascript para criar um objeto, o novo estudio vai receber o objeto a seguir
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        criadoEm: request.body.criadoEm
    })

    const estudioJaExiste = await estudioModel.findOne({ nome: request.body.nome })
    if (estudioJaExiste) {
        return response.status(409).json({ error: "Estudio já cadastrado!" })
    }

    try {
        const novoEstudio = await estudio.save()
        response.status(201).json(novoEstudio)
    }
    catch (err) {
        response.status(500).json({ message: err })
    }
}

const mostraEstudio = async (request, response) => {
    try {
        const estudios = await estudioModel.find()
        return response.status(200).json(estudios)
    }
    catch (err) {
        return response.status(500).json({ message: err.message })
    }
}

const atualizaEstudio = async (request, response) => {
    const encontraEstudio = await estudioModel.findById(request.params.id)
    if (encontraEstudio == null) {
        return response.status(404).json({ message: "estudio nao encontrado" })
    }
    if (request.body.nome != null) {
        encontraEstudio.nome = request.body.nome
    }
    try {
        const estudioAtualizado = await encontraEstudio.save()
        response.status(200).json(estudioAtualizado)
    }
    catch (err) {
        response.status(500).json({ message: err.message })
    }
}

const deletaEstudio = async (request, response) => {
    const encontraEstudio = await estudioModel.findById(request.params.id)
    if (encontraEstudio == null) {
        return response.status(404).json({ message: "estudio não encontrado" })
    }
    try {
        await encontraEstudio.remove()
        response.status(200).json({ message: "foi deletado com sucesso" })
    }
    catch (err) {
        response.status(500).json({ message: err.message })
    }

}



module.exports = {
    criarEstudio,
    mostraEstudio,
    atualizaEstudio,
    deletaEstudio
}