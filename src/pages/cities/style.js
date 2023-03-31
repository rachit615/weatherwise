import styled from "styled-components";
export const CitiesStyledWrapper = styled.div`
  width: 300px;
  height: 92vh;
  border: 1px solid #ecedef;
  margin-left: 200px;
  margin-top: 30px;
  border-radius: 5px;
  box-shadow: 0 1px 7px 0 rgb(0, 0, 0, 0.1);

  .cities {
    display: flex;
    align-items: center;
    gap: 220px;
  }
  .cities h4 {
    padding-left: 10px;
  }
  i {
    cursor: pointer;
  }
`;
