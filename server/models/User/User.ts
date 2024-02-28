import moment from "moment";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  userName: String,
  password: String,
  email: String,
  userDescription: {
    type:String,
    default:'Hello Nextify User !!'
  },
  educations: [
    {
      organization: String,
      degree: String,
      period: [Date]
    },
  ],
  userLocation: {
    country: {type:String,default:'India'},
    state: {type:String,default:'TamilNadu'},
    city: {type:String,default:'Erode'}
  },
  skills: [String],
  linkedINURL: {type:String,default:'linkedin.com'},
  githubURL: {type:String,default:'github.com'},
  twitterURL: {type:String,default:'twitter.com'},
  instagramURL: {type:String,default:'instagram.com'},
  slug: String,
  imageUrl: {
    type: String,
    default: "https://nextify-posts.s3.ap-south-1.amazonaws.com/users/default%20user.png-1709100916648"
  },
  createdAt: {
    type: Date, default: Date.now()
  },
  hibernate: {
    type: Boolean, default: false
  },
  verified: {
    type: Boolean, default: false
  }

});



const UserModel = models?.User || model('User', UserSchema)

export default UserModel;