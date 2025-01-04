
// controllers/CommentController.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createComment = async (req, res) => {
  try {
    const { content, authorId, postId } = req.body;
    const comment = await prisma.comment.create({
      data: { content, authorId, postId },
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create comment' });
  }
};

exports.getCommentsByPostId = async (req, res) => {
  try {
    const postId = (post._id);
    const comments = await prisma.comment.findMany({
      where: { postId },
    });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve comments' });
  }
};
