# Phase 5: Deployment
**Objective:** Get site live

### Steps
1. **Frontend Deployment**
   - Build: `npm run build`
   - Deploy to Vercel, Netlify, or AWS S3 + CloudFront

2. **Backend Deployment**
   - Deploy Node.js server to Heroku, Railway, or AWS
   - Set environment variables (database URL, JWT secret, etc.)

3. **Domain & HTTPS**
   - Buy domain (Namecheap, GoDaddy)
   - Set up HTTPS/SSL certificate
   - Point DNS to hosting

4. **Database**
   - Use managed service (Supabase, AWS RDS, MongoDB Atlas)
   - Set up regular backups

---

## Recommended Tech Stack Summary

| Component | Technology |
|-----------|------------|
| Frontend | React, React Router, Axios |
| Backend | Node.js + Express |
| Database | PostgreSQL (or MongoDB) |
| Auth | JWT + bcryptjs |
| File Upload | Multer + Cloudinary/AWS S3 |
| Maps | Google Maps API |
| Payments | Stripe or PayPal |
| QR Codes | qrcode.js library |
| Deployment | Vercel (frontend) + Railway/Heroku (backend) |

---

## Quick Setup Commands (When Ready)

### Backend Setup
```bash
mkdir backend
cd backend
npm init -y
npm install express cors dotenv bcryptjs jsonwebtoken multer pg
npm install -D nodemon
```

### Backend Start Script (package.json)
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### Frontend API Client
```javascript
// src/api/client.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const client = axios.create({
  baseURL: API_URL,
});

// Add JWT to requests
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
```