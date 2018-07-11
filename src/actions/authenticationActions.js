// isLoggedIn: false,
// loginRequestFailure: false
export const SET_USER_STATUS = "SET_USER_STATUS"; // requestPending: false,
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS"; // loginRequestSuccess: false,
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE"; // loginRequestFailure: false,
export const LOGOUT_REQUEST_SUCCESS = "LOGOUT_REQUEST_SUCCESS"; // logOutRequestSuccess: false,

export const userLogin = () => {
  // create axios promises here.
  return function(dispatch) {
    dispatch({ type: SET_USER_STATUS });
    setTimeout(() => {
      // this would be where we handle, the axios request.
      // then catch.
      dispatch({ type: LOGIN_REQUEST_SUCCESS });
      dispatch({ type: LOGIN_REQUEST_FAILURE });
    }, 2500);
    // .catch() // handle requestFailur
  };
};

export const userLogout = () => {
  return dispatch => {
    dispatch({ type: SET_USER_STATUS });
    setTimeout(() => {
      dispatch({ type: LOGOUT_REQUEST_SUCCESS });
    }, 500);
  };
};
