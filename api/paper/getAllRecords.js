import axios from 'axios'

export function request () {
  return axios.get('/api/v1/teacher/records')
}

export default { request }
