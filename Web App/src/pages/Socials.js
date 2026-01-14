import React, { useState, useEffect } from 'react';

export default function Socials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openYouTube = () => {
    window.open('https://www.youtube.com', '_blank', 'noopener,noreferrer');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/sequencial_reviews?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank', 'noopener,noreferrer');
  };

  return (
    <section>
      <h1>Socials</h1>
      <h2>Explore more of Sequencial Reviews</h2>
      
      <div style={{ 
        marginTop: '20px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '20px',
        alignItems: 'stretch'
      }}>
        {/* YouTube Section - Left */}
        <div style={{ 
          flex: 1,
          padding: '20px',
          border: '2px solid #ddd',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '400px'
        }}>
          <h3>YouTube Content</h3>
          <div style={{ 
            position: 'relative', 
            paddingBottom: '56.25%', 
            height: 0, 
            overflow: 'hidden',
            maxWidth: '100%',
            marginBottom: '15px'
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '5px'
              }}
              src="https://www.youtube.com/embed/qJV67jx3xSQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <button 
            onClick={openYouTube}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ff0000',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Visit Our Channel
          </button>
        </div>

        {/* Instagram Section - Right */}
        <div style={{ 
          flex: 1,
          padding: '20px',
          border: '2px solid #ddd',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '400px'
        }}>
          <h3>Instagram Profile</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '15px',
            flex: 1
          }}>
            <img
              src="/A YouTube banner fea.png"
              alt="Instagram Profile"
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </div>
          
          <button 
            onClick={openInstagram}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Follow us on Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
