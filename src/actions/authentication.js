import {
<<<<<<< HEAD
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_GET_STATUS,
  AUTH_GET_STATUS_FAILURE,
  AUTH_GET_STATUS_SUCCESS,
  AUTH_LOGOUT
} from './ActionTypes';
import axios from 'axios';

// action creator

// 또 다른 함수를 리턴한다. (thunk)
// return (dispatch) --> dispatch 를 파라미터로 갖는 'thunk' 를 리턴한다.
// 나중에 dispatch(loginRequest(username, pssword)) 하면
// 미들웨어를 통해서 thunk 를 처리한다.
// thunk 내부에서 다른 action 을 dispatch 하는 모습을 보여주고 있는데..
// 얘가 왜 thunk 인거지????
export function loginRequest(username, password) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());

        // API REQUEST
        return axios.post('/api/account/signin', { username, password })
          .then((response) => {
              // SUCCEED
              console.log(response);
              dispatch(loginSuccess(username));
          }).catch((error) => {
              // FAILED
              console.log(error);
              dispatch(loginFailure());
          });
    };
}

// login
export function login(){
  return {
    type: AUTH_LOGIN
  };
}

export function loginSuccess(username) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    username
  };
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE
  };
}

// Register
export function registerRequest(username, password) {
  return (dispatch) => {
    // inform register API is starting
    dispatch(register());

    return axios.post('/api/account/signup', {username, password})
    .then((response) => {
      dispatch(registerSuccess());
    }).catch((error) => {
      //Request failed with status code 500
      dispatch(registerFailure(error.response.data.code));
    })
  }
}

// 액션 객체를 반환하는 함수들
=======
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT
} from './ActionTypes';
import axios from 'axios';

/* ====== AUTH ====== */

/* LOGIN */
export function loginRequest(username, password) {
    return (dispatch) => {
            dispatch(login());

            return axios.post('/api/account/signin', { username, password })
            .then((response) => {
                dispatch(loginSuccess(username));
            }).catch((error) => {
                dispatch(loginFailure());
            });
    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        username
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

/* REGISTER */
export function registerRequest(username, password) {
    return (dispatch) => {
        // inform register API is starting
        dispatch(register());

        return axios.post('/api/account/signup', { username, password })
        .then((reponse) => {
            dispatch(registerSuccess());
        }).catch((error) => {
            dispatch(registerFailure(error.response.data.code));
        });
    };
}

>>>>>>> master
export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess() {
    return {
<<<<<<< HEAD
        type: AUTH_REGISTER_SUCCESS,
=======
        type: AUTH_REGISTER_SUCCESS
>>>>>>> master
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}

<<<<<<< HEAD
export function getStatusRequest() {
  return (dispatch) => {
      // Get Status API is starting
      dispatch(getStatus());

      return axios.get('/api/account/getInfo')
      .then((response) => {
        dispatch(getStatusSuccess(response.data.info.username));
      }).catch((error) => {
        dispatch(getStatusFailure());
      });
  };
}

export function getStatus() {
  return {
    type: AUTH_GET_STATUS
  };
}

export function getStatusSuccess(username) {
  return {
    type: AUTH_GET_STATUS_SUCCESS,
    username
  };
}

export function getStatusFailure() {
  return {
    type: AUTH_GET_STATUS_FAILURE
  };
}

export function logoutRequest() {
  return (dispatch) => {
    return axios.post('/api/account/logout')
    .then((response) => {
      dispatch(logout());
    });
  };
}

export function logout() {
  return {
    type: AUTH_LOGOUT
  }
=======
/* GET STATUS */

export function getStatusRequest() {
    return (dispatch) => {
        dispatch(getStatus());
        return axios.get('/api/account/getinfo')
        .then((response) => {
            dispatch(getStatusSuccess(response.data.info.username));
        }).catch((error) => {
            dispatch(getStatusFailure());
        });
    };
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(username) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        username
    };
}

export function getStatusFailure() {
    return {
        type: AUTH_GET_STATUS_FAILURE
    };
}


/* LOGOUT */
export function logoutRequest() {
    return (dispatch) => {
        return axios.post('/api/account/logout')
        .then((response) => {
            dispatch(logout());
        });
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    };
>>>>>>> master
}
