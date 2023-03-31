import styled from "styled-components";

export const SidebarStyledWrapper = styled.div`
  height: 100vh;
  width: 180px;
  background-color: #a020f0;
  position: fixed;
  top: 0;

  .tab-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
  .selected-tab-container {
    background: #ffff34;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a020f0;
    text-decoration: none;
  }
`;
