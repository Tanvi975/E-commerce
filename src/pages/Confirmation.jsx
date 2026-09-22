import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../redux/CartSlice'
import { Link } from 'react-router-dom'

function Confirmation() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  let total = 0
  cartItems.forEach((item) => {
    total = total + item.price * item.quantity
  })

  const orderId = Math.floor(Math.random() * 100000)

  const handleConfirm = () => {
    dispatch(clearCart())
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-green-600">Order Placed Successfully!</h2>
        <p className="mt-2">Thank you for shopping with us.</p>
        <Link to="/" className="text-teal-600 underline mt-4 inline-block">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
      <p className="mb-4">Order ID: #{orderId}</p>

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between border-b border-gray-200 py-3">
          <p>{item.title}</p>
          <p>{item.quantity} x ${item.price}</p>
        </div>
      ))}

      <h3 className="text-xl font-bold mt-6">Total: ${total.toFixed(2)}</h3>

      <button
        onClick={handleConfirm}
        className="bg-teal-600 text-white px-6 py-3 rounded-md mt-6 hover:bg-teal-700"
      >
        Confirm Order
      </button>
    </div>
  )
}

export default Confirmation