// Create web server using express
// Create router for comment
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { check } = require('express-validator');

// @route    POST api/comment
// @desc     Create a comment
// @access   Private
router.post(
  '/',
  [
    check('text', 'Text is required').not().isEmpty(),
    check('post', 'Post is required').not().isEmpty(),
  ],
  commentController.createComment
);

// @route    GET api/comment
// @desc     Get all comment
// @access   Private
router.get('/', commentController.getAllComment);

// @route    GET api/comment/:id
// @desc     Get comment by id
// @access   Private
router.get('/:id', commentController.getCommentById);

// @route    DELETE api/comment/:id
// @desc     Delete a comment
// @access   Private
router.delete('/:id', commentController.deleteComment);

// @route    PUT api/comment/:id
// @desc     Update a comment
// @access   Private
router.put(
    '/:id',
    [
        check('text', 'Text is required').not().isEmpty(),
        check('post', 'Post is required').not().isEmpty(),
    ],
    commentController.updateComment
);

module.exports = router;
