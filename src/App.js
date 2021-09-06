import React from 'react';
import GlobalStyle from './styles/global';
import { client } from './config/api';
import { ApolloProvider } from '@apollo/client';
import Students from './pages/Students';
import StudentsContextProvider from './context/StudentsContext';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
  <><Router>
    <ApolloProvider client={client}>
      <StudentsContextProvider>
      <Navbar />
      <Students />
      <GlobalStyle />
      </StudentsContextProvider>
    </ApolloProvider>
    </Router>
  </>
  );
}

export default App;
