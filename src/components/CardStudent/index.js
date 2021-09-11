/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import {FiCalendar, FiBook, FiUser} from 'react-icons/fi'

import { 
  Container,
  ItemInfoArea,
  ItemName,
  ProductButtonArea,
  ProductButton,
  DateName
} from "./styles"


export default ({ data, onClick }) => {

  const handleClick = () => {
    onClick(data);
  }

  return (
   <Container onClick={handleClick}>
    <ItemInfoArea>
      <ItemName><FiBook/>Curso: {data?.name}</ItemName>
      {/* <ItemName><FiUser/>Professor(a): {data?.teacherName}</ItemName>
      <DateName><FiCalendar/>{`${data?.startDate }  até  ${ data?.endDate}`} </DateName> */}
    </ItemInfoArea>
   </Container> 
  );
}

// export default Card;