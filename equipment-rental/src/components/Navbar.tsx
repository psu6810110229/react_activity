import { Link } from 'react-router-dom';

interface NavbarProps {
  isAdmin: boolean;
}

export default function Navbar({ isAdmin }: NavbarProps) {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      color: 'white'
    }}>
      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
          {isAdmin ? 'Admin Panel' : 'Equipment Rental'}
        </h1>
        
        <div style={{ display: 'flex', gap: '15px', marginLeft: 'auto' }}>
          {!isAdmin ? (
            <>
              <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
                Register
              </Link>
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
                Login
              </Link>
              <Link to="/equipments" style={{ color: 'white', textDecoration: 'none' }}>
                Equipments
              </Link>
              <Link to="/my-rentals" style={{ color: 'white', textDecoration: 'none' }}>
                My Rentals
              </Link>
            </>
          ) : (
            <>
              <Link to="/admin/equipments" style={{ color: 'white', textDecoration: 'none' }}>
                Manage Equipments
              </Link>
              <Link to="/admin/rentals" style={{ color: 'white', textDecoration: 'none' }}>
                Manage Rentals
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}