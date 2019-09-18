import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  setFirstNumber,
  setSecondNumber,
  setThirdNumber,
  setMethod,
  calculate
} from './actions'
import {
  getFirstNumber,
  getSecondNumber,
  getThirdNumber,
  getMethod,
  getResult
} from './selectors'
import { Box, InputContent, ResultContent } from './components'

const App = ({
  firstNumber,
  secondNumber,
  thirdNumber,
  method,
  result,
  setMethod,
  setFirstNumber,
  setSecondNumber,
  setThirdNumber,
  calculate
}) => {
  const updateMethod = method => {
    setMethod(method)
    calculate()
  }

  return (
    <div className='container'>
      <Box className={'blue'}>
        <InputContent
          label='Value 1'
          value={firstNumber}
          setValue={setFirstNumber}
          calculate={calculate}
        />
      </Box>
      <Box className={'blue'}>
        <InputContent
          label='Value 2'
          value={secondNumber}
          setValue={setSecondNumber}
          calculate={calculate}
        />
      </Box>
      <Box className={'blue'}>
        <InputContent
          label='Value 3'
          value={thirdNumber}
          setValue={setThirdNumber}
          calculate={calculate}
        />
      </Box>
      <Box className={'pink'}>
        <ResultContent
          method={method}
          result={result}
          updateMethod={updateMethod}
        />
      </Box>
    </div>
  )
}

const mapStateToProps = state => ({
  firstNumber: getFirstNumber(state),
  secondNumber: getSecondNumber(state),
  thirdNumber: getThirdNumber(state),
  result: getResult(state),
  method: getMethod(state)
})

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators(
      { setFirstNumber, setSecondNumber, setThirdNumber, setMethod, calculate },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
