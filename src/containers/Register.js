import React from 'react';
<<<<<<< HEAD
import {Authentication} from '../components';
import {connect} from 'react-redux';
import {registerRequest} from '../actions/authentication';
import {withRouter} from 'react-router-dom';
import Login from './Login';
import PropTypes from "prop-types";

class Register extends React.Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // }
  constructor(props, context) {
    super(props, context);
    this.handleRegister = this.handleRegister.bind(this);
  }
  goLogin() {
    // this.context.router.history.push("/login");
    withRouter(Register);
  }

  handleRegister(id, pw) {
    console.log('create click');
    return this.props.registerRequest(id, pw)
    .then( () => {
      if(this.props.status === "SUCCESS") {
        Materialize.toast('Success! Please log in. ', 2000);
        this.context.router.history.push('/login');
        //withRouter(Login);
        //browserHistory.push('/login');
        return true;
      }
      else {
        /*
          ERROR CODES:
              1: BAD USERNAME
              2: BAD PASSWORD
              3: USERNAME EXISTS
        */
        let errorMessage = [
            'Invalid Username',
            'Password is too short',
            'Username already exists'
        ];
        let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.errorCode - 1] + '</span>');
        Materialize.toast($toastContent, 2000);
        return false;
      }
    });
  };

    render() {
        return (
            <div>
                <Authentication mode={false}
                  onRegister={this.handleRegister} />
=======
import { Authentication } from 'components';
import { connect } from 'react-redux';
import { registerRequest } from 'actions/authentication';
import { browserHistory } from 'react-router';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(id, pw) {
        return this.props.registerRequest(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    Materialize.toast('Success! Please log in', 2000);
                    browserHistory.push('/login');
                    return true;
                } else {
                    /*
                       ERROR CODES:
                           1: BAD USERNAME
                           2: BAD PASSWORD
                           3: USERNAME EXISTS
                   */
                   let errorMessage = [
                       'Invalid Username',
                       'Password is too short',
                       'Username already exists'
                   ];

                   let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.errorCode - 1] + '</span>');
                    Materialize.toast($toastContent, 2000);
                    return false;
                }
            }
        );
    }
    render() {
        return (
            <div>
                <Authentication mode={false} onRegister={this.handleRegister}/>
>>>>>>> master
            </div>
        );
    }
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
  return {
    status: state.authentication.register.status,
    errorCode: state.authentication.register.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRequest: (id, pw) => {
      return dispatch(registerRequest(id, pw));
    }
  };
=======
    return {
        status: state.authentication.register.status,
        errorCode: state.authentication.register.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerRequest: (id, pw) => {
            return dispatch(registerRequest(id,pw));
        }
    };
>>>>>>> master
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
