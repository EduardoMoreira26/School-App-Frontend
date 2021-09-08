import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  transform: scale(5);
`;

export const Loading = styled.div`
  animation: is-rotating 1s infinite;
  border: 2px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 10px;
  width: 10px;

  @keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`;