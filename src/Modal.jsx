export default function Modal({ artist, onClose }) {

  if (!artist) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-banner">
          <img
            src={artist.bannerImage || artist.image}
            alt={`${artist.name} banner`}
          />
        </div>

        <div className="modal-body">
          <img
            className="modal-avatar"
            src={artist.image}
            alt={artist.name}
          />
          <div className="modal-info">
            <h2 className="modal-name">{artist.name}</h2>
            <span className="modal-label">AGAD$ INTERNATIONAL RECORDS</span>
          </div>
        </div>
      </div>
    </div>
  );
}