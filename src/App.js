import React from 'react';
import GlobalStyle from './styles/global';
import { client } from './config/api';
import { ApolloProvider } from '@apollo/client';
import Lessons from './pages/Lessons';
import LessonsContextProvider from './context/LessonsContext';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import Students from './pages/Students';
import Home from './pages/Home';

const App = () => {

  return (
  <>
    <Router>
      <ApolloProvider client={client}>
        <LessonsContextProvider>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/lessons"  component={Lessons} />
            <Route path="/students"  component={Students} />
          </Switch>
          <GlobalStyle />
        </LessonsContextProvider>
      </ApolloProvider>
    </Router>
  </>
  );
}

export default App;
