import { useState } from 'react'

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>About Me</h1>
          <p>
            This is a test about me page!
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
    </>
  )
}

export default About
