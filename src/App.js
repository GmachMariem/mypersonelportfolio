import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Reviews from "./components/reviews/Reviews";
function App() {
  return (
    <div className="App">
    <Header />
    <About />
    <Portfolio />
    <Reviews />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
