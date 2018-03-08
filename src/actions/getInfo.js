import {
    GETINFO,
    GETINFO_SUCCESS,
    GETINFO_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function getInfoRequest(keyword) {
  //console.log('memoPostRequest');
  return (dispatch) => {
      // inform MEMO POST API is starting
      dispatch(getInfo());

      return axios.get('/api/empName/')
      .then((response) => {
          dispatch(getInfoSuccess(response.data));
      }).catch((error) => {
          dispatch(getInfoFailure(error));
      });
  };
}

export function getInfo() {
    return {
        type: GETINFO
    };
}

export function getInfoSuccess(usernames) {
    return {
        type: GETINFO_SUCCESS,
        usernames
    };
}

export function getInfoFailure(error) {
    return {
        type: GETINFO_FAILURE,
        error
    };
}
