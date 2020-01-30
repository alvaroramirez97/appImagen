import {Router} from 'express';
import {controladorIndex} from '../controllers/indexController';

class IndexRoutes {
    public router:Router = Router();
    
    constructor(){
        this.config();
    }
    
    config():void{
        this.router.get('/', controladorIndex.index);
        this.router.get('/funciona', (req,res)=>res.send("ESTO FUNCIONA"));


    }

}
const rutasIndex = new IndexRoutes();
export default rutasIndex.router;

