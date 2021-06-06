const mongoose = require("mongoose")

//cria o esqueleto de como nossos dados serao guardados no Mongo

const titulosSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    estudio: {
        type: mongoose.Schema.Types.ObjectId, //se referencia ao models de estudio
        required: true,
        ref: "estudio"
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model("titulo", titulosSchema)