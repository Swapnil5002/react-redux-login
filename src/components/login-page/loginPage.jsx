import React from 'react';
import { login } from '../../store/reducer';
import { connect } from 'react-redux';
import './loginPage.css';

class LoginPage extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
					username: "",
					password: "",
					submitted: false
			};
			this.onChange = this.onChange.bind(this);
			this.onClick = this.onClick.bind(this);
			this.handleValidation = this.handleValidation.bind(this);
	}

	componentWillMount()  {
		if (localStorage.getItem("isLoginSuccess") && this.props) {
			this.props.props.history.push("/emp")
		}
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.isLoginSuccess) {
			this.props.props.history.push('/emp');
			localStorage.setItem("isLoginSuccess", true); 
		}
	}

	onClick(e){
		e.preventDefault();
		if(!this.handleValidation()) return;
		this.props.login(this.state.username, this.state.password);
	}

	handleValidation(){
		let matchString = this.state.username.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
		let passwordEmpty = this.state.password ? false: true;
		if (!matchString) {
			this.setState({
				emailError: true,
				emailValidation: "Email is invalid."
			})
		}
		if (passwordEmpty) {
			this.setState({
				passwordError: true,
				passworErrorMessage: "You must fill password."
			})
		}
		if (matchString == null) {
			matchString = false
		}
		return matchString && !passwordEmpty;
	}

	onChange(event){
		this.setState({
				[event.target.name]: event.target.value
				
		})
	}

	render() {
			return (
					<div className="login">
						<form onSubmit={this.onClick}>   
							<h1>Login</h1>
								<div className="loginControl">
									<div className="container">
										<input type ="text" placeholder="Email.." className={this.state.emailError ? "error" : ""} onChange={this.onChange} name="username" value={this.state.username}></input>
										{this.state.emailValidation && <p className="error">{this.state.emailValidation}</p>}
									</div>
									<div className="container">
										<input type="password" placeholder="Password.." className={this.state.passwordError ? "error" : ""} onChange={this.onChange} name="password" value={this.state.password}></input>
										{this.state.passworErrorMessage&& <p className="error">{this.state.passworErrorMessage}</p>}
									</div>
									<div>
										<button type="submit">Login</button>
									</div>
								</div>
						</form> 
					</div>
							
					
			);
	}
}
const mapStateToProps = (state) => {
    return {
      isLoginPending: state.isLoginPending,
      isLoginSuccess: state.isLoginSuccess,
      loginError: state.loginError
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (username, password) => dispatch(login(username, password))
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
