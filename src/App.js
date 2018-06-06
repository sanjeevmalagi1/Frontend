import React, { Component } from 'react';

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import reducers from './Reducers';

import Main from './Containers/Main';

const history = createBrowserHistory();

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <Provider store={createStoreWithMiddleware(reducers)}>
            
              <Router history={history} >
                <Switch>
                  <Route path="/" name="Main Page" component={Main} />
                </Switch>
              </Router>
            
        </Provider>
      </div>
    );
  }
}

export default App;
