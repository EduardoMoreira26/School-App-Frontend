import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f8ff;
  border-radius: 5px;
  /* box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.16); */
  border: 1px solid #c7e0fc;
  /* padding: 10px; */
  display: flex;
  height: 60px;
  align-items: center;
  color: #000;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    background-color: #e2f0ff;
    border-color: #7bb7fc ;
  }

  svg {
    font-size: 18px;
    margin-right: 10px;
    margin-left: 10px;

  }
`;


export const ProductPhotoArea = styled.div`
  width: 100px;
`;

export const ItemInfoArea = styled.div`
  flex: 1;
`;

export const ProductButtonArea = styled.div`

`;


export const ItemName = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  color: #3a3a3a;

`;

export const DateName = styled.div`
  font-size: 14px;
  /* margin-top: 40px; */
  font-weight: bold;
  color: #3a3a3a;
  display: flex;
  align-items: center;
  border-top: 1px solid #c7e0fc;
`;

export const ProductButton = styled.img`
    width: 15px;
`;





