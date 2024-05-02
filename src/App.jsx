import './App.css';
import Header from './components/header/header';
import Hero from './pages/hero';
import About from './pages/about';
import Footer from './components/footer/footer';
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
