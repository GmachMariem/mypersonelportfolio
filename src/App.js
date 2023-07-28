import "./App.css";
import Header from "./components/header/Header";
import About from "./components/section/about/about";
import Contact from "./components/section/contact/Contact";
import Footer from "./components/section/footer/Footer";
import Portfolio from "./components/section/portfolio/Portfolio";
import Reviews from "./components/section/reviews/Reviews";
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
