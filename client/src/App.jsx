import './App.css';
import { Outlet } from 'react-router-dom';
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
          <Route 
              path="/" 
              component={SearchBooks}
            />
            <Route 
              path="/saved" 
              component={SavedBooks}
            />
        </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
