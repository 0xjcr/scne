import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBusiness } from "../api-service";
import BusinessProfile from "../components/BusinessProfile.tsx";
import Navbar from "../components/Navbar";

const ProfileBusiness: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [business, setBusiness] = useState<null | {
    name: string;
    bio: string;
    city: string;
    address: string;
    phone: string;
    reviewCount: number;
    ig: string;
    photo: string;
    id: number;
  }>(null);

  useEffect(() => {
    getBusiness(id).then((profile) => setBusiness(profile));
  }, [id]);

  return (
    <>
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
          // loggedInUserId={business.id}
        />
      ) : (
        <div>Loading...</div>
      )}
      <Navbar></Navbar>
    </>
  );
};

export default ProfileBusiness;
