import axios from 'axios'

class Params {
  keyword= '';
  myCreated= true;
  subjectId= null
}

export const initParams = function () {
  return new Params()
}

export function request (params) {
  return axios.get('/api/v1/teacher/paper', {
    params: params
  })
}

export default { initParams, request }
