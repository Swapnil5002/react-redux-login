import React from 'react';
import modelData from './dashoard.js';
import './employeeList.css';

export default class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

          }

        this.renderTableHeader = this.renderTableHeader.bind(this)
        this.renderTableData = this.renderTableData.bind(this)
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
      localStorage.removeItem("isLoginSuccess")
      this.props.history.push("/")
    }

    renderTableHeader() {
        const arr = ["ID", "Name", "Age", "Gender", "Email", "P honeNo"];
        return arr.map((key, index) =>{
          return <th key={index}>
          {key}
          </th>
        })
        
      }
    renderTableData() {
      
        return modelData.user.map((user) => {
          const {id, name ,age ,gender ,email, phoneNo} = user
          return(
            
            <tr key ={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{gender}</td>
              <td>{email}</td>
              <td>{phoneNo}</td>
            </tr>   
              
  
          )
        })
      }
    render() { 
        return (
              <div>
                <table id = "table">
                      <tbody>
                      <tr>{this.renderTableHeader()}</tr>
                          {this.renderTableData()}
                    </tbody>
                  </table>
                  
                    
                    <div className="button">
                    <button className="logout" onClick={this.logoutUser}>Log Out</button>
                  </div>
                </div>
               );
    }
}
 