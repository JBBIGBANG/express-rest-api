const e = require('express');
const express = require('express')
const router = express.Router()
const Post = require('../model/Post')


//get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message:error})
    }
})


//submit post
router.post('/', async(req, res) => {
   const post = new Post({
        title:req.body.title,
        description:req.body.description
   });

   try {
    const savePost = await post.save()
    res.json(savePost);
   } catch (error) {
       res.json({message: error});
   }
   
})

//get specific post
router.get('/:id',async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.json({ message:error})       
    }
})

//delete a post
router.delete('/:id',async (req,res) => {
    try {
        const remove = await Post.remove({_id: req.params.id});
        res.json(remove);
    } catch (error) {
        res.json({ message:error})  
    }
})

//update a post

router.patch('/:id',async (req,res) => {
    try {
        const update = await Post.updateOne({_id: req.params.id}, 
            { $set:{ title: req.body.title,
                     description: req.body.description}});
        res.json(update);
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router;