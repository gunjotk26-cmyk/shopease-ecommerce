import React, { useState } from 'react';
import { Routes, Route, NavLink, Link, useNavigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from './cartSlice';
import './style.css';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 2499,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 1799,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
  },
  {
    id: 4,
    name: 'Backpack',
    price: 999,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
  },
  {
    id: 5,
    name: 'Sunglasses',
    price: 799,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
  },
  {
    id: 6,
    name: 'Coffee Mug',
    price: 299,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400',
  },
  {
    id: 7,
    name: 'Desk Lamp',
    price: 899,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
  },
  {
    id: 8,
    name: 'Camera',
    price: 4999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
  },
];

function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        ShopEase
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink className="cart-link" to="/cart">
          Cart ({totalItems})
        </NavLink>
      </div>
    </nav>
  );
}

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      name: 'Electronics',
      subtitle: 'Smart tech for everyday life',
      icon: '🎧',
      color: 'category-lavender',
    },
    {
      name: 'Fashion',
      subtitle: 'Find your everyday style',
      icon: '👟',
      color: 'category-peach',
    },
    {
      name: 'Lifestyle',
      subtitle: 'Little things, better living',
      icon: '🎒',
      color: 'category-blue',
    },
  ];

  return (
    <main className="home-page">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-content">
          <span className="hero-badge">
            ✨ YOUR EVERYDAY SHOPPING DESTINATION
          </span>

          <h1>
            Good finds.
            <br />
            <span>Better everyday.</span>
          </h1>

          <p>
            Discover products you'll love, from everyday essentials to little
            upgrades that make life better.
          </p>

          <div className="hero-actions">
            <button
              className="home-primary-btn"
              onClick={() => navigate('/products')}
            >
              Explore the collection <span>→</span>
            </button>

            <button
              className="home-secondary-btn"
              onClick={() => navigate('/about')}
            >
              Discover ShopEase
            </button>
          </div>

          <div className="hero-trust">
            <span>✓ Curated finds</span>
            <span>✓ Easy shopping</span>
            <span>✓ One simple cart</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="hero-product product-headphones">
            <span>🎧</span>
            <div>
              <strong>Everyday tech</strong>
              <small>Made for your routine</small>
            </div>
          </div>

          <div className="hero-product product-fashion">
            <span>👟</span>
            <div>
              <strong>Everyday style</strong>
              <small>Find your favourite</small>
            </div>
          </div>

          <div className="hero-center">
            <span>✦</span>
            <strong>Shop</strong>
            <strong>what you love.</strong>
          </div>

          <div className="hero-floating-star">✦</div>
          <div className="hero-floating-dot"></div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="home-benefits">
        <div>
          <span>✦</span>
          <p>
            <strong>Curated collection</strong>
            <br />
            Thoughtful everyday picks
          </p>
        </div>

        <div>
          <span>♡</span>
          <p>
            <strong>Easy to explore</strong>
            <br />
            Find what you need faster
          </p>
        </div>

        <div>
          <span>🛍</span>
          <p>
            <strong>Simple checkout</strong>
            <br />
            Your cart, all in one place
          </p>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">MADE FOR YOUR EVERYDAY</span>
            <h2>Explore by category</h2>
            <p>A little something for every part of your life.</p>
          </div>

          <button
            className="text-link-btn"
            onClick={() => navigate('/products')}
          >
            View all products →
          </button>
        </div>

        <div className="home-categories">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`category-card ${category.color}`}
              onClick={() => navigate('/products')}
            >
              <span className="category-icon">{category.icon}</span>

              <span className="category-info">
                <strong>{category.name}</strong>
                <small>{category.subtitle}</small>
              </span>

              <span className="category-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="home-section featured-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">HANDPICKED FOR YOU</span>
            <h2>Today's favourites</h2>
            <p>Discover some of the products worth checking out.</p>
          </div>

          <button
            className="text-link-btn"
            onClick={() => navigate('/products')}
          >
            Shop all →
          </button>
        </div>

        <div className="home-featured-grid">
          {featuredProducts.map((product) => (
            <article className="home-product-card" key={product.id}>
              <button
                className="home-product-image"
                onClick={() => navigate('/products')}
                aria-label={`View ${product.name}`}
              >
                <img src={product.image} alt={product.name} />
                <span className="product-discover">Discover ↗</span>
              </button>

              <div className="home-product-details">
                <span className="product-category">{product.category}</span>

                <h3>{product.name}</h3>

                <div className="home-product-bottom">
                  <strong>
                    ₹{Number(product.price).toLocaleString('en-IN')}
                  </strong>

                  <button
                    className="quick-add-btn"
                    onClick={() => {
                      dispatch(addToCart(product));
                      window.alert(`${product.name} added to your cart!`);
                    }}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="home-promo">
        <div className="promo-decoration">✦</div>

        <div>
          <span className="section-eyebrow">YOUR NEXT FAVOURITE IS HERE</span>
          <h2>Make room for something good.</h2>
          <p>
            Explore our collection and find a little something just for you.
          </p>
        </div>

        <button className="promo-btn" onClick={() => navigate('/products')}>
          Start exploring →
        </button>
      </section>
    </main>
  );
}

function Products() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || product.category === category)
  );

  function handleAdd(product) {
    dispatch(addToCart(product));
    alert(product.name + ' added to cart!');
  }

  return (
    <main className="container">
      <h1>Our Products</h1>
      <p className="muted">Find something you will love.</p>

      <div className="filters">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span className="category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
              <button onClick={() => handleAdd(product)}>Add to Cart</button>
            </div>
          </article>
        ))}
        {filteredProducts.length === 0 && (
          <p>No products found. Try another search.</p>
        )}
      </div>
    </main>
  );
}

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="container">
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🛒</h2>
          <p>Add some products to get started.</p>
          <Link className="button" to="/products">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString('en-IN')} each</p>
                <div className="quantity">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>
                </div>
              </div>
              <div className="cart-end">
                <strong>
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </strong>
                <button
                  className="remove"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <p>
              Total items: <strong>{count}</strong>
            </p>
            <h2>Total: ₹{total.toLocaleString('en-IN')}</h2>
            <button onClick={() => navigate('/checkout')}>
              Proceed to Checkout →
            </button>
            <button
              className="clear-button"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </main>
  );
}

function About() {
  return (
    <main className="container about">
      <h1>About ShopEase</h1>
      <p>
        ShopEase is a demo online store created to make everyday shopping simple
        and convenient.
      </p>
      <p>
        Browse products, manage your cart, update quantities, and review your
        order total.
      </p>
      <Link className="button" to="/">
        Back to Home
      </Link>
    </main>
  );
}

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [payment, setPayment] = useState('UPI');
  const [ordered, setOrdered] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function placeOrder(e) {
    e.preventDefault();
    if (items.length === 0) {
      alert('Your cart is empty!');
      navigate('/products');
      return;
    }
    setOrdered(true);
    dispatch(clearCart());
  }

  if (ordered) {
    return (
      <main className="container confirmation">
        <h1>🎉 Order Confirmed!</h1>
        <p>Thank you, {name}! Your demo order has been placed successfully.</p>
        <p>Payment method: {payment}</p>
        <Link className="button" to="/products">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="container checkout">
      <h1>Checkout</h1>
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link className="button" to="/products">
            Browse Products
          </Link>
        </div>
      ) : (
        <form onSubmit={placeOrder}>
          <label>
            Full Name
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
          <label>
            Payment Method
            <select
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option>UPI</option>
              <option>Cash on Delivery</option>
              <option>Credit/Debit Card (Demo)</option>
            </select>
          </label>
          <h2>Order Total: ₹{total.toLocaleString('en-IN')}</h2>
          <button type="submit">Place Demo Order</button>
          <p className="muted">
            This is a demonstration checkout. No real payment is taken.
          </p>
        </form>
      )}
    </main>
  );
}

function NotFound() {
  return (
    <main className="container not-found">
      <h1>404 — Page Not Found</h1>
      <p>Sorry, this page does not exist.</p>
      <Link className="button" to="/">
        Go Home
      </Link>
    </main>
  );
}

function AppContent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>© 2026 ShopEase · Demo e-commerce project</footer>
    </>
  );
}

export default function App() {
  return <AppContent />;
}
