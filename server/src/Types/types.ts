export type UserType = {
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
    phone: number;
    reviewCount: number;
    upvotes: number;
    ig: string;
    email: string;
    password: string;
    scene: string;
    bio: string;
    photo: string;
  };

  export type PostType = {
    id: number;
    content: string;
    event: boolean;
    comment: string;
    scene: string;
    postPhoto: string;
    userId: number;
    createdAt: number;
    updatedAt: number;
  };