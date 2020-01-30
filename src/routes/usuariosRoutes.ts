import {Router} from 'express';
import {controladorUsers} from '../controllers/usuariosController';

class UserRoutes {

    public router:Router = Router();
    constructor(){
        this.config();
    }

    config():void{

        this.router.post('/', controladorUsers.create);     
        this.router.get('/', controladorUsers.read);
        this.router.put('/:id', controladorUsers.update);
        this.router.delete('/:id', controladorUsers.delete);
        this.router.get('/:id', controladorUsers.readOne);

        
        this.router.post('/manolo', (req, res) => res.send("LLAMANDO A MANOLO POR POST"));
        this.router.get('/manolo', (req,res)=>res.send("LLAMANDO MANOLO POR GET"));

    }

}
const rutasUser = new UserRoutes();
export default rutasUser.router;

