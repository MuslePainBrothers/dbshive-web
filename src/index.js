import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import App from './components/App';
import Top from './components/Top';
import Admin from './components/Admin';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'


const middleware = applyMiddleware(
  routerMiddleware(browserHistory),
  thunkMiddleware
)

const store = createStore(
  reducer,
  middleware
)

const history = syncHistoryWithStore(browserHistory, store)


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Top} />
        <Route path="admin" component={Admin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
