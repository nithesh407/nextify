import { Moment } from "moment";

interface Education {
    organization: string;
    degree: string;
    period: [Moment, Moment];
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
      userLocation: {
        country: string,
        state: string,
        city: string
      };
      userDescription: string;
      educations: Education[];
      skills: string[];
      linkedINURL: string;
      githubURL: string;
      twitterURL: string;
      instagramURL: string;
}

export default ProfileItem
