import React from 'react'

const InputContent = ({ label, value, setValue, calculate }) => {
  const updateValue = ({ target }) => {
    const { value } = target
    setValue(parseInt(value, 10))
    calculate()
  }

  return (
    <div>
      {label}:
      <input type='number' value={value} onChange={updateValue} />
    </div>
  )
}

export default InputContent
