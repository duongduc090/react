import express from 'express';
import { Creat, List, Id, ReadPro, DeletePro, UpdateProduct, photo} from '../controller/product';
const router = express.Router(); 
import { userId } from '../controller/user';
import { requireSignin, isAdmin, isAuth} from "../controller/auth";

router.get("/product/photo/:id", photo)
router.get('/products' , List);

router.post('/product/:idUser', requireSignin, isAuth, isAdmin, Creat);
router.get('/product/:id', ReadPro)
router.put('/product/:id/:idUser', requireSignin, isAuth, isAdmin, UpdateProduct);
router.delete('/product/:id/:idUser', requireSignin, isAuth, isAdmin, DeletePro)

router.param('id' , Id);
router.param('idUser' , userId);
module.exports = router;