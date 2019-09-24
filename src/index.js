import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './store/store';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import EmployeeList from './components/employee-list/employeeList'
import history from './history';


const Routing = function() {
  return  (<Router history={history}>
              <Route path="/" exact component={App} />
              <Route path="/emp" component={EmployeeList} />
            </Router>)
}


ReactDOM.render(<Provider store={store}><Router><Routing/></Router></Provider>, document.getElementById('root'));


 
