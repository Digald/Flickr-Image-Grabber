import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserForm from "./Components/UserForm";
import "./images.css";

function App() {
  const [allData, setAllData] = useState([]);
  const [searchValue, setSearchValue] = useState("dog");

  async function fetchData(searchValue) {
    const data = await axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://www.flickr.com/services/feeds/photos_public.gne?tags=${searchValue}&format=json`,
      "X-Requested-With": "XMLHttpRequest",
    });
    const jsonData = JSON.parse(
      data.data.replace("jsonFlickrFeed(", "").slice(0, -1)
    );
    setAllData(jsonData.items);
  }

  useEffect(() => {
    fetchData(searchValue);
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
    fetchData(value);
  };

  return (
    <div className="App">
      <Header />
      <UserForm handleSearch={handleSearch} searchValue={searchValue} />
      <div className="cardContainer">
        {allData &&
          allData.map((item, index) => {
            return (
              <div className="imgCard" key={index}>
                <p>{item.title}</p>
                <img src={item.media.m} alt={item.link} />
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
