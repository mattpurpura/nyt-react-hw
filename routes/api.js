const router = require('express').Router();
const Article = require('../models/article');

router.post("/api/article", function(req, res) {
    Article.create(req.body)
    .then((dbArticle) => {
        res.json(dbArticle)
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get("/api/article", function(req, res){
    Article.find({})
    .then((results) => {
        res.json(results)
    })
})

router.delete('/api/article/:id', function(req, res){
    Article.deleteOne({_id: req.params.id})
    .then((result) => {
        res.json(result)
    })
})

module.exports = router;