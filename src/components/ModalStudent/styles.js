import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  width:  90vw;
  overflow-y: auto;
  background: #fff;
  border-radius: 5px;
`;


export const Title = styled.div`
  padding: 20px;
  background: #1b2330;
  display: flex;
  justify-content: space-between;
  color: #fff;

  svg {
    font-size: 30px;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: block;
    text-align: center;
  }
`;


export const ClassTitle = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    display: block;
    text-align: center;
  }
`;



export const ClassStudents = styled.div`
  /* background: #e43; */
  /* height: 50%; */
`;

