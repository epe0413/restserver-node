const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

/**
 * {{url}}/api/categorias
 */

// Obtener todas las categorias -> publico
router.get('/', (req, res) => {
    res.json('GET');
})

// Obtener todas una categoria por ID -> publico
router.get('/:id', (req, res) => {
    res.json('GET - id');
})

// Crear categoría -> privado - cualquier persona con un token válido
router.post('/', (req, res) => {
    res.json('post');
})

// Actualizar categoría -> privado - cualquier persona con un token válido
router.put('/:id', (req, res) => {
    res.json('put');
})

// Borrar categoría -> privado - Admin
router.delete('/:id', (req, res) => {
    res.json('delete');
})

module.exports = router;