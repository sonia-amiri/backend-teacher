import axios from 'axios'

export function request (id) {
  return axios.delete('/api/v1/teacher/questions/' + id)
}

export default { request }
