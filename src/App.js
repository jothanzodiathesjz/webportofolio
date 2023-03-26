import Nav from "./components/Nav";
import { useEffect, useState } from "react";

import Spiner from "./components/Spiner";

import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const loadingSet = () => {
    setInterval(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    loadingSet();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="bg-[#03001C] overflow-hidden">
          <Header />
          <Banner />
          <Nav />
          <About />
          <Services />
          <Work />
          <Contact />
          {/* <div className="h-[4000px]"></div> */}
        </div>
      )}

      {/* 
      <Hero>
        
      </Hero> */}
    </>
  );
}

export default App;
