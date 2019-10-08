var mongoose = require('mongoose');
var Cake = mongoose.model('Cake');
var Review = mongoose.model('Review');

module.exports = {
    index: (req, res) => {
        Cake.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    create: (req, res) => {
        let newCake = new Cake(req.body);
        newCake.save()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    read: (req, res) => {
        Cake.find(req.params)//:_id : #
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    reviews: (req, res) => {
        Cake.find(req.params)//:_id : #
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update: (req, res) => {
        Cake.findOneAndUpdate(
            {_id: req.params},
            {$set:
                {
                baker: req.body.baker,
                url: req.body.url, 
                }
            },
            {new:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    destroy: (req, res) => {
        Cake.deleteOne(req.params)//:_id : #
        .then(data => res.json(data))
        .catch( err => res.json(err));
    },
}