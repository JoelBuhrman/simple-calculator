import React from 'react'
import { SUM, MULTIPLY } from '../constants'

const ResultContent = ({ method, result, updateMethod }) => (
  <div>
    <input
      type='radio'
      checked={method === SUM}
      onClick={() => updateMethod(SUM)}
    />
    Sum
    <br />
    <input
      type='radio'
      checked={method === MULTIPLY}
      onClick={() => updateMethod(MULTIPLY)}
    />
    Multiply
    <br />
    <br />
    {`Result: ${result}`}
  </div>
)

export default ResultContent
