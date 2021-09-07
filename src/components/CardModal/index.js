/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { 
  Container,
  FormArea,
  FormButtons,
  FormTitle,
  ProductButton,
} from "./styles"

export default ({ data, setStatus }) => {

  const handleCancelButton = () => {
    setStatus(false);
  }

  return (
    <Container>
        <FormTitle>sadasd</FormTitle>
      <FormArea>


      </FormArea>

      <FormButtons>
        <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
        <ProductButton >Salvar</ProductButton>
      </FormButtons>
    </Container> 

  );
}