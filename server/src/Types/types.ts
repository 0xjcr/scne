import { NumericLiteral } from "typescript";

export type UserType = {
  id?: number;
  firstName: string;
  lastName: string;
  city: string;
  ig: string;
  email: string;
  password: string;
  bio: string;
};

export type BizType = {
  name: string;
  city: string;
  address: string;
  phone: string;
  reviewCount: string;
  upvotes: string;
  ig: string;
  email: string;
  password: string;
  scene: string;
  bio: string;
  photo: string;
};

export type PostType = {
  // id?: number;
  content: string;
  event: boolean;
  comment: boolean;
  scene: string;
  postPhoto: string;
  userId: number;
  // createdAt?: number;
  // updatedAt?: number;
};

export type sequelAddition = {
id : Number;
createdAt: number;
  updatedAt: number;
}
