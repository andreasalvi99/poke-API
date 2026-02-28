export default function Card({ name }) {
  return (
    <div className="col">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}
