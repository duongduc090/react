import mongoose from "mongoose";
import crypto from 'crypto';
import {v1 as uuidv1} from 'uuid';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    hashed_password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true       
    },
    about: {
        type:String,
        trim:true
    },
    salt: {
        type:String
    },
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }
}, {timestamps: true});

UserSchema.virtual('password')
    .set(function (password){
        console.log(password);
        this.salt = uuidv1();
        console.log(this.salt);
        console.log(this.encrytPassword(password));
        this.hashed_password = this.encrytPassword(password);
    })

UserSchema.methods = {
    authentication: function(inText){
        return this.encrytPassword(inText) === this.hashed_password;
    },
    encrytPassword: function(password){
        if(!password) return '';
        try{
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest('hex')  
        }catch(err){
            return '';
        }
    }
}    
module.exports = mongoose.model("User", UserSchema);
