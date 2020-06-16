const INIT = {
  all: [],
  selected: {}
};

export default (state = INIT, action) => {
  const responseData = action.payload && action.payload.data && action.payload.data.data;

  return (
    {
      USER_ONE_GET_FULFILLED: {
        ...state,
        selected: responseData
      },
      LOGOUT: INIT
    }[action.type] || state
  );
};
