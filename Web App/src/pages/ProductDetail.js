import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Sample product data (in a real app, this would come from props or API)
  const product = {
    id: 1,
    name: 'Premium Leather Seat Covers',
    price: 1299,
    originalPrice: 1599,
    brand: 'CarLux',
    rating: 4.8,
    reviews: 245,
    image: 'https://via.placeholder.com/600x600?text=Seat+Covers',
    description: 'Experience ultimate comfort with our premium leather seat covers. Crafted from genuine leather with ergonomic design, these seat covers provide superior durability and style. Perfect for any car interior, offering excellent protection for your original seats while maintaining a luxurious aesthetic.',
    features: [
      '100% Genuine Leather',
      'Ergonomic Design',
      'Easy Installation',
      '5-Year Warranty',
      'UV Protection',
      'Water Resistant'
    ],
    inStock: true,
    availability: 'In Stock (12+ available)',
    reviews_data: [
      { id: 1, author: 'John D.', rating: 5, comment: 'Excellent quality! The leather feels premium and the fit is perfect. Highly recommend!', date: '2 days ago' },
      { id: 2, author: 'Sarah M.', rating: 5, comment: 'Installation was easy and the product looks amazing. Worth every penny!', date: '1 week ago' },
      { id: 3, author: 'Mike T.', rating: 4, comment: 'Great product but took a while to break in. Very satisfied overall.', date: '2 weeks ago' },
      { id: 4, author: 'Emma L.', rating: 5, comment: 'Beautiful design and very comfortable. My car looks premium now.', date: '3 weeks ago' },
      { id: 5, author: 'Chris R.', rating: 4, comment: 'Good value for money. Exactly as described. Happy customer.', date: '1 month ago' }
    ]
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${quantity > 1 ? 'items' : 'item'} to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${quantity} ${quantity > 1 ? 'items' : 'item'}...`);
  };

  const RatingTyre = ({ filled }) => (
    <span style={{ fontSize: '20px', marginRight: '4px' }}>
      {filled ? '🛞' : '○'}
    </span>
  );

  const RatingDisplay = ({ rating }) => {
    const fullTyres = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex' }}>
          {[...Array(5)].map((_, i) => (
            <RatingTyre key={i} filled={i < fullTyres || (i === fullTyres && hasHalf)} />
          ))}
        </div>
        <span style={{ fontSize: '14px', color: '#666' }}>
          {rating} out of 5
        </span>
      </div>
    );
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: 'calc(100vh - 100px)', padding: isMobile ? '20px' : '40px' }}>
      <button
        onClick={() => navigate('/shop')}
        style={{
          marginBottom: '20px',
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
        ← Back to Shop
      </button>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: isMobile ? '20px' : '40px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '30px' : '50px'
        }}>
          {/* Left - Product Image */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              position: 'relative'
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  border: '1px solid #eee'
                }}
              />
              {product.originalPrice > product.price && (
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: '#FF6B6B',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </div>
              )}
            </div>
          </div>

          {/* Right - Product Details */}
          <div>
            <p style={{ margin: '0 0 10px 0', color: '#999', fontSize: '14px' }}>
              Brand: {product.brand}
            </p>

            <h1 style={{
              margin: '0 0 15px 0',
              fontSize: isMobile ? '24px' : '32px',
              color: '#333'
            }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ marginBottom: '20px' }}>
              <RatingDisplay rating={product.rating} />
              <p style={{ margin: '8px 0 0 0', color: '#666', fontSize: '13px' }}>
                Based on {product.reviews} customer reviews
              </p>
            </div>

            {/* Price Section */}
            <div style={{
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '25px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff' }}>
                  R {product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <span style={{
                    fontSize: '18px',
                    color: '#999',
                    textDecoration: 'line-through'
                  }}>
                    R {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <p style={{ margin: '10px 0', color: '#28a745', fontWeight: 'bold', fontSize: '14px' }}>
                ✓ {product.availability}
              </p>
            </div>

            {/* Quantity Selector */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '10px',
                fontWeight: 'bold',
                color: '#333',
                fontSize: '14px'
              }}>
                Quantity
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: 'fit-content'
              }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    backgroundColor: '#f5f5f5',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  style={{
                    width: '60px',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontSize: '16px'
                  }}
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    backgroundColor: '#f5f5f5',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              marginBottom: '30px'
            }}>
              <button
                onClick={handleAddToCart}
                style={{
                  padding: '15px 20px',
                  backgroundColor: '#f0f0f0',
                  color: '#333',
                  border: '2px solid #007bff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e8e8e8';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f0f0f0';
                }}
              >
                🛒 Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                style={{
                  padding: '15px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#0056b3';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#007bff';
                }}
              >
                ⚡ Buy Now
              </button>
            </div>

            {/* Features */}
            <div style={{
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '25px'
            }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>
                Key Features
              </h3>
              <ul style={{
                margin: 0,
                paddingLeft: '20px',
                listStyle: 'none'
              }}>
                {product.features.map((feature, i) => (
                  <li key={i} style={{
                    marginBottom: '8px',
                    color: '#666',
                    fontSize: '14px',
                    position: 'relative',
                    paddingLeft: '20px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#28a745'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>
                Description
              </h3>
              <p style={{
                margin: 0,
                color: '#666',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div style={{
          marginTop: '50px',
          paddingTop: '30px',
          borderTop: '2px solid #eee'
        }}>
          <h2 style={{ margin: '0 0 30px 0', fontSize: '24px', color: '#333' }}>
            Customer Reviews & Comments
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '20px'
          }}>
            {product.reviews_data.map(review => (
              <div key={review.id} style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #eee'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#333' }}>
                      {review.author}
                    </h4>
                    <p style={{ margin: 0, color: '#999', fontSize: '12px' }}>
                      {review.date}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ fontSize: '18px' }}>
                        {i < review.rating ? '🛞' : '○'}
                      </span>
                    ))}
                  </div>
                </div>

                <p style={{
                  margin: 0,
                  color: '#666',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  {review.comment}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button
              style={{
                padding: '12px 24px',
                backgroundColor: '#f0f0f0',
                border: '2px solid #333',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px',
                color: '#333'
              }}
            >
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
