const { Router } = require('express');
const postRouter = Router();
const postController = require('../controllers/postController');



postRouter.get('/api/post', (req, res) => {
    res.render('../blogWebsite/views/createPost');
});

postRouter.post('/api/posts', postController.createPost);
postRouter.get('/api/posts', postController.getAllPosts);

module.exports = postRouter;