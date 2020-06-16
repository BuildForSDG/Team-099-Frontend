import api from '../../../api/api.js';

export default (payload) => ({
  type: 'LOGIN',
  payload: api.post('/auth/login', payload)
});
