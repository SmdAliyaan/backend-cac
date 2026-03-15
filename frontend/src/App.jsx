import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      })
    }
  )

  return (
    <>
    <h1>Chai aur code</h1>
    <p>JOKES : {jokes.length}</p>

    {
      jokes.map((joke,index) => {
        <div key={joke.id}>
          <p>{joke.content}</p>
        </div>
      })
    }
    </>
  )
}

export default App
