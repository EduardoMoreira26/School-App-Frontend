import { useQuery } from '@apollo/client';
import React, { createContext, useContext } from 'react';
import { GET_STUDENTS } from '../graphql';

const Mycontext = createContext();

export default function StudentsContextProvider({children}){
  const { data, loading } = useQuery(GET_STUDENTS)

  return (
    <Mycontext.Provider 
    value={{
      students: {
      itens: data ? data.allLessons : [],
      loading,
    }}}>{children}</Mycontext.Provider>
  )
}

export const useStudentsContext = () => {
  return useContext(Mycontext);
}
