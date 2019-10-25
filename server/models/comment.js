import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const commentSchema = new Schema({
    text: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref:'user' },
    _post: { type: Schema.ObjectId, ref:'post' },
});

const autoPopulateCreator = function(next) {
    this.populate({
        path: '_creator',
        select: 'username createdAt -_id'
    });
    next();
};

commentSchema.pre('find', );


const comment = mongoose.model('post', commentSchema);
export default post;