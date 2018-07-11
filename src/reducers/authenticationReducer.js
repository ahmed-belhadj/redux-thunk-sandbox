import {
  SET_USER_STATUS,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE
} from "../actions/authenticationActions";

const initialState = {
  isLoggedIn: false,
  requestPending: false,
  loginRequestFailure: false,
  logOutRequestFailure: false
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_STATUS:
      return Object.assign({}, state, { requestPending: true });
    case LOGIN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        requestPending: false,
        isLoggedIn: true,
        isLoggedOut: false,
        loginRequestSuccess: true
      });
    case LOGIN_REQUEST_FAILURE:
      return Object.assign({}, state, {
        requestPending: false,
        isLoggedIn: false,
        isLoggedOut: true,
        loginRequestFailure: true
      });
    case LOGOUT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        requestPending: false,
        isLoggedIn: false,
        isLoggedOut: true,
        logOutRequestSuccess: true
      });

    default:
      return state;
  }
};

export default authenticationReducer;
