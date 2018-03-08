import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom'
import {App, Home, Login, Register, Wall } from './containers';
import Drop from './containers/Drop';

// redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const rootElement = document.getElementById('root');
const appElement = document.getElementById('app');

const store = createStore(reducers, applyMiddleware(thunk));
console.log('gkl');
// ReactDOM.render(
//   <Drop />, appElement
// )
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/wall/:username" component={Wall} />
      </div>
    </BrowserRouter>
  </Provider>, rootElement
=======
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Home, Login, Register, Wall } from 'containers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';


const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="login" component={Login}/>
                <Route path="register" component={Register}/>
                <Route path="wall/:username" component={Wall}/>
            </Route>
        </Router>
    </Provider>, rootElement
>>>>>>> master
);
