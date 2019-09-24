import React from 'react';
import LoginPage from './components/login-page/loginPage.jsx';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
  return (
    <div className="App">
      <LoginPage props={this.props}/>
     
    </div>
  )
}
}
export default App;
