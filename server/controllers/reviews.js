var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var Cake = mongoose.model('Cake');

module.exports = {
    index: (req, res) => {
        Review.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    create: (req, res) => {
        let newReview = new Review(req.body);
        newReview.save()
        console.log(newReview);
        Cake.findOneAndUpdate({_id: req.body.cake_id},
            {$push: 
                {reviews: newReview}
            },
                {new:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    read: (req, res) => {
        Review.find(req.params)//:_id : #
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update: (req, res) => {
        Review.findOneAndUpdate(
            {_id: req.params},
            {$set:
                {
                rating: req.body.rating,
                comment: req.body.comment, 
                }
            },
            {new:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    destroy: (req, res) => {
        Review.deleteOne(req.params)//:_id : #
        .then(data => res.json(data))
        .catch( err => res.json(err));
    },
}