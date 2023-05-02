import { UserPost } from "./types/postType";

import { BizType } from "./types/bizType";

interface SignUpType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
}

export interface EditUserType {
  photo: string;
  bio: string;
  ig: string;
  // about: string;
  email: string;
  password?: string;
  // name: string;
}

// create user profile
export async function createProfile(body: SignUpType) {
  const response = await fetch("http://localhost:3333/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const res = await response.json();
  return res;
}

// Get a single user profile by ID
export async function getProfile(id: number) {
  const response = await fetch(`http://localhost:3333/profile/${id}`);
  return await response.json();
}

// Get all user profiles
export async function getAllProfiles() {
  const response = await fetch(`http://localhost:3333/community`);
  return await response.json();
}

// edit a user profile
export async function updateProfile(id: number, body: EditUserType) {
  const response = await fetch(`http://localhost:3333/editprofile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log("inside NO ALT just the notmal one");
  return await response.json();
}

export async function login(email: string, password: string) {
  try {
    const response = await fetch("http://localhost:3333/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
}

export async function logout() {
  try {
    const response = await fetch(`http://localhost:3333/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { message } = await response.json();
    return message;
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
}

// create business profile
export async function createBusiness(body: BizType) {
  const response = await fetch("http://localhost:3333/joinbiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const res = await response.json();
  return res;
}

// get all businesses
export async function getAllBusinesses() {
  const response = await fetch("http://localhost:3333/list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

// get a business by id
export async function getBusiness(id: number) {
  const response = await fetch(`http://localhost:3333/biz/${id}`);
  return await response.json();
}

// Create a user post
export async function createUserPost(postDetails: UserPost) {
  try {
    const response = await fetch("http://localhost:3333/addpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDetails),
    });
    return await response.json();
  } catch (error) {
    console.error("error", error);
  }
}

// Get all posts
export async function getAllPosts() {
  try {
    const response = await fetch("http://localhost:3333/feed", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error", error);
  }
}

export const updateUpvote = async (id: number, upvotes: number) => {
  try {
    const response = await fetch(`http://localhost:3333/list/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ upvotes }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
  }
};
