import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { getAllBusinesses } from "../api-service";
import AltTile from "./AltTile";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const List = () => {
  const navigate = useNavigate();

  const [allBiz, setBizState] = useState([]);

  useEffect(() => {
    getAllBusinesses().then((res: any) => setBizState(res));
  }, []);

  const handleBusinessClick = (bizId: number) => {
    navigate(`/biz/${bizId}`);
  };

  const scene = useSelector((state: RootState) => state.Scene);

  const filteredAndSortedBiz = [...allBiz]
    .filter((biz) => biz["scene"] === scene)
    .sort((a, b) => b["upvotes"] - a["upvotes"]);

  return (
    <div className="listwrapper">
      <div className="listContainer">
        <div className="list">
          {filteredAndSortedBiz.map((biz, index) => (
            <div key={biz["id"]} onClick={() => handleBusinessClick(biz["id"])}>
              <AltTile
                id={biz["id"]}
                name={biz["name"]}
                upvotes={biz["upvotes"]}
                ranking={index + 1}
                photo={biz["photo"]}
              />
            </div>
          ))}
        </div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default List;
