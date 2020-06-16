const INIT = { isSignedIn: false, token: undefined, user: undefined };

export default (state = INIT, action) => ({
  LOGIN_FULFILLED: { ...state, isSignedIn: true, user: action.payload && action.payload.data },
  LOGOUT: { ...state, isSignedIn: false }
}[action.type] || state);
