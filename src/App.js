import React from 'react'
import { connect } from 'react-redux'

import {
  getFirstNumber,
  getSecondNumber,
  getThirdNumber,
  getMethod,
  getResult
} from './selectors'
import { SUM, MULTIPLY } from './constants'
import { Box } from './components'

const InputContent = ({ label, value }) => (
  <div>
    {label}:
    <input type='number' value={value} />
  </div>
)

const App = ({ firstNumber, secondNumber, thirdNumber, method, result }) => (
  <div className='container'>
    <Box className={'blue'}>
      <InputContent label='Value 1' value={firstNumber} />
    </Box>
    <Box className={'blue'}>
      <InputContent label='Value 2' value={secondNumber} />
    </Box>
    <Box className={'blue'}>
      <InputContent label='Value 3' value={thirdNumber} />
    </Box>
    <Box className={'pink'}>
      <div>
        <input type='radio' checked={method === SUM} /> Sum
        <br />
        <input type='radio' checked={method === MULTIPLY} /> Multiply
        <br />
        <br />
        {`Result: ${result}`}
      </div>
    </Box>
  </div>
)

const mapStateToProps = state => ({
  firstNumber: getFirstNumber(state),
  secondNumber: getSecondNumber(state),
  thirdNumber: getThirdNumber(state),
  result: getResult(state),
  method: getMethod(state)
})

export default connect(
  mapStateToProps,
  null
)(App)
