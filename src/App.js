import Navbar from "./components/NavBar/Navbar.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Works from "./components/Works/Works.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
