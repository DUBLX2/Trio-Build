# Phase 2: Backend Setup
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