import styled from "styled-components";
export const HeaderStyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 10px; */
  .my-fav-city {
    margin-left: 15px;
    font-weight: bold;
  }
  .logo img {
    width: 125px;
    height: 70px;
    border-radius: 3px;
  }
  .primary-button {
    background-color: #a020f0;
    color: white !important;
    border-radius: 3px;
    padding: 12px 24px;
    box-shadow: 0 0 2px #a020f0;
    transition: 0.2 ease-out;
    cursor: pointer;
  }
`;
