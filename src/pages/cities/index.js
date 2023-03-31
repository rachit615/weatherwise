import React from "react";
import { CitiesStyledWrapper } from "./style";
import { useState } from "react";
import AddCityModal from "../../components/modal/addCityModal";
const Cities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <CitiesStyledWrapper>
      <div className="cities">
        <h4>Cities</h4>
        <i className="fa-solid fa-plus" onClick={showModal}></i>
      </div>
      <hr color="#ecedef" />
      <div style={{ paddingLeft: "15px" }}>you have not selected any city.</div>
      <AddCityModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </CitiesStyledWrapper>
  );
};

export default Cities;
