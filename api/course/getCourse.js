import axios from 'axios'

class Params {
  myChosen=false;
  myCreated=false;
  myTaught=false;
  pageNum=1;
  perPage=10;
}

export const initParams = function () {
  return new Params()
}

export function request (params) {
  return axios.get('api/v1/courses', { params: params })
}

export default {
  initParams, request
}
