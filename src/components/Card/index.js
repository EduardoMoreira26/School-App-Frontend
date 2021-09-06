/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

import { 
  Container,
  ProductPhotoArea,
  ProdcutPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductIngredients,
  ProductButtonArea,
  ProductButton
} from "./styles"


export default ({ data, onClick }) => {

  // const handleClick = () => {
  //   onClick(data);
  // }

  return (
   <Container>
    {/* <ProductPhotoArea>
      <ProdcutPhoto />
    </ProductPhotoArea> */}

    <ProductInfoArea>
      <ProductName>{data?.name}</ProductName>
      <ProductName>{data?.endDate}</ProductName>
    </ProductInfoArea>

    <ProductButtonArea>
      <ProductButton/>
    </ProductButtonArea>

   </Container> 
  );
}

// export default Card;