const { response, request } =require('express');
const bcryptjs = require('bcryptjs');
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
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol } );

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync( password, salt );

    //Guardar en BD
    await usuario.save();

    res.status(400).json({
        usuario
    })
}

const usuariosPut =  async(req, res = response) => {
    
    const { id } = req.params;
    const { password, google, correo, ...resto } = req.body;

    //TODO validar contra base de datos
    if( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );
    
    res.json({
        msg: 'put API - controller',
        usuario
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