import { useMutation, useQuery } from '@apollo/client';
import React, { createContext, useContext } from 'react';
import { GET_STUDENTS } from '../graphql/Students';

const Mycontext = createContext();

export default function StudentsContextProvider({children}){
  const { data, loading } = useQuery(GET_STUDENTS)
  // const [createLesson ] = useMutation(CREATE_LESSON)


  return (
    <Mycontext.Provider 
    value={{
      students: {
      itens: data ? data?.getStudents : [],
      loading,
      // createLesson,
    }}}>{children}</Mycontext.Provider>
  )
}

export const useStudentsContext = () => {
  return useContext(Mycontext);
}
