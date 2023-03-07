import { useState } from 'react'
import Rating from './components/Rating/Rating'
import Thanks from './components/Thanks/Thanks'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [submit, setSubmit] = useState(false)
  const [score, setScore] = useState()

  return (
    <div className="App">
      <div>
        { !submit ? <Rating submit={setSubmit} score={setScore}/> : <Thanks score={score}/> }
      </div>
    </div>
  )
}

export default App
