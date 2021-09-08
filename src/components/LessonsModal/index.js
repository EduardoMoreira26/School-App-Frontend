/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { FiX } from 'react-icons/fi'
import { useLessonsContext } from "../../context/LessonsContext";
import { 
  Container,
  FormArea,
  FormButtons,
  FormTitle,
  ItemButton,
} from "./styles"
import { CREATE_LESSON, GET_LESSONS } from '../../graphql';
import { useMutation } from "@apollo/client";
import toast from '../utils/toast'

export default ({ data, setStatus }) => {
  const { lessons } = useLessonsContext;

  const [name, setName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const handleCancelButton = () => {
    setStatus(false);
  }

  const onClompeted = () => {
    toast.success('Aula criada com sucesso!')
  }
  const onError = () => {
    toast.error('Erro ao criar aula')
  }

  const [createLesson, {loading: createLoading}] = useMutation(CREATE_LESSON, {
    onError
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    createLesson({
      variables: {
        name,
        teacherName,
        startDate,
        endDate
      },
      refetchQueries: [{
        query: GET_LESSONS,
      }]
    })

    setName('')
    setStartDate('')
    setEndDate('')
    setTeacherName('')
    setStatus(false)
  }

  return (
    <Container>
      <FormTitle>Criar aula <FiX onClick={handleCancelButton}/></FormTitle>
        <FormArea onSubmit={handleSubmit}>

        <label htmlFor="aula">Nome da aula</label>
        <input 
          id="aula" 
          name="name" 
          type="text" 
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
          />

        <label htmlFor="teacherName">Professor</label>
        <input 
          id="teacherName" 
          name="teacherName" 
          type="text" 
          value={teacherName}
          required
          onChange={(event) => setTeacherName(event.target.value)}
          />

        <label htmlFor="startDate">Data de inicio</label>
        <input
          id="startDate"
          type="date" 
          name="startDate"
          value={startDate}
          required
          onChange={(event) => setStartDate(event.target.value)}
          />

        <label htmlFor="endDate">Data final</label>
        <input 
          id="endDate" 
          type="date" 
          name="endDate"
          value={endDate}
          required
          onChange={(event) => setEndDate(event.target.value)}
          />
        
        <FormButtons>
          <ItemButton className='cancelButton' small={true} onClick={handleCancelButton}>Cancelar</ItemButton>
          <ItemButton disabled={createLoading} type="submit" >Salvar</ItemButton>
        </FormButtons>
        </FormArea>

    </Container> 

  );
}