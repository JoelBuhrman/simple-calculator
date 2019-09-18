import React from 'react'
import TestRenderer from 'react-test-renderer'
import InputContent from './InputContent'

it('renders without crashing', () => {
  const snapshot = TestRenderer.create(
    <InputContent
      label={'Value 1'}
      value={0}
      setValue={jest.fn()}
      calculate={jest.fn()}
    />
  ).toJSON()
  expect(snapshot).toMatchSnapshot()
})
