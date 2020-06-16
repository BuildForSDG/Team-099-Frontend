import api from '../../api/api.js';
import userOneGet from './user.js';
import store from '../store.js';

export const login = (loginData) => (dispatch) => {
  const res = dispatch({
    type: 'LOGIN',
    payload: api.post('/auth', loginData)
  });

  return res.then(() => dispatch(userOneGet(store.getState().auth.userID)));
};

export const logout = () => ({
  type: 'LOGOUT'
});
