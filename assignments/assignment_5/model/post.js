const mongoose = require("mongoose");
const {Schema} = mongoose

const postSchema = new Schema({
    name: {type: String},
    body: {type: String},
    image: {type: String},
    user: {type: Schema.Types.ObjectId, ref:"User"}
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema)

module.exports = Post; 