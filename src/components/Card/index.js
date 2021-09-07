/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

import { 
  Container,
  ItemInfoArea,
  ItemName,
  ProductButtonArea,
  ProductButton,
  DateName
} from "./styles"


export default ({ data, onClick }) => {

  // const handleClick = () => {
  //   onClick(data);
  // }

  return (
   <Container>
    <ItemInfoArea>
      <ItemName>Curso: {data?.name}</ItemName>
      <DateName>{data?.endDate}</DateName>
    </ItemInfoArea>
   </Container> 
  );
}

// export default Card;