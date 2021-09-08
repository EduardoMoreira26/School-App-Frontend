import React from 'react';

import { FiX, FiPlus } from 'react-icons/fi'

import { 
  Container,
  ClassTitle,
  Title,
  FormArea,
  ClassStudents
} from './styles';

const ModalProject = ({ data, setStatus }) => {

  const handleCloseButton = () => {
    setStatus(false);
  }

  console.log({data})

  return (
    <Container>
      <Title>
        <h1>Cadastrar alunos</h1>
        <FiX onClick={handleCloseButton}/>
      </Title>
      <ClassTitle>
        <h3>Curso: {data?.name}</h3>
        <h3>Professor(a): {data?.teacherName}</h3>

        <FormArea >
        <input 
          id="endDate" 
          type="text" 
          name="endDate"
          placeholder='Nome do aluno'
          required
          />
        <FiPlus/>
        </FormArea>
      </ClassTitle>

      <ClassStudents>
        <h1>Estudantes</h1>
      </ClassStudents>

     
    </Container>
  );
}

export default ModalProject;