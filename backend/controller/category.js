import Category from '../models/category.js';

export const Creat = (req, res) => {
    const category = new Category(req.body);
    console.log(category);
    category.save((err, data) => {
        if(err){
            res.status(400).json({
                error: "Not add a Category"
            })
        }
        res.json(data);
    })
}
export const List = (req, res) => {
    Category.find((err, data) => {
        if(err){
            return res.status(400).json({
                error: "Not found some Category"
            })
        }
        res.json({data});
    })
}
export const Id = (req, res, next, id) => {
    Category.findById(id).exec((err, data) => {
        if(err || !data){
            res.status(400).json({
                error: "Not found category"
            })
        }
        req.data = data;
        next();
    })
}
export const ReadCate = (req, res) => {
    return res.json(req.data);
}
export const UpdateCate = (req, res) => {
    const category = req.data;
    console.log(req.body.name);
    category.name = req.body.name;
    category.save((err, data) => {
        if(err || !data){
            return res.status(400).json({
                error: "Not found"
            })
        }
        res.json({data});
    })
}
export const DeleteCate = (req, res) => {
    let category = req.data;
    category.remove((err, data) => {
        if(err || !data){
            res.status(400).json({
                error: "Can not delete category"
            })
        }
        res.json({
            data,
            message: "Delete category successfully"
        })
    })
}