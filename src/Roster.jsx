import RosterCard from "./RosterCard";
export default function Roster({ Artists }) {
  return (
    <div className="roster-grid">
      {Artists.map((Artist) => {
        return <RosterCard image={Artist.image} name={Artist.name} key={Artist.id} />;
      })}
    </div>
  );
}
