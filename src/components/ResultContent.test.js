import React from 'react'
import TestRenderer from 'react-test-renderer'
import ResultContent from './ResultContent'

it('renders without crashing', () => {
  const snapshot = TestRenderer.create(
    <ResultContent method={'MULTIPLY'} result={0} updateMethod={jest.fn()} />
  ).toJSON()
  expect(snapshot).toMatchSnapshot()
})
