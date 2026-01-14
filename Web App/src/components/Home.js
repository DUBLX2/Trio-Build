import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Featured events data
  const featuredEvents = [
    { id: 1, title: 'European Car Meet 2026', image: 'https://via.placeholder.com/300x200?text=Car+Meet', views: '2.5K', date: 'Jan 20' },
    { id: 2, title: 'Muscle Car Championship', image: 'https://via.placeholder.com/300x200?text=Muscle+Cars', views: '4.1K', date: 'Jan 25' },
    { id: 3, title: 'Electric Vehicle Expo', image: 'https://via.placeholder.com/300x200?text=EV+Expo', views: '3.8K', date: 'Feb 1' },
    { id: 4, title: 'Classic Car Auction', image: 'https://via.placeholder.com/300x200?text=Auction', views: '5.2K', date: 'Feb 5' }
  ];

  // Upcoming events
  const upcomingEvents = [
    { id: 1, title: 'Monthly Meetup', location: 'Downtown Circuit', date: 'Jan 18', category: 'Meetup', price: 'Free' },
    { id: 2, title: 'Track Day - Formula Series', location: 'Speed Raceway', date: 'Jan 20', category: 'Racing', price: '$150' },
    { id: 3, title: 'Car Photography Workshop', location: 'City Center', date: 'Jan 22', category: 'Workshop', price: '$75' },
    { id: 4, title: 'Vintage Cars Restoration', location: 'Heritage Motors', date: 'Jan 25', category: 'Workshop', price: '$120' },
    { id: 5, title: 'Tesla Test Drive Event', location: 'EV Hub', date: 'Jan 28', category: 'Experience', price: 'Free' },
    { id: 6, title: 'Off-Road Adventure', location: 'Mountain Trail', date: 'Feb 2', category: 'Adventure', price: '$200' }
  ];

  // Categories
  const categories = [
    { id: 1, name: 'Racing', count: '156 Events', icon: '🏁' },
    { id: 2, name: 'Meetup', count: '89 Events', icon: '👥' },
    { id: 3, name: 'Workshop', count: '64 Events', icon: '🔧' },
    { id: 4, name: 'Experience', count: '45 Events', icon: '🎯' },
    { id: 5, name: 'Shop & Parts', count: '230 Items', icon: '🛒' }
  ];

  // Community trending
  const trendingTopics = [
    { id: 1, title: 'Best Electric Cars 2026', reviews: '2.3K', icon: '⚡' },
    { id: 2, title: 'Classic Car Restoration Tips', reviews: '1.8K', icon: '🏎️' },
    { id: 3, title: 'Performance Tuning Guide', reviews: '3.1K', icon: '⚙️' },
    { id: 4, title: 'Budget Car Reviews', reviews: '945', icon: '💰' },
    { id: 5, title: 'Luxury Car Collection', reviews: '2.7K', icon: '👑' }
  ];

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ backgroundColor: '#fafafa', paddingBottom: '40px' }}>
      {/* Hero Search Section */}
      <div style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: isMobile ? '40px 20px' : '60px 40px',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
      }}>
        <h1 style={{ fontSize: isMobile ? '28px' : '48px', marginBottom: '20px', margin: '0 0 20px 0' }}>
          Discover Amazing Car Events & Reviews
        </h1>
        <p style={{ fontSize: isMobile ? '14px' : '18px', marginBottom: '30px', color: '#ccc' }}>
          Join the largest car enthusiast community. Find events, reviews, and connect with fellow petrolheads.
        </p>
        
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          gap: '10px',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <input
            type="text"
            placeholder="Search events, reviews, or sellers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '14px'
            }}
          />
          <button
            onClick={() => navigate('/events')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '20px' : '40px 20px' }}>
        {/* Featured Events Section */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <div>
              <h2 style={{ margin: '0 0 5px 0', fontSize: '28px' }}>Featured Events</h2>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Our favorite picks for you</p>
            </div>
            <button
              onClick={() => navigate('/events')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              See All →
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '20px'
          }}>
            {featuredEvents.map(event => (
              <div key={event.id} style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              onClick={() => navigate('/events')}
              >
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ padding: '15px' }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>{event.title}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
                    <span>👀 {event.views}</span>
                    <span>📅 {event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <div>
              <h2 style={{ margin: '0 0 5px 0', fontSize: '28px' }}>Upcoming Events</h2>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Events happening soon</p>
            </div>
            <button
              onClick={() => navigate('/events')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              See All →
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {upcomingEvents.slice(0, isMobile ? 3 : 6).map(event => (
              <div key={event.id} style={{
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              onClick={() => navigate('/events')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>{event.title}</h3>
                  <span style={{ backgroundColor: '#e3f2fd', color: '#007bff', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
                    {event.category}
                  </span>
                </div>
                <p style={{ margin: '8px 0', color: '#666', fontSize: '13px' }}>📍 {event.location}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '12px', marginTop: '12px' }}>
                  <span style={{ color: '#666', fontSize: '13px' }}>📅 {event.date}</span>
                  <span style={{ fontWeight: 'bold', color: event.price === 'Free' ? '#28a745' : '#007bff' }}>{event.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '28px' }}>Explore Categories</h2>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Find what interests you</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(5, 1fr)',
            gap: '15px'
          }}>
            {categories.map(cat => (
              <div key={cat.id} style={{
                backgroundColor: 'white',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#007bff';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,123,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => navigate(cat.name === 'Shop & Parts' ? '/shop' : '/events')}
              >
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>{cat.icon}</div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{cat.name}</h3>
                <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>{cat.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Topics Section */}
        <section style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <div>
              <h2 style={{ margin: '0 0 5px 0', fontSize: '28px' }}>Trending Reviews & Topics</h2>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>What the community is talking about</p>
            </div>
            <button
              onClick={() => navigate('/community')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              See All →
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)',
            gap: '15px'
          }}>
            {trendingTopics.map(topic => (
              <div key={topic.id} style={{
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              onClick={() => navigate('/community')}
              >
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{topic.icon}</div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold', lineHeight: '1.3' }}>{topic.title}</h3>
                <p style={{ margin: 0, color: '#007bff', fontSize: '12px', fontWeight: 'bold' }}>💬 {topic.reviews} reviews</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div style={{
          backgroundColor: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
          backgroundImage: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
          color: 'white',
          borderRadius: '8px',
          padding: isMobile ? '30px 20px' : '50px 40px',
          textAlign: 'center'
        }}>
          <h2 style={{ margin: '0 0 15px 0', fontSize: isMobile ? '22px' : '28px' }}>Ready to Join the Community?</h2>
          <p style={{ margin: '0 0 25px 0', fontSize: isMobile ? '14px' : '16px', color: 'rgba(255,255,255,0.9)' }}>
            Share your reviews, connect with other enthusiasts, and discover amazing cars.
          </p>
          <button
            onClick={() => navigate('/account')}
            style={{
              padding: '12px 32px',
              backgroundColor: 'white',
              color: '#007bff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
