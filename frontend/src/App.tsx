import AboutMe from "./components/Layout/About";
import ContactForm from "./components/Layout/ContactForm";
import ExperienceTab from "./components/Layout/Experience";
import Skills from "./components/Layout/Skills";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Skills />
      <ExperienceTab />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
