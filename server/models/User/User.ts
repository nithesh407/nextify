import moment from "moment";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  userName: String,
  password: String,
  email: String,
  educations: [
    {
      organization: String,
      degree: String,
      period: [Date]
    },
  ],
  skills: [String],
  linkedINURL: String,
  githubURL: String,
  twitterURL: String,
  instagramURL: String,
  slug: String,
  createdAt: {
    type: Date, default:Date.now()
  },
  hibernate :{
    type: Boolean, default:false
  },
  verified :{
    type: Boolean, default:false
  }

});



const UserModel = models?.user  || model('User',UserSchema) 

export default UserModel;