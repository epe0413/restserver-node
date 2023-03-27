const { response, request } =require('express');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = '', apikey, page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'get API - Controllador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = async (req, res = response) => {

    const body = req.body;
    const usuario = new Usuario( body);

    await usuario.save();

    res.status(400).json({
        usuario
    })
}

const usuariosPut =  (req, res = response) => {
    
    const id = req.params.id;
    
    res.json({
        msg: 'put API - controller',
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'path API - controller'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}