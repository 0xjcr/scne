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
    const response = await fetch(`http://localhost:3333/user/${id}`);
    return await response.json();
  };
  
  // Get all user profiles
  exports.getAllProfiles = async () => {
    const response = await fetch(`http://localhost:3333/community`);
    return await response.json();
  };



// edit a user profile
exports.updateProfile = async (id, body) => {
    const response = await fetch(`http://localhost:3333/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
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
