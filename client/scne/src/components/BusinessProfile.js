

const BusinessProfile = ({ name, bio, city, address, phone, reviewCount, ig, photo }) => {
    return (
      <>
        <div>
          <h2>{name}</h2>
          <div>{bio}</div>
          <div>{city}</div>
          <div>{address}</div>
          <div>{phone}</div>
          <div>{reviewCount}</div>
          <div>{ig}</div>
          <img src={photo} alt={`${name}'s photo`} />
        </div>
      </>
    );
  };
  
  export default BusinessProfile;
  