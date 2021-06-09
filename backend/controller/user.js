import User from '../models/user';

exports.userId = (req, res, next, id) => {
    // console.log(id)
    User.findById(id).exec((error, user) => {
        if (error || !user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        req.profile = user;
        next()
    })
}
export const read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;

    return res.json(req.profile);
}
export const readAll = (req, res) => {
    // req.profile.hashed_password = undefined;
    // req.profile.salt = undefined;

    User.find((err, data) => {
        if(err){
            error: "Not found"
        }
        res.json({data});
    })
}
export const update = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.profile.id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: 'You are not authorized to perform in action'
                })
            }
            user.salt = undefined;
            user.hashed_password = undefined;
            res.json(user);
        }
    )
}
