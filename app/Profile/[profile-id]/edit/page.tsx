'use client'

import { EditProfileForm } from "@/ui/components";
import {ProfileItem} from "@/util";
import moment from "moment";

const initialValues:ProfileItem = {
  userImage:{
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url : 'https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863',
    thumbUrl:'',
    crossOrigin:'',
    percent:100
  },
  userName: 'John Doe',
  userEmail: 'john.doe@example.com',
  userLocation: 'New York',
  userDescription: 'I am a passionate developer with experience in web development.',
  Educations: [
    { 
      organization: 'University of New York',
      degree: 'Bachelor of Science',
      period: [moment('2021', 'YYYY'), moment('2024', 'YYYY')]
    },
    { 
      organization: 'Harvard University',
      degree: 'Master of Computer Science',
       period :[moment('2021', 'YYYY'), moment('2024', 'YYYY')]

    }
  ],
  Skills: [
    { skill: 'JavaScript' },
    { skill: 'ReactJS' },
    { skill: 'Node.js' }
  ],
  linkedINURL: 'https://www.linkedin.com/johndoe',
  githubURL: 'https://github.com/johndoe',
  twitterURL: 'https://twitter.com/johndoe',
  instagramURL: 'https://www.instagram.com/johndoe'
};


const EditProfilePage:React.FC=()=>{
  return(
        <EditProfileForm initialValues={initialValues}/>
  )
}

export default EditProfilePage