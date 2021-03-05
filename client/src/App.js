import React from 'react';
import { Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import NotFound from './components/pages/NotFound';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route component={NotFound}/>
        </Switch>
      </MainLayout>
    )
  }
}

export default App;