import React from 'react';
import NavbarPage from './components/layout/NavbarPage';
import Movie from './components/home/Movie';
import Landing from './components/home/Landing';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
        
          <div className="container">
            <div className = "row">
              <Switch>
                <Route  path="/" exact component={Landing} />
                <Route  path="/movie/:id" component={Movie}/>
              </Switch>
            </div>
          </div>
        </div>

    </Router>
    </Provider>
  );
}

export default App;
