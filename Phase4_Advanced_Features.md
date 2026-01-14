# Phase 4: Advanced Features (After MVP)
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