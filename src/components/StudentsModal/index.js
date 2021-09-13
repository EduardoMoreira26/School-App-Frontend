/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { FiX } from 'react-icons/fi'
import { 
  Container,
  FormArea,
  FormButtons,
  FormTitle,
  ItemButton,
} from "./styles"
import { CREATE_STUDENT, GET_STUDENTS } from '../../graphql/Students'
import { useMutation } from "@apollo/client";
import toast from '../utils/toast'

export default ({ data, setStatus }) => {
  const [nameStudent, setNameStudent] = useState('')

  const handleCancelButton = () => {
    setStatus(false);
  }

  const onClompeted = () => {
    toast.success('Aula criada com sucesso!')
  }
  const onError = () => {
    toast.error('Erro ao criar aula')
  }

  const [createStudent, {loading}] = useMutation(CREATE_STUDENT);

  const handleSubmit = (e) => {
    console.log({e})
    e.preventDefault();
    createStudent({
      variables: {
        name: nameStudent, 
      },
      refetchQueries: [{
        query: GET_STUDENTS,  
      }]
    })

    window.alert('Aluno criado com sucesso')

    setNameStudent('')
    setStatus(false);

  }

  return (
    <Container>
      <FormTitle>Adicionar aluno <FiX onClick={handleCancelButton}/></FormTitle>
      <FormArea onSubmit={handleSubmit} >
          <input 
            id="name" 
            type="text" 
            name="name"
            onChange={(event) => setNameStudent(event.target.value)}
            placeholder='Nome do aluno'
            required
            />
        <FormButtons>
          <ItemButton className='cancelButton' small={true} onClick={handleCancelButton}>Cancelar</ItemButton>
          <ItemButton disabled={loading} type="submit" >Salvar</ItemButton>
        </FormButtons>
        </FormArea>

    </Container> 

  );
}