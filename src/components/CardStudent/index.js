/* eslint-disable import/no-anonymous-default-export */
import React  from "react";
import { FiUser, FiTrash } from 'react-icons/fi'
import { REMOVE_STUDENT } from '../../graphql/Students'
import { useMutation } from "@apollo/client";

import { 
  Container,
  ItemInfoArea,
  ItemName,
  ProductButtonArea,
  ProductButton,
  DateName
} from "./styles"


export default ({ data, onClick }) => {

  const [removeStudent, {loading}] = useMutation(REMOVE_STUDENT, {
    
  })

  console.log('LOF', data)

  const handleSubmit = (e) => {
    removeStudent({
      variables: {
      //  id
      },
      // refetchQueries: [{
      //   query: GET_LESSONS,
      // }]
    })
  }

  const handleClick = () => {
    onClick(data);
  }

  return (
   <Container onClick={handleClick}>
    <ItemInfoArea>
      
      <ItemName><FiUser/>Aluno: {data?.name} <FiTrash onClick={handleSubmit} /></ItemName>
    </ItemInfoArea>
   </Container> 
  );
}

// export default Card;