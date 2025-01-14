import Header from './components/Header';
import Profile from './components/Profile';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Profile />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;