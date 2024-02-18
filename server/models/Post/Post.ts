import { model, models, Schema } from "mongoose";

const PostSchema = new Schema({
    avatarProfileName: {
        type: String,
        default: 'Rose'
    },
    avatarImage: {
        type: String,
        default: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
    },
    imageUrl: {
        type: String
    },
    postDescription: {
        type: String
    },
    likesCount: {
        type: Number,
        default: Math.trunc(Math.random() * 1000)
    },
    commentsCount: {
        type: Number,
        default: Math.trunc(Math.random() * 1000)
    }
})


const PostModel = models?.Post || model('Post', PostSchema)

export default PostModel