"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', usuariosController_1.controladorUsers.create);
        this.router.get('/', usuariosController_1.controladorUsers.read);
        this.router.put('/:id', usuariosController_1.controladorUsers.update);
        this.router.delete('/:id', usuariosController_1.controladorUsers.delete);
        this.router.get('/:id', usuariosController_1.controladorUsers.readOne);
        this.router.post('/manolo', (req, res) => res.send("LLAMANDO A MANOLO POR POST"));
        this.router.get('/manolo', (req, res) => res.send("LLAMANDO MANOLO POR GET"));
    }
}
const rutasUser = new UserRoutes();
exports.default = rutasUser.router;
