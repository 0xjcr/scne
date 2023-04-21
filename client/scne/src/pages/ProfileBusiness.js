import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBusiness } from "../api-service";
import BusinessProfile from "../components/BusinessProfile";
import Navbar from "../components/Navbar";

const ProfileBusiness = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
};

  useEffect(() => {
    getBusiness(id).then((profile) => setBusiness(profile));
  }, [id]);

  return (
    <>
    <button onClick={goBack}>BACK</button>
      {business ? (
        <BusinessProfile
          name={business.name}
          bio={business.bio}
          city={business.city}
          address={business.address}
          phone={business.phone}
          reviewCount={business.reviewCount}
          ig={business.ig}
          photo={business.photo}
        />
      ) : (
        <div>Loading...</div>
      )}
      <Navbar></Navbar>
    </>
  );
};

export default ProfileBusiness;
