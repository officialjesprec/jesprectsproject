import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid";
import DataTable from "./components/DataTable";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <div className="bg-dark">
        <Header />
        <div className="container">
          <Hero />
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <VideoSection />
        </div>
      </div>

      <div className="bg-light-blue">
        <div className="container">
          <PlanetGrid />
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <DataTable />
        </div>
        <div className="container">
          <ContactForm />
        </div>
      </div>

      <div className="bg-dark">
        <div className="container footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
