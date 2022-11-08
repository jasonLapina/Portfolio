import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
