import React from 'react';
import GlobalStyle from './styles/global';
import { client } from './config/api';
import { ApolloProvider } from '@apollo/client';
import Lessons from './pages/Lessons';
import LessonsContextProvider from './context/LessonsContext';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
  <><Router>
    <ApolloProvider client={client}>
      <LessonsContextProvider>
      <Navbar />
      <Lessons />
      <GlobalStyle />
      </LessonsContextProvider>
    </ApolloProvider>
    </Router>
  </>
  );
}

export default App;
