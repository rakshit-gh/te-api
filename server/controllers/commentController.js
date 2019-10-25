import db from './../models';

const commentController = {};

userController.post = (req, res) => {
    const {
        text,
        userId, 
        postId,
    } = req.body;

    //Validation

    const comment = new db.comment({
        text,
        _creator: userId,
        _post: postIdm
    });

    comment.save().then((newUser) => {
        db.post.findByIdAndUpdate(
            postId,
            { $push: { '_comments': newComment._id } }
        ).then((existingPost) => {
            res.status(200).json({
                success: true,
                data: newComment,
                existingPost,
            });
        }).catch((err) => {
            res.status(500).json({
                message: err,
            });
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
};

export default commentController;