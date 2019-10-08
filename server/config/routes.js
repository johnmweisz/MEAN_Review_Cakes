var cakes = require('../controllers/cakes.js');
var reviews = require('../controllers/reviews.js');

module.exports = app => {
    //cakes
    app.get('/cake/', (req, res) => {cakes.index(req, res);});
    app.post('/cake/', (req, res) => {cakes.create(req, res);});
    app.get('/cake/:_id', (req, res) => {cakes.read(req, res);});
    app.get('/cake/:_id/reviews', (req, res) => {cakes.reviews(req, res);});
    app.put('/cake/:_id', (req, res) => {cakes.update(req, res);});
    app.delete('/cake/:_id', (req, res) => {cakes.destroy(req, res);});
    //reviews
    app.get('/review/', (req, res) => {reviews.index(req, res);});
    app.post('/review/', (req, res) => {reviews.create(req, res);});
    app.get('/review/:_id', (req, res) => {reviews.read(req, res);});
    app.put('/review/:_id', (req, res) => {reviews.update(req, res);});
    app.delete('/review/:_id', (req, res) => {reviews.destroy(req, res);});
}