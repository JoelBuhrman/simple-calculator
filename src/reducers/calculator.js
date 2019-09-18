import {
  SET_FIRST_NUMBER,
  SET_SECOND_NUMBER,
  SET_THIRD_NUMBER,
  SET_METHOD,
  CALCULATE,
  SUM,
  MULTIPLY
} from '../constants'

const defaultState = {
  firstNumber: 0,
  secondNumber: 0,
  thirdNumber: 0,
  result: 0,
  method: SUM
}

const calculator = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FIRST_NUMBER: {
      const { number } = action.payload
      return { ...state, firstNumber: number }
    }
    case SET_SECOND_NUMBER: {
      const { number } = action.payload
      return { ...state, secondNumber: number }
    }
    case SET_THIRD_NUMBER: {
      const { number } = action.payload
      return { ...state, thirdNumber: number }
    }
    case SET_METHOD: {
      const { method } = action.payload
      return { ...state, method }
    }
    case CALCULATE: {
      const { firstNumber, secondNumber, thirdNumber, method, result } = state
      let newResult = result
      switch (method) {
        case SUM:
          newResult = firstNumber + secondNumber + thirdNumber
          break
        case MULTIPLY:
          newResult = firstNumber * secondNumber * thirdNumber
          break
        default:
          break
      }
      return { ...state, result: newResult }
    }
    default:
      return state
  }
}

export default calculator
