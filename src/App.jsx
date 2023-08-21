import { BrowserRouter } from "react-router-dom";

import { Experience, Project, Hero, Navbar, Tech, Footer } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <Navbar />
        <Hero />
        <Experience />
        <Tech />
        <Project />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
