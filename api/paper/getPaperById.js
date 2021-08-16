import axios from 'axios'

export function request (id) {
  return axios.get('/api/v1/teacher/papers/' + id)
}

export default { request }
