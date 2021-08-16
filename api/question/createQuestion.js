import axios from 'axios'

const Type = {
  choice: 1,
  multi_choice: 2,
  trueOrFalse: 3,
  shortAnswer: 5
}

export function forTypeName (id) {
  if (id === 1) return 'تک انتخاب'
  if (id === 2) return 'چند گزینه ای'
  if (id === 3) return 'قضاوت'
  if (id === 5) return 'جواب کوتاه'
}

function typeFormatter (row, col, cellVal, index) {
  return forTypeName(cellVal)
}

class Params {
  question = {
    typeId: 0,
    answer: {
      optionId: 0,
      optionIds: [
        0
      ],
      text: '',
      trueOrFalse: null
    },
    description: {
      options: [
        null
      ],
      title: ''
    }
  };

  subjectId = 0;
}

export const initParams = function () {
  return new Params()
}

export function request (data) {
  let suffix = null
  switch (data.question.typeId) {
    case 1:
      suffix = 'گزینه'
      break
    case 2:
      suffix = 'چند گزینه ای'
      break
    case 3:
      suffix = 'tf'
      break
    case 5:
      suffix = 'پاسخ'
      break
    default:
      throw Error('不支持的typeId ' + data)
  }
  return axios.post('/api/v1/teacher/questions/' + suffix, data)
}

export default { initParams, request, Type, forTypeName, typeFormatter }
