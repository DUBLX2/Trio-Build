# Sequencial Hub - Development Cycle

## Phase 1: Core Frontend (CURRENT - In Progress)
**Objective:** Establish the basic UI structure and navigation

### ✅ Completed
- [x] Header with clickable logo (links to home)
- [x] Responsive navigation bar (desktop + mobile hamburger menu)
- [x] Page routing (Home, Events, Shop, Community, Contact, Socials)
- [x] Mobile-responsive design (works on iPhone)

### 📋 To-Do
1. **Home Page Enhancement**
   - [ ] Add hero section with call-to-action
   - [ ] Display "Closest Event at the Top" section
   - [ ] Add featured events grid/carousel
   - [ ] Style with consistent brand colors

2. **Events Page Build**
   - [ ] Create events listing layout
   - [ ] Add search/filter bar for events
   - [ ] Display event cards (title, date, location, image, description)
   - [ ] Integrate Google Maps API for event locations
   - [ ] Add event detail page (click event to see full details)

3. **About Page**
   - [ ] Create about content
   - [ ] Add company/mission information

4. **Contact Page**
   - [ ] Add contact form
   - [ ] Add contact information
   - [ ] (Optional) Integrate email service (EmailJS or backend)

---

## Phase 2: Backend Setup
**Objective:** Build API and database for event management

### Steps to Implement (In Order)
1. **Choose Backend Stack** (Recommended: Node.js + Express)
   - Create `/backend` folder with Express server
   - Set up `package.json` and dependencies
   - Structure: `routes/`, `models/`, `controllers/`, `middleware/`

2. **Database Setup**
   - Set up PostgreSQL or MongoDB
   - Create database schemas:
     - `users` table (id, email, password, role, created_at)
     - `events` table (id, title, description, date, location, image_url, user_id, created_at)
   
3. **User Authentication**
   - Install `jsonwebtoken`, `bcryptjs`, `dotenv`
   - Create `/routes/auth.js` with:
     - POST `/api/auth/signup` — register user
     - POST `/api/auth/login` — login and return JWT
     - POST `/api/auth/logout` — clear session
   - Create middleware for JWT verification

4. **Event Upload & Management**
   - Install `multer` for file uploads
   - Create `/routes/events.js` with:
     - GET `/api/events` — list all events
     - GET `/api/events/:id` — get single event
     - POST `/api/events` — create event (protected, with image upload)
     - PUT `/api/events/:id` — edit event (protected)
     - DELETE `/api/events/:id` — delete event (protected)
   - Set up image storage (local `/uploads` or cloud like Cloudinary)

5. **Admin Panel (Backend)**
   - Create admin routes to manage all events/users
   - Add role-based access control (admin vs regular user)

---

## Phase 3: Backend Integration with Frontend
**Objective:** Connect React frontend to backend APIs

### Steps to Implement
1. **Setup Axios/Fetch Client**
   - Create `src/api/client.js` (axios instance with base URL)
   - Create `src/hooks/useAuth.js` (auth context/hook)

2. **Auth Pages & Logic**
   - Create `src/pages/Login.js` and `src/pages/Register.js`
   - Add login/logout functionality to Header
   - Store JWT in localStorage and auto-login on refresh
   - Add protected routes (requires login)

3. **Event Upload Page**
   - Create `src/pages/UploadEvent.js` (form with file input)
   - Connect to backend POST `/api/events` endpoint
   - Show success/error messages

4. **Fetch & Display Events**
   - Update `src/pages/Events.js` to fetch from backend
   - Add search/filter functionality
   - Add pagination if many events

5. **Event Detail Page**
   - Create `src/pages/EventDetail.js`
   - Route: `/events/:id`
   - Fetch and display full event details
   - Show Google Maps with location

---

## Phase 4: Advanced Features (After MVP)
**Objective:** Add premium functionality

### Ticket System
1. **Database Tables:**
   - `tickets` (id, event_id, user_id, qr_code, status, created_at)
   - `orders` (id, user_id, total_amount, created_at)

2. **Backend:**
   - Integrate payment processor (Stripe, PayPal)
   - Create QR code generation (library: `qrcode.js`)
   - Endpoints for purchasing tickets

3. **Frontend:**
   - Ticket purchasing flow
   - Display user's purchased tickets
   - Show QR code on ticket page

### User Profiles
1. **Backend:**
   - Add user profile endpoints (GET/PUT `/api/users/:id`)
   - Store profile pic, bio, etc.

2. **Frontend:**
   - Create `src/pages/Profile.js`
   - Show user's events and tickets
   - Allow profile editing

### Apple Wallet & Google Pay Integration
1. Install wallet SDK libraries
2. Generate wallet passes with event details
3. Add "Add to Wallet" button on ticket page

---

## Phase 5: Deployment
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

## Current Priority Order
1. ✅ **Phase 1 (In Progress)** — Finish frontend pages (Events, search, maps)
2. **Phase 2** — Build backend with auth and event upload
3. **Phase 3** — Connect frontend to backend
4. **Phase 4** — Ticket system and advanced features
5. **Phase 5** — Deploy to production

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

---

**Next Steps:** Let me know when you want to start Phase 2 (Backend), and I can set up the Express server structure!
