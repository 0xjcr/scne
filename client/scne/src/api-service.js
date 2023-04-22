// create user profile
exports.createProfile =  async (body) => {

    const response = await fetch('http://localhost:3333/join', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(body),
    });
    return await response.json();
}

// Get a single user profile by ID
exports.getProfile = async (id) => {
    const response = await fetch(`http://localhost:3333/profile/${id}`);
    return await response.json();
  };
  
  // Get all user profiles
  exports.getAllProfiles = async () => {
    const response = await fetch(`http://localhost:3333/community`);
    return await response.json();
  };



// edit a user profile
exports.updateProfile = async (id, body) => {
    const response = await fetch(`http://localhost:3333/editprofile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  };

// edit a user profile using '/profile/:id' route
exports.updateProfileAlt = async (id, body) => {
  const response = await fetch(`http://localhost:3333/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return await response.json();
};
  


  exports.login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3333/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const { user } = await response.json();
      return user;
    } catch (error) {
      console.error(error);
      return { error: 'Something went wrong' };
    }
  };


  exports.logout = async () => {
    try {
      const response = await fetch('http://localhost:3333/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { message } = await response.json();
      return message;
    } catch (error) {
      console.error(error);
      return { error: 'Something went wrong' };
    }
  };




// create business profile
exports.createBusiness = async (body) => {
    
    const response = await fetch('http://localhost:3333/joinbiz', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(body),
    });
    return await response.json();
    
}    

// modift business profile

exports.updateBusiness = async (id) => {
    try {
      const response = await fetch(`http://localhost:3333/editinfo/${id}`, {
        method: "PUT",
      });
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('error', error);
    }
  };

  exports.updateUpvote = async (id, upvotes) => {
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

// get all businesses
exports.getAllBusinesses = async () => {
    const response = await fetch('http://localhost:3333/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  // get a business by id
  exports.getBusiness = async (id) => {
    const response = await fetch(`http://localhost:3333/biz/${id}`);
    return await response.json();
  };