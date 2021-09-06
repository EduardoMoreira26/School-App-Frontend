import React from 'react';
import GlobalStyle from './styles/global';
import { client } from './config/api';
import { ApolloProvider } from '@apollo/client';
import Students from './pages/Students';
import StudentsContextProvider from './context/StudentsContext';

const App = () => {

  return (
  <>
    <ApolloProvider client={client}>
      <StudentsContextProvider>
      <Students />
      <GlobalStyle />
      </StudentsContextProvider>
    </ApolloProvider>
  </>
  );
}

export default App;
