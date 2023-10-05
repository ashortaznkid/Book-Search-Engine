import './App.css';
//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <Navbar />
        <Routes>
          <Route exact path="/" component={SearchBooks}/>
          <Route exact path="/saved" component={SavedBooks}/>
          <Route render={() => <h1>Wrong Page!</h1>} />
        </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
