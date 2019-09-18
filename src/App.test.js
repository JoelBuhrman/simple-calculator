import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from './App'

const storeData = {
  firstNumber: 0,
  secondNumber: 0,
  thirdNumber: 0,
  result: 0,
  method: 'SUM'
}
const mockStore = configureStore([])

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={mockStore(storeData)}>
      <App />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
