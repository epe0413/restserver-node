const express = require('express')
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:       '/api/auth',
            categorias: '/api/categorias',
            usuarios:   '/api/usuarios',
            productos:  '/api/productos',
            buscar:     '/api/buscar',
            uploads:    '/api/uploads',
        }

        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';
        
        // Conectar a Base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares(){

        // CORS
        this.app.use(cors());

        // Lectura y parseo del Body
        this.app.use(express.json());

        // Directorio publico
        this.app.use( express.static('public') );

        // FileUpload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.categorias, require('../routes/categorias'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.uploads, require('../routes/uploads'));
    }

    listen(){
        
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;