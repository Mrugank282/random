import React, { useContext } from "react";
import { FavContext } from "../contexts/FavContext";
import "../assets/css/users.css"

const Fav = () => {
  const { favourites } = useContext(FavContext);

  return (
    <div className="items-container">
      <h2 className="list-title">Favourites</h2>
      <div className="favourites-container">
      {favourites.length > 0 ? (
        favourites.map((fav) => (
          <div key={fav.id} className="user">
            <div className="profile">
              <img src={fav.picture} alt={fav.name} />
            </div>
            <div className="about">
              <p>{fav.name} </p>
              <p>{fav.email}</p>
            </div>
          </div>
        ))
      ) : (
        <p>You have no favourites yet.</p>
      )}
      </div>
    </div>
  );
};

export default Fav;
