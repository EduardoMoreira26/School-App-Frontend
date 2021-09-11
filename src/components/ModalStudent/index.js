/* eslint-disable no-unused-vars */
import { ASSIGNT_STUDENTS_LESSON, CREATE_STUDENT, GET_LESSONS } from '../../graphql/Lessons';
import { FiX, FiPlus } from 'react-icons/fi'

import { 
  Container,
  ClassTitle,
  Title,
  FormArea,
  ClassStudents
} from './styles';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

const ModalProject = ({ data, setStatus }) => {
  const [nameStudent, setNameStudent] = useState('')


  const [createStudent, {loading}] = useMutation(CREATE_STUDENT)
  const [assignStudentsToLesson, {loading: loadStudentsLesson}] = useMutation(ASSIGNT_STUDENTS_LESSON)


  const handleSubmit = (e) => {
    console.log({e})
    e.preventDefault();
    createStudent({
      variables: {
        name: nameStudent, 
      },
      refetchQueries: [{
        query: GET_LESSONS,
      }]
    })

    window.alert('Aluno criado com sucesso')

    setNameStudent('')
  }

  const handleCloseButton = () => {
    setStatus(false);
  }

  console.log({data})

  return (
    <Container>
      <Title>
        <h2>Cadastrar alunos</h2>
        <FiX onClick={handleCloseButton}/>
      </Title>
      <ClassTitle>
        <p>Curso: {data?.name}</p>
        <p>Professor(a): {data?.teacherName}</p>

        <FormArea onSubmit={handleSubmit} >
        <input 
          id="name" 
          type="text" 
          name="name"
          onChange={(event) => setNameStudent(event.target.value)}
          placeholder='Nome do aluno'
          required
          />
        <button className="button-plus" type='submit'><FiPlus /></button>
        </FormArea>
      </ClassTitle>

      <ClassStudents>
        <p>{nameStudent}</p>
      </ClassStudents>

     
    </Container>
  );
}

export default ModalProject;