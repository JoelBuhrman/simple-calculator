import React from 'react'

const InputContent = ({ label, value, setValue, calculate }) => {
  const updateValue = ({ target }) => {
    const { value } = target

    setValue(Number(value))
    calculate()
  }

  return (
    <div>
      {label}:
      <input type='number' value={value.toString()} onChange={updateValue} />
    </div>
  )
}

export default InputContent
