import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects"; 
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
      <div className="bg-gradient-to-br from-zinc-900 via-gray-800 to-purple-950 h-screen">
        <Navbar/>
        <Home />
      </div>
      <div className="bg-gradient-to-tr from-zinc-900 via-gray-800 to-purple-950 h-screen">
        <About />
      </div>

      <div className="bg-gradient-to-br from-zinc-900 via-gray-800 to-purple-950 h-screen">
        <Skills />
      </div>
      <div className="bg-gradient-to-tr from-zinc-900 via-gray-800 to-purple-950 h-screen">
        <Projects />
      </div>
      <div className="bg-gradient-to-br from-zinc-900 via-gray-800 to-purple-950 h-screen">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
