import api from '../../api/api.js';

export const login = (loginData) => ({
  type: 'LOGIN',
  payload: api.post('/auth', loginData)
});

export const logout = () => ({
  type: 'LOGOUT'
});
