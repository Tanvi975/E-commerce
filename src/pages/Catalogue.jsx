import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { fetchProducts } from '..ProductApi'

function Catalogue() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <h2 className="text-center mt-10 text-xl">Loading products...</h2>
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-5">Catalogue</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 text-center bg-white shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain mb-3"
            />
            <h4 className="text-sm h-10 overflow-hidden">
              {product.title}
            </h4>
            <p className="font-bold my-2">${product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogue