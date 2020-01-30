
import { Request,Response } from 'express';
import pool from '../database';


class usuariosController{
    index(req:Request, res: Response){
        res.json({
            'message':'Estas en Usuarios'
        });
    }

    
    public async create(req:Request, res: Response){
        await pool.query('INSERT INTO usuarios SET ?', [req.body])
    }
    
    public async read(req:Request, res: Response){
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }

    public async update(req:Request, res: Response){
        const {id} = req.params;
        await pool.query('UPDATE usuarios SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request, res: Response){
        const {id} = req.params;
        await pool.query('DELETE usuarios WHERE id=?', [req.params.id]);
    }
    
    public async readOne(req:Request, res: Response){
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }

}

export const controladorUsers = new usuariosController();