import styled from "styled-components";
export const ModalContentStyled = styled.div`
  * {
    scrollbar-width: thin;
    scrollbar-color: #6c6c6d #d4d4d3;
    :-webkit-scrollbar {
      width: 20px;
    }
    :-webkit-scrollbar-track {
      background: transparent;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #d4d4d3;
    border-radius: 12px;
  }
  .search Search {
    border-color: purple;
  }
  .ant-input-group-addon {
    .ant-btn-primary {
      background: #ecedef;
    }
  }
`;
