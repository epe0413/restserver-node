const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/',[
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe tener más de 6 letras').isLength({ min:6 }),
        check('correo', 'El correo no es válido').isEmail(),
        check('rol', 'No es un rol permitido').isIn('ADMIN_ROLE', 'USER_ROL'),
        validarCampos
],usuariosPost);
router.patch('/', usuariosPatch);
router.delete('/', usuariosDelete);


module.exports = router;