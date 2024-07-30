// import './App.css';
import './index.css'
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import { ThemeProvider, useTheme } from '../src/theme/ThemeContext';
import { BsStars } from "react-icons/bs";
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Socials from './pages/Socials';


// function App() {
//   return (
//     <ThemeProvider>
//       <MainApp />
//     </ThemeProvider>
//   );
// }

// const MainApp = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
    // <div className={theme}>
    //   <button onClick={toggleTheme} className="theme-toggle">
    //     <BsStars />
    //   </button>
    //   <Navbar />
    //   <Hero />
    //   <Projects />
    //   <Contact />
    // </div>
//   );
// };

// export default App;





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
        <BsStars />
      </button>
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/projects',
        element: <ProjectsPage/>
      },
      {
        path: '/socials',
        element: <Socials/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// export default App;