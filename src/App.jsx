// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Projects from './components/Projects'
// import Contact from './components/Contact'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar/>
//       <Hero/>
//       <Projects/>
//       <Contact/>
//     </>
//   )
// }

// export default App



import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider, useTheme } from '../src/theme/ThemeContext';
import { MdDarkMode } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";


function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

const MainApp = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <button onClick={toggleTheme} className="theme-toggle">
        <AiFillMoon />
      </button>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;