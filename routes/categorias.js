const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos } = require('../middlewares');
const { crearCategoria } = require('../controllers/categorias');

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
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

// Actualizar categoría -> privado - cualquier persona con un token válido
router.put('/:id', (req, res) => {
    res.json('put');
})

// Borrar categoría -> privado - Admin
router.delete('/:id', (req, res) => {
    res.json('delete');
})

module.exports = router;