import axios from 'axios'

class Params {
  name
}

export const initParams = function () {
  return new Params()
}

export function request (data) {
  return axios.post('/api/v1/teacher/subjects', data)
}

export default { initParams, request }
