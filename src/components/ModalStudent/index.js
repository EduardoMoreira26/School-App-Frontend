/* eslint-disable no-unused-vars */
import { ASSIGNT_STUDENTS_LESSON, CREATE_STUDENT, GET_LESSONS } from '../../graphql/Lessons';
import { FiX, FiPlus } from 'react-icons/fi';

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
  const [assignStudentsToLesson, {loading: loadStudentsLesson}] = useMutation(ASSIGNT_STUDENTS_LESSON)
 
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
      </ClassTitle>
    </Container>
  );
}

export default ModalProject;