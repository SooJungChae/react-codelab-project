<<<<<<< HEAD

import React from 'react';
import {Authentication} from '../components';
import {connect} from 'react-redux';
import {loginRequest} from '../actions/authentication';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this); // 이거 왜..?
  }

  handleLogin(id, pw){
    console.log(id);

    return this.props.loginRequest(id, pw).then(
      () => {
        if(this.props.status === "SUCCESS") {
          let loginData = {
            isLoggedIn: true,
            username: id
          };

          document.cookie = 'key=' + btoa(JSON.stringify(loginData));

          Materialize.toast('Welcome, '+ id + '!', 2000);
          this.props.history.push("/");
          return true;
        } else {
          let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
          Materialize.toast($toastContent, 2000);
          return false;
        }
      }
    );
  }

  render() {
      return (
          <div>
              <Authentication mode={true}
                onLogin={this.handleLogin}/>
          </div>
      );
  }
}

// login 컨테이너 컴퍼넌트를 redux 에 연결하기
// state, dispatch 를 props 에 연결하네.
const mapStateToProps = (state) => {
  return {
    status: state.authentication.login.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (id, pw) => {
      return dispatch(loginRequest(id, pw));
    }
  };
}

// react-redux 를 통해서 컴퍼넌트를 redux 에 연결한다.
=======
import React from 'react';
import { Authentication } from 'components';
import { connect } from 'react-redux';
import { loginRequest } from 'actions/authentication';
import { browserHistory } from 'react-router';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw) {
        return this.props.loginRequest(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    let loginData = {
                        isLoggedIn: true,
                        username: id
                    };

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));

                    Materialize.toast('Welcome ' + id + '!', 2000);
                    browserHistory.push('/');
                    return true;
                } else {
                    let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
                    Materialize.toast($toastContent, 2000);
                    return false;
                }
            }
        );
    }

    render() {
        return (
            <div>
                <Authentication mode={true}
                    onLogin={this.handleLogin}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id,pw));
        }
    };
};

>>>>>>> master
export default connect(mapStateToProps, mapDispatchToProps)(Login);
