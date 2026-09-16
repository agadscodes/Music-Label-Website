import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Artists from "./Artists";
import LogoLoop from "./components/Animations/LogoLoop/LogoLoop";
import Divider from "./Divider";
import Roster from "./Roster";

function App() {
  const artistItems = Artists.map((artist) => ({
    node: (
      <span key={artist.id} className="roster-name">
        {artist.name}
      </span>
    ),
  }));
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="ticker-bar">
        <LogoLoop
          logos={artistItems}
          speed={80}
          direction="left"
          pauseOnHover
        />
      </div>
      <Divider />
      <Roster Artists={Artists} />
    </div>
  );
}

export default App;
