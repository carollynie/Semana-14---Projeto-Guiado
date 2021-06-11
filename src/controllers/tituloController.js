const mongoose = require("mongoose")
const titulo = require("../models/titulo")
const tituloModel = require("../models/titulo")

const criaTitulo = async (request, response) => {
    const titulo = new tituloModel({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        genero: request.body.genero,
        descricao: request.body.descricao,
        estudio: request.body.estudio
    })
    //fazer a regra que não permite criar um titulo que ja existe
    try {
        const novoTitulo = await titulo.save()
        response.status(201).json(novoTitulo)
    }
    catch (err) {
        response.status(400).json({ message: err })
    }


    const tituloJaExiste = await tituloModel.findOne({ nome: request.body.nome })
    if (tituloJaExiste) {
        return response.status(409).json({ error: "Titulo já cadastrado!" })
    }

    try {
        const novoTitulo = await titulo.save()
        response.status(201).json(novoTitulo)
    }
    catch (err) {
        response.status(500).json({ message: err })
    }

}


const mostraTitulos = async (request, response) => {
    const titulos = await tituloModel.find().populate("estudio")
    return response.status(200).json(titulos)
}

const mostraTitulosMarvel = async (request, response) => {
    const titulos = await tituloModel.find().populate("estudio") //populate permite preencher a propriedade com os dados do estudio em vez de mostrar apenas o identificador
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
    return response.status(200).json(titulosFiltrados)
}

const mostraTitulosGhibli = async (request, response) => {
    const titulos = await tituloModel.find().populate("estudio")
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")
    return response.status(200).json(titulosFiltrados)
}

const mostraTitulosPixar = async (request, response) => {
    const titulos = await tituloModel.find().populate("estudio")
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
    return response.status(200).json(titulosFiltrados)
}

const atualizaTitulo = async (request, response) => {
    const encontraTitulo = await tituloModel.findById(request.params.id)
    if (encontraTitulo == null) {
        return response.status(404).json({ message: "Titulo nao encontrado" })
    }
    if (request.body.nome != null) {
        encontraTitulo.nome = request.body.nome
    }
    try {
        const tituloAtualizado = await encontraTitulo.save()
        response.status(200).json(tituloAtualizado)
    }
    catch (err) {
        response.status(500).json({ message: err.message })
    }
}

const deletaTitulo = async (request, response) => {
    const encontraTitulo = await tituloModel.findById(request.params.id)
    if (encontraTitulo == null) {
        return response.status(404).json({ message: "Filme não encontrado" })
    }
    try {
        await encontraTitulo.remove()
        response.status(200).json({ message: "O filme foi deletado com sucesso" })
    }
    catch (err) {
        response.status(500).json({ message: err.message })
    }
}

module.exports = {
    criaTitulo,
    mostraTitulos,
    mostraTitulosMarvel,
    mostraTitulosGhibli,
    mostraTitulosPixar,
    atualizaTitulo,
    deletaTitulo
}
