// create user profile
export async function createProfile(body) {
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
export async function getProfile(id) {
  const response = await fetch(`http://localhost:3333/profile/${id}`);
  return await response.json();
}

// Get all user profiles
export async function getAllProfiles() {
  const response = await fetch(`http://localhost:3333/community`);
  return await response.json();
}

// edit a user profile
export async function updateProfile(id, body) {
  const response = await fetch(`http://localhost:3333/editprofile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}

export async function login(email, password) {
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

export async function logout(id) {
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
export async function createBusiness(body) {
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
export async function getBusiness(id) {
  const response = await fetch(`http://localhost:3333/biz/${id}`);
  return await response.json();
}

// Create a user post
export async function createUserPost(postDetails) {
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
