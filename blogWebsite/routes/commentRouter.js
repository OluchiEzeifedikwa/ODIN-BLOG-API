const { Router } = require('express');
const commentRouter = Router();
const commentController = require('../controllers/commentController');



commentRouter.get('/api/comment', (req, res) => {
    res.render('../blogWebsite/views/createComment');
})
commentRouter.post('/api/comments', commentController.createComment);
commentRouter.get('/api/posts/:id/comments', commentController.getCommentsByPostId);


module.exports = commentRouter;

