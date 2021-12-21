const express = require('express')
const router = express.Router()
const Post = require('../model/Post')

router.get('/', (req, res) => {
    res.send('Post router');
})

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

module.exports = router;