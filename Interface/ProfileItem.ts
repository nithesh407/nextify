import { Moment } from "moment";

interface Education {
  organization: string;
  degree: string;
  period: [Moment, Moment];
}

interface ProfileItem {
  userName: string;
  email: string;
  userDescription: string;
  educations: Education[];
  userLocation: {
    country: string;
    state: string;
    city: string;
  };
  skills: string[];
  linkedINURL: string;
  githubURL: string;
  twitterURL: string;
  instagramURL: string;
  userImage: {
    uid: string;
    name: string;
    status: "done" | "error" | "uploading" | "removed";
    url?: string;
    thumbUrl?: string;
    crossOrigin?: "anonymous" | "use-credentials" | "";
    percent?: number;
  };
}

export default ProfileItem;
