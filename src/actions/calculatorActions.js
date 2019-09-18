import {
  SET_FIRST_NUMBER,
  SET_SECOND_NUMBER,
  SET_THIRD_NUMBER,
  SET_METHOD,
  CALCULATE
} from '../constants'

export const setFirstNumber = number => ({
  type: SET_FIRST_NUMBER,
  payload: { number }
})

export const setSecondNumber = number => ({
  type: SET_SECOND_NUMBER,
  payload: { number }
})

export const setThirdNumber = number => ({
  type: SET_THIRD_NUMBER,
  payload: { number }
})

export const setMethod = method => ({
  type: SET_METHOD,
  payload: { method }
})

export const calculate = () => ({
  type: CALCULATE
})
