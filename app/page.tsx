import Header from "./components/Header/Header";
import Highlight from "./components/Highlight/Highlight";
import Repos from "./components/Repos/Repos";
import Skills from "./components/Skills/Skills";

import './app.css';

export default function Home() {

  return (
    <main className="snap-container overflow-y-scroll scroll-smooth h-screen">
      <div className="snap-child md:h-auto scroll-smooth lg:h-screen">
        <Header/>
      </div>
      <div id="skills-section" className="snap-child scroll-smooth md:h-auto lg:h-screen">
        <Skills/>
      </div>
      <div className="snap-child scroll-smooth md:h-auto lg:h-screen">
        <Highlight/>
      </div>
      <div className="snap-child scroll-smooth md:h-auto lg:h-screen">
        <Repos/>
      </div>
    </main>
  );
}
