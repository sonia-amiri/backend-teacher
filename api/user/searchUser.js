import axios from 'axios'

class Params {
  pageNum = 1;
  perPage = 20;
  name = '';
  roleId = 0
}

export const initParams = function () {
  return new Params()
}

export function request (params) {
  return axios.get('/api/v1/users', {
    params: params
  })
}

export default { initParams, request }
