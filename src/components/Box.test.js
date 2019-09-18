import React from 'react'
import TestRenderer from 'react-test-renderer'
import Box from './Box'

it('renders without crashing', () => {
  const snapshot = TestRenderer.create(<Box />).toJSON()
  expect(snapshot).toMatchSnapshot()
})
