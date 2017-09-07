import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Films from './containers/Films';
import configureStore from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Film from './components/Film';
import People from './containers/People';
import Person from './components/Person';

const app = (
  <Provider store={configureStore()}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/films" component={Films} />
        <Route path="/films/:id" render={props => <Film {...props} />} />
        <Route path="/people" component={People} />
        <Route path="/people/:name" render={props => <Person {...props} />} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
