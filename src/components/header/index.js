import { HeaderStyledWrapper } from "./style";
import { useState } from "react";
import AddCityModal from "../modal/addCityModal";
export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <HeaderStyledWrapper>
      {/* <div className="logo">
        <img src={require("./logo.jpg")} alt="logo" />
      </div> */}
      <h4 className="my-fav-city">My Favorite cities</h4>
      <div className="primary-button" onClick={handleOpenModal}>
        Add New City
      </div>
      <AddCityModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </HeaderStyledWrapper>
  );
};
