import './App.css';
import Navbar from './Components/Navbar';
import ThemeProvider from './Contexts/ThemeProvider';
import { CartProvider } from './Contexts/CartContext';

function App() {

  return (
    <div className="">
      <ThemeProvider>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
