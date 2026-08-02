import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
    return (
        <HashRouter>
           <div className="topnav">
            <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
            </nav>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>

            <section id="bottom-links">
            <div id="spacer">
              <p>
                <a href="https://www.linkedin.com/in/gracemarrone/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
                &nbsp;| <a href="https://github.com/VTgrace" target="_blank" rel="noopener noreferrer">GitHub</a> 
                &nbsp;| <a href="mailto:gracee@vt.edu" target="_blank" rel="noopener noreferrer">Email</a>
              </p>
            </div>
          </section>
        </HashRouter>
    );
};

export default App;