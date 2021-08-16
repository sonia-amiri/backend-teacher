import axios from 'axios'

export function request (id) {
  return axios.get('/api/v1/teacher/questions/' + id)
}

export default { request }
