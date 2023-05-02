import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// @ts-ignore
import { getBusiness } from "../api-service.tsx";
// @ts-ignore
import BusinessProfile from "../components/BusinessProfile.tsx";
// @ts-ignore
import Navbar from "../components/Navbar.tsx";
import { BizType } from "../types/bizType";

const ProfileBusiness: React.FC = () => {
  const { id } = useParams() as { id: string };
  const [business, setBusiness] = useState<null | BizType>(null);

  useEffect(() => {
    getBusiness(Number(id)).then((profile: BizType) => setBusiness(profile));
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
