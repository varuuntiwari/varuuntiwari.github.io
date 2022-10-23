import './App.css';
import './style.css';
import { NavBar } from './NavBar';
import { About } from './about/About'
import { Intro } from './intro/Intro'

function App() {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <Intro />
      <About />
    </div>
  );
}

export default App;