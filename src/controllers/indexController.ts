
import { Request,Response } from 'express';
import pool from '../database';


class IndexController{
    
    index(req:Request, res: Response){
        res.json({
            'message':'Estas en el inicio'
        });
    }
}

export const controladorIndex = new IndexController();

