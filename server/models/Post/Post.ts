import { model, models, Schema } from "mongoose";

const PostSchema = new Schema({
    postName: String
})


const PostModel = models?.Post || model('Post', PostSchema)

export default PostModel