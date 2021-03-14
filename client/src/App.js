import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Route exact component={Home} />
      </MainLayout>
    )
  }
}

export default App;