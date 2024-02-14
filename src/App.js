import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ThemeContext from './Contexts/ThemeContext';
import ThemeProvider from './Contexts/ThemeProvider';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dark">
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
