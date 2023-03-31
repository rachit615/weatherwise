import React from "react";
import { Header } from "../../components/header";
import { HomeStyledWrapper } from "./style";

const Home = () => {
  return (
    <HomeStyledWrapper>
      <Header />
      <div className="home">
        <p>you have not selected any city as a favourite yet.</p>
      </div>
    </HomeStyledWrapper>
  );
};

export default Home;
