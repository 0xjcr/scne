import React, { useState, useEffect } from "react";
// @ts-ignore
import Navbar from "./Navbar.tsx";
import { useNavigate } from "react-router-dom";
import { getAllBusinesses, updateUpvote } from "../api-service";
// @ts-ignore
import AltTile from "./AltTile.tsx";

const List = ({ scene }) => {
  const navigate = useNavigate();

  const [bizState, setBizState] = useState([]);

  useEffect(() => {
    getAllBusinesses().then((res) => setBizState(res));
  }, []);

  const handleBusinessClick = (bizId: number) => {
    navigate(`/biz/${bizId}`);
  };

  const handleUpvote = async (bizId: number): Promise<void> => {
    const updatedBiz = await updateUpvote(bizId); // make API call to update upvote count
    setBizState((prevBizState) => {
      // replace the old business with the updated one
      const newBizState = [...prevBizState];
      const index = newBizState.findIndex((biz) => biz["id"] === bizId);
      newBizState[index] = updatedBiz;
      // sort the businesses by upvotes
      return newBizState.sort((a, b) => b["upvotes"] - a["upvotes"]);
    });
  };

  // Filter businesses by scene and sort them by upvotes
  const filteredAndSortedBiz = [...bizState]
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
                handleUpvote={() => handleUpvote(biz["id"])}
                ranking={index + 1}
                photo={biz["photo"]}
                // Add the ranking prop here
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
