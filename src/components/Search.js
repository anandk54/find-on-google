import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import { key, cx } from "../API";
import axios from "axios";
import Show from "./Show";

const Search = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [state, setState] = useState(location.state ? location.state : "");

  const [results, setResults] = useState([]);
  const [info, setInfo] = useState("");

  const goBack = () => {
    navigate("/");
  };
  const searchGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
      );
      if (response) {
        // console.log(response.data.items);

        setResults(response.data.items);
        setInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getPosts() {
      if (location.state) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
          );
          if (response) {
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []);

  return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src="/images/small.png" alt="logo" onClick={goBack}></img>
        </div>
        <div className="search__form-input">
          <form className="home__form" onSubmit={searchGoogle}>
            <input
              type="text"
              className="home__input"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <FaSistrix className="search__icon" />
            <FaMicrophone className="microphone" />
          </form>
        </div>
      </div>
      <Show results={results} info={info} />
    </div>
  );
};

export default Search;
