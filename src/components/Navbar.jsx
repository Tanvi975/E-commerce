import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-amber-800 text-white">
      <h3 className="text-lg font-bold">MyStore</h3>
      <div className="flex gap-5">
        <Link to="/" className="text-white hover:underline">Catalogue</Link>
        <Link to="/cart" className="text-white hover:underline">Cart</Link>
      </div>
    </nav>
  )
}

export default Navbar