import axios from 'axios'

class Params {
  pageNum=1;
  perPage=10;
  personal=false;
  name=''
}

export const initParams = function () {
  return new Params()
}

export function request (params) {
  return axios.get('/api/v1/subjects', {
    params: params
  })
}

export default { initParams, request }
