import axios from 'axios'

class Params {
  pageNum = 1;
  perPage = 10;
  subjectId = null;
  creatorId = null;
  keyword = null;
  typeId = null;
}

export const initParams = function () {
  return new Params()
}

export function request (params) {
  return axios.get('/api/v1/teacher/questions', {
    params: params
  })
}

export default { initParams, request }
