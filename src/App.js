import Hero from "./components/Hero";
import About from "./components/About";
import Tours from "./components/Tours";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";

import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )
}
export default App