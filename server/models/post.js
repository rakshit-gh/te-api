import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
    title: { type: String, required: true },
    link: String,
    text: String,
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref:'user' },
    _comments: [{ type: Schema.ObjectId, ref: 'comment'}]
});


const post = mongoose.model('post', postSchema);
export default post;