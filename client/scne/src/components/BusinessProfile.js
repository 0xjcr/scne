

const BusinessProfile = ({ name, bio, city, address, phone, reviewCount, ig, photo }) => {
    return (
      <>
        <div className="businessProfileContainer">
          <div className="businessProfileContent">
          <div>
          <h2>{name}</h2><div>{ig}</div>
          </div>
          <img src={photo} alt={`${name}'s photo`} />
          
          <div>{bio}</div>
          <div>
          <div>{city}</div>
          <div>{address}</div>
          <div>{phone}</div>
          </div>
          <div>{reviewCount}</div>
          {/* team */}
          </div>
          
        </div>
      </>
    );
  };
  
  export default BusinessProfile;
  