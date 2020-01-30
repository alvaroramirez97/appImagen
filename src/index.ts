import express, {Application} from 'express';
import rutasIndex from './routes/indexRoutes';
import rutasUser from './routes/usuariosRoutes';
import morgan from 'morgan';
import cors from 'cors';


class server {  // CLASE SERVIDOR
    public app:Application;


    constructor(){
        this.app = express();
        this.config(); //  CONFIGURACION
        this.routes(); //  ENRUTADO

    }

    config():void{
        this.app.set('port', process.env.PORT||5000)    // Asignamos puerto
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes():void{
        this.app.use(rutasIndex);
        this.app.use('/usuarios',rutasUser);
    }

    start():void{

        this.app.listen(this.app.get('port'), ()=>console.log('Servidor escuchando en: ', this.app.get('port')));
    }

}


const servi = new server();
servi.start();
console.log("Server Running 123");