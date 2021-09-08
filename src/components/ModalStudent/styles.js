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

export const FormArea = styled.form`
  display: flex;
  align-items: center;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    display: block;
    border: 1px solid #ccc;
    width: 90% ;
    padding: 0.8rem;
    border-radius: 5px;
    background: #eee;
    transition: 0.1s;
    margin-bottom: 1rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border: 1px solid #2f80ed;
    background: #fff;
    box-shadow: 0 0 0 3px (#ccc);
  }

  svg {
    font-size: 30px;
    cursor: pointer;
    margin: 0 0  15px 5px;
    color:  #2f80ed;
  }
`;

export const ClassStudents = styled.div`
  /* background: #e43; */
  /* height: 50%; */
`;

