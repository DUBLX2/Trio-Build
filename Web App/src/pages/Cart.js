import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Leather Seat Covers',
      price: 1299,
      quantity: 1,
      image: 'https://via.placeholder.com/100x100?text=Seat+Covers',
      brand: 'CarLux'
    },
    {
      id: 2,
      name: 'LED Ambient Lighting System',
      price: 899,
      quantity: 2,
      image: 'https://via.placeholder.com/100x100?text=LED+Lights',
      brand: 'AutoLED'
    },
    {
      id: 3,
      name: 'Alloy Wheel Set (20")',
      price: 5499,
      quantity: 1,
      image: 'https://via.placeholder.com/100x100?text=Alloy+Wheels',
      brand: 'WheelPro'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 150;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;

  const isMobile = window.innerWidth <= 768;

  if (cartItems.length === 0) {
    return (
      <div style={{
        backgroundColor: '#fafafa',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>🛒</div>
          <h2 style={{ fontSize: '28px', marginBottom: '10px', color: '#333' }}>
            Your cart is empty
          </h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Start shopping to add items to your cart
          </p>
          <button
            onClick={() => navigate('/shop')}
            style={{
              padding: '12px 32px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#fafafa',
      minHeight: 'calc(100vh - 100px)',
      padding: isMobile ? '20px' : '40px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/shop')}
          style={{
            marginBottom: '30px',
            padding: '8px 16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#333'
          }}
        >
          ← Continue Shopping
        </button>

        <h1 style={{ margin: '0 0 30px 0', fontSize: isMobile ? '24px' : '32px' }}>
          Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 350px',
          gap: isMobile ? '20px' : '40px'
        }}>
          {/* Cart Items */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: isMobile ? '15px' : '20px',
                    padding: isMobile ? '15px' : '20px',
                    borderBottom: index < cartItems.length - 1 ? '1px solid #eee' : 'none'
                  }}
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: isMobile ? '80px' : '100px',
                      height: isMobile ? '80px' : '100px',
                      borderRadius: '5px',
                      objectFit: 'cover',
                      cursor: 'pointer'
                    }}
                    onClick={() => navigate(`/product/${item.id}`)}
                  />

                  {/* Product Details */}
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: '0 0 5px 0', color: '#999', fontSize: '12px' }}>
                      {item.brand}
                    </p>
                    <h3
                      style={{
                        margin: '0 0 10px 0',
                        fontSize: isMobile ? '14px' : '16px',
                        color: '#333',
                        cursor: 'pointer'
                      }}
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      {item.name}
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#007bff'
                    }}>
                      R {item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity and Remove */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between'
                  }}>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: 'transparent',
                        border: '1px solid #ddd',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        color: '#dc3545',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}
                    >
                      Remove
                    </button>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '4px',
                      padding: '4px 8px'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          padding: '2px 6px',
                          border: 'none',
                          backgroundColor: 'transparent',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        −
                      </button>
                      <span style={{
                        minWidth: '30px',
                        textAlign: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          padding: '2px 6px',
                          border: 'none',
                          backgroundColor: 'transparent',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        +
                      </button>
                    </div>

                    <span style={{
                      fontWeight: 'bold',
                      fontSize: isMobile ? '14px' : '16px',
                      color: '#333'
                    }}>
                      R {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              position: isMobile ? 'relative' : 'sticky',
              top: isMobile ? 'auto' : '20px'
            }}>
              <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#333' }}>
                Order Summary
              </h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: '#666' }}>Subtotal:</span>
                <span style={{ fontWeight: 'bold' }}>R {subtotal.toLocaleString()}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: '#666' }}>Shipping:</span>
                <span style={{ fontWeight: 'bold', color: shipping === 0 ? '#28a745' : '#333' }}>
                  {shipping === 0 ? 'FREE' : `R ${shipping}`}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ color: '#666' }}>Tax (15%):</span>
                <span style={{ fontWeight: 'bold' }}>R {tax.toLocaleString()}</span>
              </div>

              {shipping === 0 && (
                <p style={{
                  margin: '0 0 15px 0',
                  padding: '10px',
                  backgroundColor: '#d4edda',
                  color: '#155724',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>
                  ✓ You qualify for free shipping!
                </p>
              )}

              <div style={{
                borderTop: '2px solid #eee',
                paddingTop: '15px',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Total:</span>
                <span style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#007bff'
                }}>
                  R {total.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                style={{
                  width: '100%',
                  padding: '15px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  marginBottom: '10px'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/shop')}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'white',
                  color: '#007bff',
                  border: '2px solid #007bff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Continue Shopping
              </button>

              <div style={{
                marginTop: '20px',
                paddingTop: '20px',
                borderTop: '1px solid #eee',
                fontSize: '12px',
                color: '#666'
              }}>
                <p style={{ margin: '0 0 8px 0' }}>
                  ✓ Secure checkout
                </p>
                <p style={{ margin: 0 }}>
                  ✓ Money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
