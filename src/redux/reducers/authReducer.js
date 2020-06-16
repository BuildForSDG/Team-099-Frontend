const INIT = {
  isSignedIn: false,
  token: null,
  userID: null
};

export default (state = INIT, action) => {
  const responseData = action.payload && action.payload.data && action.payload.data.data;

  return (
    {
      LOGIN_FULFILLED: {
        ...state,
        isSignedIn: true,
        token: responseData && responseData.token,
        userID: responseData && responseData.id
      },
      LOGOUT: INIT
    }[action.type] || state
  );
};
