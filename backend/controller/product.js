import Product from '../models/product.js';
import formidable from 'formidable';
import fs from 'fs';
import lodash, { round } from 'lodash';
// import { isBuffer } from 'util';
// import { json } from 'body-parser';

export const Creat = (req, res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        console.log(err);
        if(err){
            return res.status(400).json({
                error: "Add Prduct failed"
            })
        }
        const {name, description, price} = fields;
        if(!name || !description ||!price ){
            return res.status(400).json({
                error: "You can require data"
            })
        }
        let product = new Product(fields)
        // console.log(files.photo)
        
        if(files.photo){
            if(files.photo.size > 100000){
                res.status(400).json({
                    error: "Image < 1Mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }
        // console.log(product);
        product.save((err, data) => {
            if(err){
                res.status(400).json({
                    error: "Not add Product"
                })
            }
            res.json(data);
        })    
    })
}
export const List = (req, res) =>{
    // console.log(res.body);  
    // console.log(req.query);
    Product.find((err, data) => {
        if(err){
            error: "Not found"
        }
        res.json({data});
    })
}
export const Id = (req, res, next, id) =>{
    
    Product.findById(id).exec((err, product) => {
        if(err || !product){
            res.status(400).json({
                error: "Not found a product"
            })
        }
        req.product = product;
        next();
    })
}
export const ReadPro = (req, res) => {
    req.product.photo = undefined;
    return res.json(req.product);
}
export const UpdateProduct = (req, res) =>{
    // const product = req.product;
    // console.log(req.body.name);
    // console.log(product);

    // product.name = req.body.name;
    // product.price = req.body.price;
    // product.quantity = req.body.quantity;
    // product.sold = req.body.sold;
    // product.shipping = req.body.shipping;
    // product.description = req.body.description;

    // product.save((err, data) => {
    //     if(err || !data){
    //         return res.status(400).json({
    //             error: "Not found"
    //         })
    //     }
    //     res.json({data});
    // })
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: "Update Prduct failed"
            })
        }
        const {name, description, price} = fields;
        if(!name || !description ||!price ){
            return res.status(400).json({
                error: "You can require data"
            })
        }
        let product = req.product;
        product = lodash.assignIn(product, fields);

        // console.log(product);

        if(files.photo){
            if(files.photo.size > 100000){
                res.status(400).json({
                    error: "Image < 1Mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }
        // console.log(product);
        product.save((err, data) => {
            
            if(err){
                res.status(400).json({
                    error: "Not Update Product",
                    error2: err
                })
            }
            res.json(data);
        })    
    })
}
export const DeletePro = (req, res) => {
    let product = req.product;
    console.log(product);   
    product.remove((err, deleteProduct) => {
        if(err){
            return res.status(400).json({
                error: "Not delete product"
            })
        }
        res.json({
            deleteProduct,
            message: "Delete product successfully"
        })  
    })
}
export const photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
}
