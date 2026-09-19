import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
