import db from './../models'

const postController = {};

postController.post = (req, res) => {
    const {
        title,
        text,
        link,
        userId,
    } = req.body;
};

//Validation either text or link not both

const post = new db.post({
    title,
    text,
    link,
    _creator: userId,
});

post.save().then((newPost) => {
    return res.status(200).json({
        succes: true,
        data: newPost
    });
}).catch((err) => {
    return res.status(500).json({
        message: err
    });
});

postController.getAll = (req, res) => {
    db.post.find({}).populate({
        path: '_creator',
        select: 'username createdAt -_id'
    }).populate({
        path: '_comments',
        select: 'text createdAt _creator',
        match: { 'isDeleted': false }
    })
    .then((posts) => {
        return res.status(200).json({
            success: true,
            data: posts
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err;
        });
    })
};

export default postController;