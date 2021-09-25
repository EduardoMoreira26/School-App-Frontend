/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { 
  Container,
  Background,
  TextIntro
} from "./styles"


export default () => {


  return (
   <Container>
     <TextIntro>
       <h1>Venha conferir suas aulas. </h1> 
       <br />
       <br />
       <p>Escolha o curso e cadastre seus alunos. </p> 
     </TextIntro>

     <Background/>
   </Container>
  );
}