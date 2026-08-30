import "./styles/global.scss";

import Intro from "./components/Intro";
import Blobs from "./components/decorative/Blobs";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Despre from "./components/Despre";
import Program from "./components/Program";
import Locatie from "./components/Locatie";
import Galerie from "./components/Galerie";
import DespreOSFIIR from "./components/DespreOSFIIR";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      {/* <Blobs /> */}
      <Intro />
      <Nav />
      <Hero />
      <Despre />
      <Program />
      <Locatie />
      <Galerie />
      <DespreOSFIIR />
      <Footer />
    </div>
  );
}
