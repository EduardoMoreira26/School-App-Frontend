import { useMutation, useQuery } from '@apollo/client';
import React, { createContext, useContext } from 'react';
import { GET_STUDENTS } from '../graphql';
import { CREATE_LESSON } from '../graphql';


const Mycontext = createContext();

export default function StudentsContextProvider({children}){
  const { data, loading } = useQuery(GET_STUDENTS)


  return (
    <Mycontext.Provider 
    value={{
      students: {
      itens: data ? data.allLessons : [],
      loading,
      // createLesson,
      // error
    }}}>{children}</Mycontext.Provider>
  )
}

export const useStudentsContext = () => {
  return useContext(Mycontext);
}
