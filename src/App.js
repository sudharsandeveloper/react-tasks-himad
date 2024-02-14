import './App.css';
import Navbar from './Components/Navbar';
import ThemeProvider from './Contexts/ThemeProvider';

function App() {

  return (
    <div className="dark">
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
