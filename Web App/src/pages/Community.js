import React, { useState } from 'react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock comments data
  const comments = [
    {
      id: 1,
      user: 'Alex Chen',
      avatar: 'https://via.placeholder.com/40x40/FF6B6B/FFFFFF?text=A',
      timestamp: '2 hours ago',
      text: 'Just discovered this amazing car review channel! The attention to detail in their videos is incredible. Can\'t wait for more content!',
      likes: 12,
      tags: ['reviews', 'channel', 'content']
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      avatar: 'https://via.placeholder.com/40x40/4ECDC4/FFFFFF?text=S',
      timestamp: '4 hours ago',
      text: 'The latest review on the new electric supercar was mind-blowing. The performance stats are impressive, but I\'m still skeptical about the range.',
      likes: 8,
      tags: ['electric', 'supercar', 'performance', 'range']
    },
    {
      id: 3,
      user: 'Mike Rodriguez',
      avatar: 'https://via.placeholder.com/40x40/45B7D1/FFFFFF?text=M',
      timestamp: '6 hours ago',
      text: 'Anyone else excited for the upcoming classic car restoration series? I\'ve been following their work and it\'s always top-notch quality.',
      likes: 15,
      tags: ['classic', 'restoration', 'series', 'quality']
    },
    {
      id: 4,
      user: 'Emma Davis',
      avatar: 'https://via.placeholder.com/40x40/F7DC6F/FFFFFF?text=E',
      timestamp: '8 hours ago',
      text: 'The comparison between the German and Italian sports cars was really well done. Great job breaking down the engineering differences!',
      likes: 6,
      tags: ['german', 'italian', 'sports cars', 'engineering', 'comparison']
    },
    {
      id: 5,
      user: 'David Kim',
      avatar: 'https://via.placeholder.com/40x40/BB8FCE/FFFFFF?text=D',
      timestamp: '12 hours ago',
      text: 'Been a fan since the beginning. The production quality keeps getting better with each video. Keep up the amazing work!',
      likes: 20,
      tags: ['fan', 'production', 'quality', 'videos']
    }
  ];

  const topComments = [...comments].sort((a, b) => b.likes - a.likes);

  // Filter comments based on search term
  const filteredComments = (activeTab === 'newest' ? comments : topComments).filter(comment =>
    comment.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comment.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const displayComments = searchTerm ? filteredComments : (activeTab === 'newest' ? comments : topComments);

  return (
    <section style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: window.innerWidth <= 768 ? '10px' : '20px'
    }}>
      {/* Header with Search */}
      <div style={{
        display: 'flex',
        flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: window.innerWidth <= 768 ? 'stretch' : 'center',
        marginBottom: window.innerWidth <= 768 ? '15px' : '10px',
        gap: window.innerWidth <= 768 ? '12px' : '0'
      }}>
        <div style={{
          marginBottom: window.innerWidth <= 768 ? '10px' : '0'
        }}>
          <h1 style={{
            margin: '0 0 5px 0',
            fontSize: window.innerWidth <= 768 ? '24px' : '32px'
          }}>
            Community
          </h1>
          <p style={{
            margin: 0,
            color: '#666',
            fontSize: window.innerWidth <= 768 ? '12px' : '14px'
          }}>
            Join the conversation with fellow car enthusiasts and reviewers.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '25px',
          padding: '8px 12px',
          minWidth: window.innerWidth <= 768 ? 'auto' : '250px',
          width: window.innerWidth <= 768 ? '100%' : 'auto'
        }}>
          <span style={{
            marginRight: '6px',
            color: '#666',
            fontSize: window.innerWidth <= 768 ? '14px' : '16px',
            flexShrink: 0
          }}>
            🔍
          </span>
          <input
            type="text"
            placeholder={window.innerWidth <= 768 ? "Search..." : "Search topics, users, or keywords..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              flex: 1,
              fontSize: window.innerWidth <= 768 ? '13px' : '14px',
              color: '#333',
              minWidth: '0'
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                background: 'none',
                border: 'none',
                color: '#999',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: '8px',
                padding: '2px'
              }}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Comments Section */}
      <div style={{
        marginTop: window.innerWidth <= 768 ? '20px' : '40px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {/* Comments Header */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: window.innerWidth <= 768 ? '12px 12px' : '15px 20px',
          borderBottom: '1px solid #ddd',
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
          gap: window.innerWidth <= 768 ? '10px' : '0'
        }}>
          <h3 style={{
            margin: 0,
            fontSize: window.innerWidth <= 768 ? '14px' : '18px'
          }}>
            {window.innerWidth <= 768 ? 'Comments' : 'Community Comments'} {searchTerm && `(${displayComments.length})`}
          </h3>
          <div style={{
            display: 'flex',
            gap: window.innerWidth <= 768 ? '6px' : '10px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setActiveTab('newest')}
              style={{
                padding: window.innerWidth <= 768 ? '6px 10px' : '8px 16px',
                border: activeTab === 'newest' ? '2px solid #007bff' : '1px solid #ddd',
                backgroundColor: activeTab === 'newest' ? '#007bff' : '#fff',
                color: activeTab === 'newest' ? '#fff' : '#333',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: window.innerWidth <= 768 ? '11px' : '14px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}
            >
              {window.innerWidth <= 768 ? 'Newest' : 'Newest Comments'}
            </button>
            <button
              onClick={() => setActiveTab('top')}
              style={{
                padding: window.innerWidth <= 768 ? '6px 10px' : '8px 16px',
                border: activeTab === 'top' ? '2px solid #007bff' : '1px solid #ddd',
                backgroundColor: activeTab === 'top' ? '#007bff' : '#fff',
                color: activeTab === 'top' ? '#fff' : '#333',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: window.innerWidth <= 768 ? '11px' : '14px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}
            >
              {window.innerWidth <= 768 ? 'Top' : 'Top Comments'}
            </button>
          </div>
        </div>

        {/* Comments List */}
        <div>
          {displayComments.map((comment) => (
            <div key={comment.id} style={{
              padding: window.innerWidth <= 768 ? '12px' : '20px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              gap: window.innerWidth <= 768 ? '10px' : '15px',
              alignItems: 'flex-start'
            }}>
              {/* User Avatar */}
              <img
                src={comment.avatar}
                alt={`${comment.user} avatar`}
                style={{
                  width: window.innerWidth <= 768 ? '32px' : '40px',
                  height: window.innerWidth <= 768 ? '32px' : '40px',
                  borderRadius: '50%',
                  flexShrink: 0
                }}
              />

              {/* Comment Content */}
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
                  alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
                  gap: window.innerWidth <= 768 ? '2px' : '10px',
                  marginBottom: '8px'
                }}>
                  <span style={{
                    fontWeight: 'bold',
                    color: '#333',
                    fontSize: window.innerWidth <= 768 ? '12px' : '14px'
                  }}>
                    {comment.user}
                  </span>
                  <span style={{
                    color: '#666',
                    fontSize: window.innerWidth <= 768 ? '11px' : '12px'
                  }}>
                    {comment.timestamp}
                  </span>
                </div>

                <p style={{
                  margin: '0 0 10px 0',
                  color: '#333',
                  lineHeight: '1.4',
                  fontSize: window.innerWidth <= 768 ? '12px' : '14px'
                }}>
                  {comment.text}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: window.innerWidth <= 768 ? '10px' : '15px'
                }}>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    color: '#666',
                    cursor: 'pointer',
                    fontSize: window.innerWidth <= 768 ? '11px' : '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    👍 {comment.likes}
                  </button>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    color: '#666',
                    cursor: 'pointer',
                    fontSize: window.innerWidth <= 768 ? '11px' : '12px'
                  }}>
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {displayComments.length === 0 && searchTerm && (
          <div style={{
            padding: window.innerWidth <= 768 ? '20px 15px' : '40px 20px',
            textAlign: 'center',
            color: '#666'
          }}>
            <div style={{
              fontSize: window.innerWidth <= 768 ? '32px' : '48px',
              marginBottom: '15px'
            }}>
              🔍
            </div>
            <h3 style={{
              margin: '0 0 10px 0',
              color: '#333',
              fontSize: window.innerWidth <= 768 ? '13px' : '16px'
            }}>
              No results found
            </h3>
            <p style={{
              margin: 0,
              fontSize: window.innerWidth <= 768 ? '11px' : '14px',
              lineHeight: '1.3'
            }}>
              Try searching for different keywords like "electric", "classic", or user names.
            </p>
          </div>
        )}

        {/* Load More Button */}
        <div style={{
          padding: window.innerWidth <= 768 ? '10px' : '20px',
          textAlign: 'center',
          borderTop: '1px solid #eee'
        }}>
          <button style={{
            padding: window.innerWidth <= 768 ? '6px 12px' : '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: window.innerWidth <= 768 ? '12px' : '14px',
            fontWeight: 'bold'
          }}>
            {window.innerWidth <= 768 ? 'Load More' : 'Load More Comments'}
          </button>
        </div>
      </div>
    </section>
  );
}
