import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Welcome!</h1>
          <p>
            Hello! My name is Grace. I'm currently working on this website. 
            It's not much, but I hope to learn a few things here and there. 
            I will be slowly adding to the website as time allows and curiosity grows. 
            Let's see what it can become!
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          You've clicked this button {count} time(s)
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="test1">
          <h2>Test 1</h2>
          <p>A test section</p>
          <ul>
            <li>
              Apple
              Banana
              Orange
            </li>
          </ul>
        </div>
        <div id="test2">
          <h2>Test 2</h2>
          <p>Another test section</p>
        </div>
      </section>

      <section id="buffer">
        <div id="spacer">
          <p>
            <a href="https://www.linkedin.com/in/gracemarrone/">LinkedIn</a> | <a href="https://github.com/VTgrace">GitHub</a> | <a href="mailto:gracee@vt.edu">Email</a>
          </p>
        </div>
      </section>
    </>
  )
}

export default App
