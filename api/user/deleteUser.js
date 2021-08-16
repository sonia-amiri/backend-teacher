import axios from 'axios'

export function request (userId) {
  return axios.delete('/api/v1/users/' + userId)
}

export default { request }
