import React from 'react';

export default function Events() {
  // Mock trending events data
  const trendingEvents = [
    {
      id: 1,
      title: 'Car Show 2026',
      image: 'https://via.placeholder.com/200x120/FF6B6B/FFFFFF?text=Car+Show',
      views: '2.1K',
      type: 'Event',
      date: 'Jan 15, 2026'
    },
    {
      id: 2,
      title: 'Racing Championship',
      image: 'https://via.placeholder.com/200x120/4ECDC4/FFFFFF?text=Racing',
      views: '1.8K',
      type: 'Sports',
      date: 'Jan 20, 2026'
    },
    {
      id: 3,
      title: 'Auto Expo 2026',
      image: 'https://via.placeholder.com/200x120/45B7D1/FFFFFF?text=Auto+Expo',
      views: '3.2K',
      type: 'Exhibition',
      date: 'Feb 5, 2026'
    },
    {
      id: 4,
      title: 'Classic Car Meetup',
      image: 'https://via.placeholder.com/200x120/F7DC6F/FFFFFF?text=Classic+Cars',
      views: '950',
      type: 'Meetup',
      date: 'Feb 12, 2026'
    },
    {
      id: 5,
      title: 'Electric Vehicle Summit',
      image: 'https://via.placeholder.com/200x120/BB8FCE/FFFFFF?text=EV+Summit',
      views: '4.1K',
      type: 'Conference',
      date: 'Feb 18, 2026'
    },
    {
      id: 6,
      title: 'Speed Challenge 2026',
      image: 'https://via.placeholder.com/200x120/85C1E9/FFFFFF?text=Speed+Challenge',
      views: '2.7K',
      type: 'Competition',
      date: 'Mar 1, 2026'
    },
    {
      id: 7,
      title: 'Motorcycle Rally',
      image: 'https://via.placeholder.com/200x120/F8C471/FFFFFF?text=Motorcycle',
      views: '1.5K',
      type: 'Rally',
      date: 'Mar 8, 2026'
    },
    {
      id: 8,
      title: 'Luxury Car Auction',
      image: 'https://via.placeholder.com/200x120/D7BDE2/FFFFFF?text=Luxury+Auction',
      views: '5.3K',
      type: 'Auction',
      date: 'Mar 15, 2026'
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('trending-container');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('trending-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '20px' }}>
      <h1>Events</h1>
      <p>Discover upcoming car events, shows, and automotive gatherings.</p>

      {/* Trending Events Section */}
      <div style={{ marginTop: '40px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333'
          }}>
            Trending Events
          </h2>
          <a
            href="#"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            View All →
          </a>
        </div>

        {/* Scrollable Container */}
        <div style={{ position: 'relative' }}>
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 2,
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ‹
          </button>

          {/* Scrollable Content */}
          <div
            id="trending-container"
            style={{
              display: 'flex',
              gap: '15px',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              padding: '10px 60px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {trendingEvents.map((event) => (
              <div
                key={event.id}
                style={{
                  flexShrink: 0,
                  width: '200px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {/* Event Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover'
                  }}
                />

                {/* Event Info */}
                <div style={{ padding: '12px' }}>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#333',
                    lineHeight: '1.3'
                  }}>
                    {event.title}
                  </h3>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: '#666'
                  }}>
                    <span>{event.type}</span>
                    <span>👁 {event.views}</span>
                  </div>

                  <div style={{
                    marginTop: '5px',
                    fontSize: '11px',
                    color: '#888'
                  }}>
                    📅 {event.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 2,
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ›
          </button>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px'
        }}>
          Upcoming Events
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {trendingEvents.slice(0, 4).map((event) => (
            <div
              key={`upcoming-${event.id}`}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{
                margin: '0 0 10px 0',
                fontSize: '18px',
                color: '#333'
              }}>
                {event.title}
              </h3>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                fontSize: '14px',
                color: '#666'
              }}>
                <span>📅 {event.date}</span>
                <span>👁 {event.views} views</span>
              </div>

              <p style={{
                margin: '0 0 15px 0',
                color: '#555',
                fontSize: '14px'
              }}>
                Join us for this exciting {event.type.toLowerCase()} event featuring the latest in automotive innovation and community engagement.
              </p>

              <button style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
