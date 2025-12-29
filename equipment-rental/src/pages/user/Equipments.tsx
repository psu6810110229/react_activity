import { Link } from 'react-router-dom';

export default function Equipments() {
  return (
    <div>
      <h1>Equipments List</h1>
      <p>All available equipments will be displayed here</p>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Sample Equipment Links:</h3>
        <ul>
          <li>
            <Link to="/equipments/1">Equipment 1</Link>
          </li>
          <li>
            <Link to="/equipments/2">Equipment 2</Link>
          </li>
          <li>
            <Link to="/equipments/3">Equipment 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}