import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <main className='main'>
      <Info />
      {/* <About />
      <Interests /> */}
      <Footer />
    </main>
  );
}

export default App;
