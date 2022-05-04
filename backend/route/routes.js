var express = require('express');
var router = express.Router();
const blog = require('../model/blog.js')



// all blogs
router.get('/get_blogs', (req, res, next) => {
    blog.find((err, blogs) => {
        if (err) {
            res.json(err);
        }
        else {

            res.json(blogs)
        }

    });
});
// get blog by id
router.get('/get_blogs/:id', (req, res, next) => {
    blog.find({ _id: req.params.id }, (err, blogs) => {
        if (err) {
            res.json(err);
        }
        else {

            res.json(blogs)
        }

    });
});

// inserting a blog
router.post('/post_blog', (req, res, next) => {
    let new_blog = new blog({
        //_id: req.body._id,
        title: req.body.title,
        body: req.body.body,
        category: req.body.category,
        image_url: req.body.image_url,
        post_date: req.body.post_date,
        author: req.body.author,
        author_title: req.body.author_title



    });
    new_blog.save((err, blog) => {
        if (err) {
            res.json(err)

        }
        else {
            res.json({ msg: "your blog has been added succefully" })
        }
    });

})
// updating a blog
router.put('/post_blog/:id', (req, res, next) => {


    blog.findOneAndUpdate({ _id: req.params.id },
        {
            $set: {
                title: req.body.title,
                body: req.body.body,
                category: req.body.category,
                image_url: req.body.image_url,
                post_date: req.body.post_date,
                author: req.body.author,
                author_title: req.body.author_title
            }
        },
        (err, result) => {
            if (err) {
                //console.log(err)
                res.json(err)

            }
            else {

                //console.log(res)
                res.json(result)
            }

        })


})

// deleting a blog 
router.delete('/delete_blog/:id', (req, res, next) => {
    blog.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })

})

module.exports = router;