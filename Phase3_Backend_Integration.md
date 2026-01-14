# Phase 3: Backend Integration with Frontend
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