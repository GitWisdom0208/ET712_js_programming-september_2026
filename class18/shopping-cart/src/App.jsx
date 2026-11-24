import './shopping.css'
import { useMemo, useState } from 'react' 

const products = [
  { id: 1, name: 'Wireless Headphones', category: 'Audio', price: 79.99, emoji: '🎧' },
  { id: 2, name: 'Smart Watch', category: 'Wearables', price: 129.99, emoji: '⌚' },
  { id: 3, name: 'Portable Speaker', category: 'Audio', price: 49.99, emoji: '🔊' },
  { id: 4, name: 'USB-C Charger', category: 'Accessories', price: 24.99, emoji: '🔌' },
]

function App() {
  const [cart, setCart] = useState([
    { ...products[0], quantity: 1 },
  ])

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const changeQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id) => {
    setCart((current) => current.filter((item) => item.id !== id))
  }

  const itemCount = useMemo(
    () => cart.reduce((count, item) => count + item.quantity, 0),
    [cart],
  )

  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  )

  return (
    <main className="shop">
      <header className="topbar">
        <div>
          <p className="eyebrow">TECH STORE</p>
          <h1>Welcome to Sage Sandiford's Tech Shop</h1>
        </div>
        <div className="cart-count" aria-label={`${itemCount} items in cart`}>
          🛒 <span>{itemCount}</span>
        </div>
      </header>

      <div className="layout">
        <section>
          <h2>Popular products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image" aria-hidden="true">{product.emoji}</div>
                <p className="category">{product.category}</p>
                <h3>{product.name}</h3>
                <div className="product-footer">
                  <strong>${product.price.toFixed(2)}</strong>
                  <button className="add-button" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="cart-panel">
          <h2>Your cart <span>({itemCount})</span></h2>

          {cart.length === 0 ? (
            <p className="empty">Your cart is empty.</p>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-emoji" aria-hidden="true">{item.emoji}</div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="quantity">
                      <button onClick={() => changeQuantity(item.id, -1)} aria-label={`Decrease ${item.name}`}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQuantity(item.id, 1)} aria-label={`Increase ${item.name}`}>+</button>
                    </div>
                  </div>
                  <button className="remove" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>×</button>
                </article>
              ))}
            </div>
          )}

          <div className="summary">
            <div><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
            <div><span>Shipping</span><strong>{subtotal > 100 ? 'Free' : '$8.00'}</strong></div>
            <div className="total">
              <span>Total</span>
              <strong>${(subtotal + (subtotal > 0 && subtotal <= 100 ? 8 : 0)).toFixed(2)}</strong>
            </div>
            <button className="checkout" disabled={cart.length === 0}>Checkout</button>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default App
