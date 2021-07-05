const FavoritModel = require('../models/mongoose.schema.model')
const createFavorite = (req, res) => {
    const { name, img, level } = req.body;
    FavoritModel.find({ name: name }, (error, data) => {
        if (data.length > 0) {
            res.send('already exist')
        }
        else {
            const newFavoritModel = new FavoritModel({
                name: name,
                img: img,
                level: level
            })
            newFavoritModel.save()
            res.send(newFavoritModel)
        }
    })
}
const getFavorite = (req, res) => {
    FavoritModel.find({}, (error, data) => {
        if (error) {
            res.send(error.message)
        }
        else {
            res.send(data)
        }
    })
}
const deleteFavorite = (req, res) => {
    const name = req.params.name;
    FavoritModel.deleteOne({ name: name }, (error, data) => {
        if (error) {
            res.send(error.message)
        }
        else {
            res.send(data)
        }
    })
}
const updateFavorite = (req, res) => {
    const choosenName = req.params.name;
    const { name, img, level } = req.body;
    FavoritModel.findOne({ name: choosenName }, (error, data) => {
        if (error) {
            res.send(error.message)
        }
        else {
            data.name = name
            data.img = img
            data.level = level
            data.save()
            res.send(data)
        }
    })
}
module.exports = {
    createFavorite, getFavorite, deleteFavorite, updateFavorite
}