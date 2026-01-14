import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const openInstagram = () => {
    window.open('https://www.instagram.com/sequencial_reviews?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank', 'noopener,noreferrer');
  };

  const openEmail = () => {
    window.open('mailto:sequencialreviews@gmail.com', '_blank');
  };

  const contactUs = () => {
    navigate('/contact');
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

          <button
            onClick={contactUs}
            style={{
              backgroundColor: '#28a745',
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
            💬 Contact Us
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

          {/* Terms and Privacy Links */}
          <div style={{
            marginTop: '15px',
            paddingTop: '15px',
            borderTop: '1px solid #444',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            fontSize: '12px'
          }}>
            <a
              href="#terms"
              style={{
                color: '#999',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = '#ccc'}
              onMouseOut={(e) => e.target.style.color = '#999'}
            >
              Terms & Conditions
            </a>
            <span style={{ color: '#555' }}>•</span>
            <a
              href="#privacy"
              style={{
                color: '#999',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = '#ccc'}
              onMouseOut={(e) => e.target.style.color = '#999'}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}