import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.status ? "flex" : "none"};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 900;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  /* width: 300px;
  height: 300px; */
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0 0 50px #000;
  max-width: 100vw;
  max-height: 95vh;
  overflow: auto;
`;