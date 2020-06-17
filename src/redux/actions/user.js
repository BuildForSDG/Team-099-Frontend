import api from '../../api/api.js';

export const userPost = (userData) => ({
  type: 'USER_POST',
  payload: api.post('/user', userData)
});

export const userOneGet = (userID) => ({
  type: 'USER_ONE_GET',
  payload: api.get(`/user/${userID}`)
});
