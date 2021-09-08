import { useMutation, useQuery } from '@apollo/client';
import React, { createContext, useContext } from 'react';
import { GET_LESSONS, CREATE_LESSON } from '../graphql';

const Mycontext = createContext();

export default function LessonsContextProvider({children}){
  const { data, loading } = useQuery(GET_LESSONS)
  // const [createLesson ] = useMutation(CREATE_LESSON)


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
