import { Moment } from "moment";

interface Education {
    organization: string;
    degree: string;
    period: [Moment, Moment];
  }
  
interface Skill {
    skill: string;
  }
  
interface ProfileItem {
    userImage: {
        uid: string;
        name: string;
        status: 'done' | 'error' | 'uploading' | 'removed';
        url?: string;
        thumbUrl?:string;
        crossOrigin?:'anonymous' | 'use-credentials' | '';
        percent?:number;
      };
      userName: string;
      userEmail: string;
      userLocation: string;
      userDescription: string;
      Educations: Education[];
      Skills: Skill[];
      linkedINURL: string;
      githubURL: string;
      twitterURL: string;
      instagramURL: string;
}

export default ProfileItem
