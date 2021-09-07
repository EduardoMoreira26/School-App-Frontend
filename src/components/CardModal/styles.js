import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  padding: 20px;
`;

export const FormArea = styled.form`
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: column; 
  margin-left: 10px;


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
`;


export const FormButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }

`;

export const ItemButton = styled.button`
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer; 
`;



