import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQty, decreaseQty } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  let total = 0
  cartItems.forEach((item) => {
    total = total + item.price * item.quantity
  })

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <Link to="/" className="text-teal-600 underline mt-4 inline-block">
          Go back to shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />

          <p className="w-1/3 text-sm">{item.title}</p>

          <p className="font-bold">${item.price}</p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(decreaseQty(item.id))}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch(increaseQty(item.id))}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-8 flex justify-between items-center">
        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
        <Link
          to="/confirmation"
          className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700"
        >
          Checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart