import RosterCard from "./RosterCard";
import AnimatedContent from "./components/Animations/AnimatedContent/AnimatedContent";
export default function Roster({ Artists, setSelectedArtist }) {
  return (
    <div className="roster-grid">
      {Artists.map((Artist, index) => {
        return (
          <AnimatedContent
            key={Artist.id}
            distance={40}
            direction="vertical"
            reverse={true}
            duration={0.5}
            delay={index * 0.08}
            animateOpacity
            scale={0.97}
            threshold={0.15}
          >
            <RosterCard
              image={Artist.image}
              name={Artist.name}
              key={Artist.id}
              onclick={() => setSelectedArtist(Artist)}
            />
            
          </AnimatedContent>
        );
      })}
    </div>
  );
}
