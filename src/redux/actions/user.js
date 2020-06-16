import api from '../../api/api.js';

export default (userID) => ({
  type: 'USER_ONE_GET',
  payload: api.get(`/user/${userID}`)
});
