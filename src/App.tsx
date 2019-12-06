import React from 'react'
import logo from './logo.svg'
import './App.css'

import TodoService from './components/services/TodoService'

const App = () => {
  const service = TodoService()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {service.status === 'loading' && <div>Loading...</div>}
        {service.status === 'loaded' && <div>{service.payload.message}</div>}
        {service.status === 'error' && (
          <div>Error, the backend moved to the dark side.</div>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App