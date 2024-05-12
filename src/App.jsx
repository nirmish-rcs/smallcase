import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Category from "./components/Category/Category";
import Expertise from "./components/Expertise/Expertise";
import Tips from "./components/Tips/Tips";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Category />
      <Value />
      <Contact />
      <Expertise />
      <Tips />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
