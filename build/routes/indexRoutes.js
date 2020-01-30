"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.controladorIndex.index);
        this.router.get('/funciona', (req, res) => res.send("ESTO FUNCIONA"));
    }
}
const rutasIndex = new IndexRoutes();
exports.default = rutasIndex.router;
