const mongoose = require("mongoose")
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
}

const mostraTitulos = async (request, response) => {
    const titulos = await tituloModel.find().populate("estudio")
    return response.status(200).json(titulos)
}

// const mostraTitulosMarvel = async (request, response) => {
//     const titulos = await titulo.find().populate("estudio")
//     const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
//     return response.status(200).json(titulosFiltrados)
// }


module.exports = {
    criaTitulo,
    mostraTitulos
}