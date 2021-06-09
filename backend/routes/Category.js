import express from 'express';
import { Creat, List, Id, ReadCate, DeleteCate, UpdateCate} from '../controller/category';
import { userId } from '../controller/user';

const router = express.Router(); 
import { requireSignin, isAdmin, isAuth} from "../controller/auth";

router.post('/category/:idUser', requireSignin, isAuth, isAdmin, Creat);

router.get('/categories', List);

router.get('/category/:idcate', ReadCate);

router.put('/category/:idcate/:idUser',requireSignin, isAuth, isAdmin, UpdateCate);

router.delete('/category/:idcate/:idUser',requireSignin, isAuth, isAdmin, DeleteCate);

router.param('idcate', Id);
router.param('idUser', userId);

module.exports = router;