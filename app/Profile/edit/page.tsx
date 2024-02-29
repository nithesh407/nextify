'use client'
import { EditProfileForm } from "@/ui/components";
import { ProfileItem } from "@/Interface";
import moment from "moment";
import Cookies from "js-cookie";

const initialValues: ProfileItem = {
  userImage: {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDsCv32EDT0u6W3mFiheTOKb0fg3H5ErLKHxVGRXRjQ&s',
    thumbUrl: '',
    crossOrigin: '',
    percent: 100
  },
  userName: 'John Doe',
  email: 'john.doe@example.com',
  userLocation: {
    country: 'India',
    state: 'Tamil Nadu',
    city: 'Erode'
  },
  userDescription: 'I am a passionate developer with experience in web development.',
  educations: [
    {
      organization: 'University of New York',
      degree: 'Bachelor of Science',
      period: [moment('2021', 'YYYY'), moment('2024', 'YYYY')]
    },
    {
      organization: 'Harvard University',
      degree: 'Master of Computer Science',
      period: [moment('2021', 'YYYY'), moment('2024', 'YYYY')]

    }
  ],
  skills: ['JavaScript', 'ReactJS', 'Node.js'],
  linkedINURL: 'https://www.linkedin.com/johndoe',
  githubURL: 'https://github.com/johndoe',
  twitterURL: 'https://twitter.com/johndoe',
  instagramURL: 'https://www.instagram.com/johndoe'
};


const EditProfilePage: React.FC = () => {
  const id: string | undefined = Cookies.get('user_id')
  return (
    <EditProfileForm initialValues={initialValues} id={id} />
  )
}

export default EditProfilePage