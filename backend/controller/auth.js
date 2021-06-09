import User from '../models/user';
import jwt from 'jsonwebtoken';
import expressJWT from 'express-jwt';

export const SignUp = (req, res) => {
    const user = new User(req.body);
    // console.log(user);
    user.save((err, data) => {
        console.log(err);
        if(err){
            return res.status(400).json({
                error: "You can not Sign Up account"
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({data});
    })

}
export const SignIn = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password )
    User.findOne({email}, (error, user) => {
        console.log(error);
        if(error || !user){
            return res.status(400).json({
                error: "User not exist, please Sign up"
            })
        }
        if(!user.authentication(password)){
            return res.status(401).json({
                error: 'Email and password not match'
            })
        }
        const token = jwt.sign({ _id:user._id}, '123123');
        // console.log(token);
        res.cookie('t', token, {expire: new Date() + 9999});
        // console.log(req.cookies);
        const { _id, name, email, role } = user;
        // res.send(console.log(token));
        return res.json(
            {
                token, user: { _id, email, name, role }
            }
        )
    })

}
export const SignOut = (req, res) => {
    // console.log(req.cookies)
    res.clearCookie('t');
    res.json({
        message: 'Signout Success'
    })
}
export const requireSignin = expressJWT({
    secret: '123123',
    algorithms: ["HS256"], // added later
    userProperty: "auth",
});

export const isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: "Access Denied"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        return res.status(403).json({
            error: "Admin resource! Access Denined"
        })
    }
    next();
}
