import styled from 'styled-components';

export const CardArea = styled.div`
  padding: 20px 0;
  background: #fff;
`;

export const CardList = styled.div`
  display: grid;
  background: #fff;
  border-radius: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  padding: 20px 20px ;
  max-width: 1190px;
  margin: 0 auto;
`;