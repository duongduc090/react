import express from "express";
import {SignUp, SignIn, SignOut, resp} from '../controller/auth';
import {userSignupValidator} from '../validator/index';

const router = express.Router();

router.post("/signup", userSignupValidator, SignUp);
router.post("/signin", SignIn);

router.get("/signout", SignOut);

module.exports = router;