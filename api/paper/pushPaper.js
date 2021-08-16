import axios from 'axios'

export function request (data) {
  return axios.post('/api/v1/student/exam', data)
}

export default { request }
