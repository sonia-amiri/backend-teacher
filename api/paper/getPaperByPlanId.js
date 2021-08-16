import axios from 'axios'

export function request (planId) {
  return axios.get('/api/v1/student/plans/' + planId + '/paper')
}

export default { request }
