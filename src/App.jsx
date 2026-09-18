import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Artists from "./Artists";
import LogoLoop from "./components/Animations/LogoLoop/LogoLoop";
import Divider from "./Divider";
import Roster from "./Roster";
import Modal from "./Modal";
import Footer from "./Footer";

function App() {
  const [selectedArtist, setSelectedArtist] = useState(null)
  const artistItems = Artists.map((artist) => ({
    node: (
      <span key={artist.id} className="roster-name">
        {artist.name}
      </span>
    ),
  }));
  function onClose(){
    setSelectedArtist(null)
  }
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
      <Roster Artists={Artists} setSelectedArtist={setSelectedArtist}/>
<Modal artist={selectedArtist} onClose={onClose}/>
<Footer/>
    </div>
  );
}

export default App;
