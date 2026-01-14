import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    username: 'CarEnthusiast',
    email: 'user@example.com',
    fullName: 'John Doe',
    bio: 'Passionate about cars and reviews',
    favoriteGenre: 'Sports Cars'
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setLoginData({ email: '', password: '' });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({
      username: 'CarEnthusiast',
      email: 'user@example.com',
      fullName: 'John Doe',
      bio: 'Passionate about cars and reviews',
      favoriteGenre: 'Sports Cars'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    alert('Profile updated successfully!');
  };

  if (!isLoggedIn) {
    return (
      <section style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '40px 30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '28px',
            color: '#333'
          }}>
            Login
          </h1>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#333'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginInputChange}
                placeholder="Enter your email"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#333'
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginInputChange}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '15px'
              }}
            >
              Login
            </button>
          </form>

          <p style={{
            textAlign: 'center',
            color: '#666',
            fontSize: '14px'
          }}>
            Demo: Enter any email and password to login
          </p>

          <button
            onClick={() => navigate('/contact')}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Contact Us
          </button>
        </div>
      </section>
    );
  }

  return (
    <section style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{ margin: 0 }}>My Account</h1>
        <button
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '30px',
        borderBottom: '2px solid #ddd',
        paddingBottom: '0'
      }}>
        <button
          onClick={() => setActiveTab('profile')}
          style={{
            padding: '12px 20px',
            border: 'none',
            borderBottom: activeTab === 'profile' ? '3px solid #007bff' : '3px solid transparent',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            color: activeTab === 'profile' ? '#007bff' : '#666'
          }}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('activity')}
          style={{
            padding: '12px 20px',
            border: 'none',
            borderBottom: activeTab === 'activity' ? '3px solid #007bff' : '3px solid transparent',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            color: activeTab === 'activity' ? '#007bff' : '#666'
          }}
        >
          Activity
        </button>
        <button
          onClick={() => navigate('/contact')}
          style={{
            padding: '12px 20px',
            border: 'none',
            borderBottom: '3px solid transparent',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#666'
          }}
        >
          Contact Us
        </button>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '30px'
        }}>
          <h2 style={{ marginTop: 0 }}>Edit Profile</h2>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows="4"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                boxSizing: 'border-box',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Favorite Genre
            </label>
            <select
              name="favoriteGenre"
              value={formData.favoriteGenre}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            >
              <option>Sports Cars</option>
              <option>Electric Vehicles</option>
              <option>Classic Cars</option>
              <option>Motorcycles</option>
              <option>Trucks</option>
            </select>
          </div>

          <button
            onClick={handleSaveProfile}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Save Changes
          </button>
        </div>
      )}

      {/* Activity Tab */}
      {activeTab === 'activity' && (
        <div style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '30px'
        }}>
          <h2 style={{ marginTop: 0 }}>Your Activity</h2>
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '15px',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <strong>Liked "Best Electric Cars of 2026"</strong>
              <span style={{ color: '#666', fontSize: '12px' }}>2 hours ago</span>
            </div>
          </div>
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '15px',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <strong>Commented on "Classic Car Restoration"</strong>
              <span style={{ color: '#666', fontSize: '12px' }}>1 day ago</span>
            </div>
          </div>
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '15px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <strong>Joined the community</strong>
              <span style={{ color: '#666', fontSize: '12px' }}>1 week ago</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
