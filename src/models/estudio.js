// id: autogerado e obrigatorio
// nome: texto é obrigatório
// criadoEm: data gerada automaticamente
//cria o esqueleto de como nossos dados serao guardados no Mongo


const mongoose = require("mongoose")

const estudioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model("estudio", estudioSchema)