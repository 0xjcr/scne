import { UserType } from "./userType";

export type UserPost = {
  id?: string;
  userId?: string;
  user?: UserType;
  content: string;
  event: boolean;
  comment: boolean;
  scene: string;
  postPhoto: string;
};
