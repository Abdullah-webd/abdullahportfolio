import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary w-full overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="flex flex-col items-center justify-center">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0 flex-2">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
        <Footer />
        <div className='fixed bottom-30 right-0'>
          <Resume/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
