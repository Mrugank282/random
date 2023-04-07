import React, {  useState, useEffect, useContext } from "react";
import { FavContext } from "../contexts/FavContext";
import "../assets/css/users.css";
import { FcLike, FcDislike } from "react-icons/fc";

const Items = () => {
  const { toggleFavourite } = useContext(FavContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const item = {
          id: data.results[0].login.uuid,
          name: data.results[0].name.first + " " + data.results[0].name.last,
          email: data.results[0].email,
          picture: data.results[0].picture.large,
          isFavourite: false, // add a isFavourite property to each item
        };
        setItems((prevItems) => [...prevItems, item]);
      } catch (error) {
        console.error(error);
      }
    };
    for(var i=0;i<10;i++){
      fetchData();
    }
  }, []);

  const handleToggleFavourite = (index) => {
    const newItems = [...items]; // create a new array to avoid modifying the original state directly
    const item = newItems[index];
    item.isFavourite = !item.isFavourite; // toggle the isFavourite property of the item
    setItems(newItems); // update the state with the new array

    toggleFavourite(item); // update the favourites in the context
  };

  return (
    <div className="items-container">
      <h2 className="list-title">List of Users</h2>
      <div className="user-container">
        {items.map((item, index) => (
          <div key={index} className="user">
            <div className="profile">
              <img src={item.picture} alt={item.name} />
            </div>
            <div className="about">
              <p>{item.name} </p>
              <p>{item.email}</p>
            </div>
            <div>
              <button
                className="btn"
                type="button"
                onClick={() => handleToggleFavourite(index)}
              >
                {item.isFavourite ? <FcDislike/> : <FcLike />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
