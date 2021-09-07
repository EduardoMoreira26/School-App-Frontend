import { useQuery } from '@apollo/client';
import React, { createContext, useContext } from 'react';
import { GET_LESSONS } from '../graphql';

const Mycontext = createContext();

export default function LessonsContextProvider({children}){
  const { data, loading } = useQuery(GET_LESSONS)

  return (
    <Mycontext.Provider 
    value={{
      lessons: {
      itens: data ? data.allLessons : [],
      loading,
      // createLesson,
    }}}>{children}</Mycontext.Provider>
  )
}

export const useLessonsContext = () => {
  return useContext(Mycontext);
}
