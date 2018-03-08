import {
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function searchRequest(keyword) {
<<<<<<< HEAD
  //console.log('memoPostRequest');
  return (dispatch) => {
      // inform MEMO POST API is starting
      dispatch(search());

      return axios.get('/api/account/search/' + keyword)
      .then((response) => {
          dispatch(searchSuccess(response.data));
      }).catch((error) => {
          dispatch(searchFailure());
      });
  };
=======
    return (dispatch) => {

        dispatch(search());

        return axios.get('/api/account/search/' + keyword)
        .then((response) => {
            dispatch(searchSuccess(response.data));
        }).catch((error) => {
            dispatch(searchFailure());
        });
    };
>>>>>>> master
}

export function search() {
    return {
        type: SEARCH
    };
}

export function searchSuccess(usernames) {
<<<<<<< HEAD
=======
    console.log(usernames);
>>>>>>> master
    return {
        type: SEARCH_SUCCESS,
        usernames
    };
}

<<<<<<< HEAD
export function searchFailure(error) {
    return {
        type: SEARCH_FAILURE,
        error
=======
export function searchFailure() {
    return {
        type: SEARCH_FAILURE
>>>>>>> master
    };
}
