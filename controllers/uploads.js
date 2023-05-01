const { response } = require("express");


const cargarArchivo = (req, res = response) => {
    return res.json({
        msg: 'Upload'
    })
}

module.exports = {
    cargarArchivo,
}