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
    
    const response = await fetch('http://localhost:3333/joinbus', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(body),
    });
    return await response.json();
    
    
    
    
}    
