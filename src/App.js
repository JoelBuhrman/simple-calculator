import React from 'react'
import { Box } from './components'

const InputContent = ({ label }) => (
  <div>
    {label}:
    <input type='number' />
  </div>
)

const App = () => (
  <div className='container'>
    <Box className={'blue'}>
      <InputContent label='Value 1' />
    </Box>
    <Box className={'blue'}>
      <InputContent label='Value 2' />
    </Box>
    <Box className={'blue'}>
      <InputContent label='Value 3' />
    </Box>
    <Box className={'pink'}>
      <div>
        <input type='radio' /> Sum
        <br />
        <input type='radio' /> Multiply
        <br />
        <br />
        Result:
      </div>
    </Box>
  </div>
)

export default App
