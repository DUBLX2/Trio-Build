import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Shop() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Interior products
  const interiorProducts = [
    { id: 1, name: 'Premium Leather Seat Covers', price: 1299, brand: 'CarLux', rating: 4.8, reviews: 245, image: 'https://via.placeholder.com/300x300?text=Seat+Covers' },
    { id: 2, name: 'Carbon Fiber Dashboard Kit', price: 2499, brand: 'CarbonMax', rating: 4.9, reviews: 187, image: 'https://via.placeholder.com/300x300?text=Dashboard' },
    { id: 3, name: 'LED Ambient Lighting System', price: 899, brand: 'AutoLED', rating: 4.7, reviews: 412, image: 'https://via.placeholder.com/300x300?text=LED+Lights' },
    { id: 4, name: 'Performance Steering Wheel', price: 1799, brand: 'ProDrive', rating: 4.6, reviews: 156, image: 'https://via.placeholder.com/300x300?text=Steering' },
    { id: 5, name: 'Custom Floor Mats Set', price: 599, brand: 'GroundStyle', rating: 4.5, reviews: 89, image: 'https://via.placeholder.com/300x300?text=Floor+Mats' },
    { id: 6, name: 'Head-Up Display Unit', price: 3299, brand: 'TechDrive', rating: 4.9, reviews: 267, image: 'https://via.placeholder.com/300x300?text=HUD' },
    { id: 7, name: 'Premium Air Filter', price: 349, brand: 'AirMax', rating: 4.4, reviews: 523, image: 'https://via.placeholder.com/300x300?text=Air+Filter' },
    { id: 8, name: 'Door Panel Trim Set', price: 749, brand: 'InteriorPro', rating: 4.6, reviews: 134, image: 'https://via.placeholder.com/300x300?text=Door+Panels' }
  ];

  // Exterior products
  const exteriorProducts = [
    { id: 1, name: 'Carbon Fiber Front Bumper', price: 3999, brand: 'AeroMax', rating: 4.9, reviews: 298, image: 'https://via.placeholder.com/300x300?text=Front+Bumper' },
    { id: 2, name: 'Lowering Spring Kit', price: 2299, brand: 'ProSuspension', rating: 4.7, reviews: 412, image: 'https://via.placeholder.com/300x300?text=Springs' },
    { id: 3, name: 'Alloy Wheel Set (20")', price: 5499, brand: 'WheelPro', rating: 4.8, reviews: 567, image: 'https://via.placeholder.com/300x300?text=Alloy+Wheels' },
    { id: 4, name: 'LED Headlight Upgrade', price: 1899, brand: 'BrightLight', rating: 4.9, reviews: 445, image: 'https://via.placeholder.com/300x300?text=Headlights' },
    { id: 5, name: 'Sporty Side Skirt Set', price: 1599, brand: 'StyleMax', rating: 4.6, reviews: 198, image: 'https://via.placeholder.com/300x300?text=Side+Skirts' },
    { id: 6, name: 'Roof Spoiler Wing', price: 2199, brand: 'AeroMax', rating: 4.7, reviews: 234, image: 'https://via.placeholder.com/300x300?text=Spoiler' },
    { id: 7, name: 'Titanium Exhaust Pipe', price: 3599, brand: 'ExhaustPro', rating: 4.8, reviews: 389, image: 'https://via.placeholder.com/300x300?text=Exhaust' },
    { id: 8, name: 'Chrome Trim Kit', price: 899, brand: 'ChromeStyle', rating: 4.5, reviews: 267, image: 'https://via.placeholder.com/300x300?text=Chrome+Trim' }
  ];

  // Products (general accessories)
  const productsItems = [
    { id: 1, name: 'Premium Car Wax (500ml)', price: 299, brand: 'ShineMax', rating: 4.7, reviews: 678, image: 'https://via.placeholder.com/300x300?text=Car+Wax' },
    { id: 2, name: 'Microfiber Cleaning Cloth Set', price: 149, brand: 'CleanPro', rating: 4.9, reviews: 892, image: 'https://via.placeholder.com/300x300?text=Cleaning+Cloth' },
    { id: 3, name: 'Car Phone Mount', price: 199, brand: 'MountTech', rating: 4.6, reviews: 1023, image: 'https://via.placeholder.com/300x300?text=Phone+Mount' },
    { id: 4, name: 'USB Car Charger (65W)', price: 249, brand: 'PowerDrive', rating: 4.8, reviews: 756, image: 'https://via.placeholder.com/300x300?text=USB+Charger' },
    { id: 5, name: 'OBD2 Diagnostic Scanner', price: 899, brand: 'DiagnoTech', rating: 4.7, reviews: 445, image: 'https://via.placeholder.com/300x300?text=Diagnostic' },
    { id: 6, name: 'Air Freshener Premium', price: 79, brand: 'AirScent', rating: 4.5, reviews: 234, image: 'https://via.placeholder.com/300x300?text=Air+Freshener' },
    { id: 7, name: 'Dash Cam 4K Pro', price: 1499, brand: 'CamPro', rating: 4.9, reviews: 612, image: 'https://via.placeholder.com/300x300?text=Dash+Cam' },
    { id: 8, name: 'Car Cover (Waterproof)', price: 599, brand: 'CoverPro', rating: 4.6, reviews: 389, image: 'https://via.placeholder.com/300x300?text=Car+Cover' }
  ];

  // Category data
  const categories = [
    { id: 'interior', name: '🏎️ Interior', color: '#FF6B6B' },
    { id: 'exterior', name: '✨ Exterior', color: '#4ECDC4' },
    { id: 'products', name: '🛠️ Products & Accessories', color: '#95E1D3' }
  ];

  // Get current products based on active category
  const getProducts = () => {
    switch (activeCategory) {
      case 'interior':
        return interiorProducts;
      case 'exterior':
        return exteriorProducts;
      case 'products':
        return productsItems;
      case 'all':
        return [...interiorProducts, ...exteriorProducts, ...productsItems];
      default:
        return interiorProducts;
    }
  };

  let products = getProducts();

  // Filter by brand
  if (selectedBrand !== 'all') {
    products = products.filter(p => p.brand === selectedBrand);
  }

  // Filter by price
  if (priceRange === 'low') {
    products = products.filter(p => p.price < 500);
  } else if (priceRange === 'mid') {
    products = products.filter(p => p.price >= 500 && p.price < 2000);
  } else if (priceRange === 'high') {
    products = products.filter(p => p.price >= 2000);
  }

  // Sort products
  if (sortBy === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    products.sort((a, b) => b.rating - a.rating);
  }

  const getAllBrands = () => {
    const allProducts = [...interiorProducts, ...exteriorProducts, ...productsItems];
    const brands = [...new Set(allProducts.map(p => p.brand))].sort();
    return brands;
  };

  const isMobile = window.innerWidth <= 768;

  // Landing page with category selection
  if (!activeCategory) {
    return (
      <div style={{
        backgroundColor: '#fafafa',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h1 style={{
              fontSize: isMobile ? '28px' : '48px',
              marginBottom: '15px',
              color: '#333'
            }}>
              Welcome to Our Shop
            </h1>
            <p style={{
              fontSize: isMobile ? '14px' : '18px',
              color: '#666',
              marginBottom: 0
            }}>
              Select a category to browse our products
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '30px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {/* All Products */}
            <div
              onClick={() => setActiveCategory('all')}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '40px 30px',
                cursor: 'pointer',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = '#007bff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛍️</div>
              <h2 style={{ margin: '0 0 10px 0', fontSize: '28px', color: '#333' }}>
                All Products
              </h2>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                Browse everything we have in stock
              </p>
            </div>

            {/* Interior */}
            <div
              onClick={() => setActiveCategory('interior')}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '40px 30px',
                cursor: 'pointer',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = '#FF6B6B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>🏎️</div>
              <h2 style={{ margin: '0 0 10px 0', fontSize: '28px', color: '#333' }}>
                Interior
              </h2>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                Seats, dashboards, lighting & more
              </p>
            </div>

            {/* Exterior */}
            <div
              onClick={() => setActiveCategory('exterior')}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '40px 30px',
                cursor: 'pointer',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = '#4ECDC4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>✨</div>
              <h2 style={{ margin: '0 0 10px 0', fontSize: '28px', color: '#333' }}>
                Exterior
              </h2>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                Bumpers, wheels, spoilers & trim
              </p>
            </div>

            {/* Products & Accessories */}
            <div
              onClick={() => setActiveCategory('products')}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '40px 30px',
                cursor: 'pointer',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = '#95E1D3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛠️</div>
              <h2 style={{ margin: '0 0 10px 0', fontSize: '28px', color: '#333' }}>
                Products & Accessories
              </h2>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                Cleaners, chargers, dash cams & more
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Shop page with filters and products
  let categoryData = null;
  if (activeCategory === 'all') {
    categoryData = { id: 'all', name: '🛍️ All Products', color: '#007bff' };
  } else {
    categoryData = categories.find(c => c.id === activeCategory);
  }

  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: 'calc(100vh - 100px)' }}>
      {/* Back Button */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '2px solid #eee',
        padding: isMobile ? '15px' : '30px 40px'
      }}>
        <button
          onClick={() => setActiveCategory(null)}
          style={{
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
          ← Back to Categories
        </button>
      </div>

      <div style={{ display: 'flex', maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '20px' : '40px 20px', gap: isMobile ? '15px' : '30px' }}>
        {/* Sidebar Filters */}
        {!isMobile && (
          <div style={{
            width: '250px',
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            height: 'fit-content'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '18px' }}>Filter</h3>

            {/* Sort */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px', fontSize: '13px' }}>Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Price Range */}
            <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px', fontSize: '13px' }}>Price Range</label>
              {['all', 'low', 'mid', 'high'].map(range => (
                <label key={range} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer', fontSize: '13px' }}>
                  <input
                    type="radio"
                    name="price"
                    value={range}
                    checked={priceRange === range}
                    onChange={(e) => setPriceRange(e.target.value)}
                    style={{ marginRight: '8px' }}
                  />
                  {range === 'all' && 'All Prices'}
                  {range === 'low' && 'Under R500'}
                  {range === 'mid' && 'R500 - R2000'}
                  {range === 'high' && 'Above R2000'}
                </label>
              ))}
            </div>

            {/* Brand */}
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px', fontSize: '13px' }}>Brand</label>
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer', fontSize: '13px' }}>
                  <input
                    type="radio"
                    name="brand"
                    value="all"
                    checked={selectedBrand === 'all'}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    style={{ marginRight: '8px' }}
                  />
                  All Brands
                </label>
                {getAllBrands().map(brand => (
                  <label key={brand} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer', fontSize: '13px' }}>
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      style={{ marginRight: '8px' }}
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Filter Toggle */}
        {isMobile && (
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              padding: '10px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginBottom: '15px',
              width: '100%'
            }}
          >
            {showFilters ? '✕ Hide Filters' : '⚙️ Show Filters'}
          </button>
        )}

        {showFilters && isMobile && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'flex-end'
          }}>
            <div style={{
              backgroundColor: 'white',
              width: '100%',
              borderRadius: '16px 16px 0 0',
              padding: '20px',
              maxHeight: '80vh',
              overflowY: 'auto'
            }}>
              <button
                onClick={() => setShowFilters(false)}
                style={{
                  float: 'right',
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
              <h3 style={{ marginTop: 0 }}>Filters</h3>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Price Range</label>
                {['all', 'low', 'mid', 'high'].map(range => (
                  <label key={range} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="price"
                      value={range}
                      checked={priceRange === range}
                      onChange={(e) => setPriceRange(e.target.value)}
                      style={{ marginRight: '8px' }}
                    />
                    {range === 'all' && 'All Prices'}
                    {range === 'low' && 'Under R500'}
                    {range === 'mid' && 'R500 - R2000'}
                    {range === 'high' && 'Above R2000'}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <h2 style={{ margin: 0 }}>
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <span style={{ color: '#666', fontSize: '14px' }}>
              Showing {products.length} products
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {products.map(product => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '100%',
                  backgroundColor: '#f0f0f0'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: '#FF6B6B',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    ★ {product.rating}
                  </div>
                </div>

                <div style={{ padding: '15px' }}>
                  <p style={{ margin: '0 0 5px 0', color: '#999', fontSize: '12px' }}>{product.brand}</p>
                  <h3 style={{
                    margin: '0 0 10px 0',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    lineHeight: '1.4',
                    minHeight: '32px'
                  }}>
                    {product.name}
                  </h3>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', color: '#666' }}>
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>
                      R {product.price.toLocaleString()}
                    </span>
                    <button
                      style={{
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#999'
            }}>
              <p style={{ fontSize: '18px' }}>No products found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
