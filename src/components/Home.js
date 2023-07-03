import { React, useState } from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const searchGoogle = (e) => {
    e.preventDefault();
    console.log("Performing search for:", state);
    navigate("/search", { state });
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__logo">
          <img src="/images/google-logo.png" alt="Logo" />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <input
            type="text"
            className="home__input"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
          <div className="home__group">
            <input
              type="submit"
              className="home__button"
              value="Google Search"
            />
          </div>
          <FaSistrix className="search__icon" />
          <FaMicrophone className="microphone" />
        </form>
      </div>
    </div>
  );
};

export default Home;
