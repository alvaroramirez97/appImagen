"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({
            'message': 'Estas en el inicio'
        });
    }
}
exports.controladorIndex = new IndexController();
