import axios from 'axios'

export function request (data) {
  return axios.post('/api/v1/teacher/records', data)
}

export default { request }
