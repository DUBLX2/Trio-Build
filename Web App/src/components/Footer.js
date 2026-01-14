import React from 'react';

export default function Footer() {
  const openInstagram = () => {
    window.open('https://www.instagram.com/sequencial_reviews?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank', 'noopener,noreferrer');
  };

  const openEmail = () => {
    window.open('mailto:sequencialreviews@gmail.com', '_blank');
  };

  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '30px 20px',
      marginTop: 'auto',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h3 style={{
          marginBottom: '15px',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          Connect with Sequencial Reviews
        </h3>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>
          <button
            onClick={openInstagram}
            style={{
              background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            📸 Follow on Instagram
          </button>

          <button
            onClick={openEmail}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            ✉️ Email Us
          </button>
        </div>

        <div style={{
          borderTop: '1px solid #555',
          paddingTop: '15px',
          fontSize: '14px',
          color: '#ccc'
        }}>
          <p style={{ margin: '0' }}>
            © 2026 Sequencial Reviews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}