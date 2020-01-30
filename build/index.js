"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class server {
    constructor() {
        this.app = express_1.default();
        this.config(); //  CONFIGURACION
        this.routes(); //  ENRUTADO
    }
    config() {
        this.app.set('port', process.env.PORT || 5000); // Asignamos puerto
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        //this.app.use('/usuarios',rutasUser);
    }
    start() {
        this.app.listen(this.app.get('port'), () => console.log('Servidor escuchando en: ', this.app.get('port')));
    }
}
const servi = new server();
servi.start();
console.log("Server Running");
