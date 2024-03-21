import { useState } from 'react'
import { Button } from 'antd'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avalon.ai Frontent Project</h1>
      <div className="card">
        <Button type='primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
