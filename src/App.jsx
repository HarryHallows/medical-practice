import './app.scss';
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Values from './components/values/Values.jsx';
import Services from './components/services/Services.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Contact from './components/contact/Contact.jsx';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        {/*Webpage sections*/}
        <Hero/>
        <Values/>
        <Services/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
