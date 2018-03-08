import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    name: {
        status: 'INIT',
        error: -1
    }
};

export default function getInfo(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
        case types.GETINFO:
            return update(state, {
                name: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.GETINFO_SUCCESS:
            return update(state, {
                name: {
                    status: { $set: 'SUCCESS' },
                    usernames: { $set: action.usernames }
                }
            });
        case types.GETINFO_FAILURE:
            return update(state, {
                name: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
        default:
            return state;
    }
}
