import { Input } from "antd";
import React, { useEffect } from "react";
import City from "../../city";
import { citiesData } from "../../constants";
import { ModalContentStyled } from "./style";
const { Search } = Input;
const ModalContent = () => {
  useEffect(() => {
    citiesData.sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log(citiesData);
  }, []);

  const onSearch = (value) => console.log(value);
  return (
    <ModalContentStyled>
      <hr color="#ecedef" />
      <div className="search">
        <Search
          allowClear
          placeholder="Search City"
          onSearch={onSearch}
          enterButton
        />
      </div>
      {citiesData.map((city_data) => {
        return <City city_name={city_data.name} />;
      })}
    </ModalContentStyled>
  );
};

export default ModalContent;
