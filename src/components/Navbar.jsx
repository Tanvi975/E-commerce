import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px',
      backgroundColor: 'brown',
      color: 'white'
    }}>
      <h3>MyStore</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white' }}>Catalogue</Link>
        <Link to="/cart" style={{ color: 'white' }}>Cart</Link>
      </div>
    </nav>
  )
}

export default Navbar