import "./styles/global.scss";

import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Countdown from "./components/CountdownPanel";
import Despre from "./components/Despre";
import Program from "./components/Program";
import Locatie from "./components/Locatie";
import Galerie from "./components/Galerie";
import DespreOSFIIR from "./components/DespreOSFIIR";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Intro />
      <Nav />
      <Hero />
      <Countdown />
      <Despre />
      <Program />
      <Locatie />
      <Galerie />
      <DespreOSFIIR />
      <Footer />
    </div>
  );
}
