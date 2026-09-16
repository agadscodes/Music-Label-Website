export default function RosterCard(props) {
  return (
    <div className="roster-card">
      <img src={props.image} alt="" />
      <p className="roster-card__name">{props.name}</p>
    </div>
  );
}
