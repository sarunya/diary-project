import { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import PropTypes from 'prop-types';
import LoginActions from '../actions/LoginActions';
import { push } from 'react-router-redux';



class LoginContainer extends Component {

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  render() {
    return (
      <Login 
      loginUser = {this.login}
      />
    )
  }

  async login(emailId, password) {
    try {
      let {loginUser, history} = this.props;
      await loginUser(emailId, password, history);
    } catch (error) {
      
    }
  }
}

const mapStateToProps = (state) => ({
  userName: state.Login.name,
  emailId: state.Login.emailId,
  password: state.Login.password,
  nextPathname: '/login',
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (emailId, password, history) => dispatch(LoginActions.loginUser(emailId, password, history))
})

LoginContainer.propTypes = {
  loginUser: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(
  LoginContainer
);