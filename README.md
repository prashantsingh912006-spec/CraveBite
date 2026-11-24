# CraveBite - Swiggy & Zomato Inspired Food Ordering Platform 🛵🍛🍕

A modern food delivery web application rebuilt with the iconic design patterns, information architecture, and micro-interactions of **Swiggy** and **Zomato**, crafted in **HTML5**, **modern CSS3**, and **Vanilla JavaScript**.

---

## 🎨 Swiggy & Zomato Design Patterns Implemented

### 1. **"What's on your mind?" (Cuisine Circles Carousel)**
- Swiggy's signature horizontal circular craving cards (*Biryani, Pizza, Burgers, North Indian, Chinese & Momos, Kathi Rolls, South Indian, Desserts, Shakes*).
- Complete 41-dish catalog ensuring rich Veg and Non-Veg choices under every category (never showing "No item found").
- Real-time active craving banner displaying the selected category name, item count, and a 1-click **"Show All Cuisines"** button.
- Intelligent filter handling: auto-clears lingering searches and conflicting dietary filters when switching cravings.

### 2. **Top Restaurant Chains in Your Area**
- Zomato/Swiggy restaurant cards with:
  - Overlaid bottom discount banner on food imagery (e.g., **"₹120 OFF ABOVE ₹199"**, **"50% OFF UP TO ₹100"**, **"ITEMS AT ₹99"**).
  - Green rating pill (`4.5 ★`), estimated delivery time (`22 mins`), and distance (`1.8 km`).
  - Outlets: *Meghana Foods, Behrouz Biryani, Domino's Gourmet, Burger King, Mainland China, The Belgian Waffle Co.*

### 3. **Indian FSSAI Pure Veg & Non-Veg Toggle Switches**
- Authentic FSSAI food identification markers:
  - **Pure Veg**: Green square border with green dot.
  - **Non-Veg**: Red square border with red triangle.
- Interactive toggle switch that filters out dishes with immediate visual feedback.

### 4. **Swiggy Accordions & Dish Row Layout**
- Categories grouped in collapsible accordion blocks (*Recommended Bestsellers, Royal Biryani, Starters & Dim Sums, Desserts & Shakes*).
- **The Iconic Swiggy ADD Button**:
  - Positioned half on the dish photo and half overflowing below it.
  - Clicking "ADD" on customisable items opens the Swiggy bottom sheet.
  - Transforms into a green `[ -  1  + ]` stepper directly on the item card.

### 5. **Customization Bottom Sheet / Modal**
- Select portion sizes (*Regular* vs *Full / Large*).
- Optional add-ons (*Butter Garlic Naan, Extra Gravy, Boondi Raita, Roasted Papad*).
- Special cooking instructions input with live price recalculation.

### 6. **Sticky Bottom Floating Cart Bar ("VIEW CART")**
- As soon as 1 item is added, a green floating bar slides up from the bottom:
  - Left: `X Items • ₹XXX` with discount savings text.
  - Right: `VIEW CART ➔` button.

### 7. **Swiggy & Zomato Checkout & Order Review**
- **Customer Account Header**: Boldly displays the logged-in user's name, verified mobile number, and email. For guest checkouts, provides clean input fields for Name & Phone so orders are always tied to the customer's identity.
- **Order Review Section**: Displays the restaurant outlet, estimated delivery time, and a review of every item in the cart (Veg/Non-Veg FSSAI dots, portion sizes, add-ons, quantities, and item totals).
- **Delivery Address Selector**: Choose between GPS/Current detected location, Home, or Work, with a specific input for Flat/House No., Floor, and Landmark.
- **Payment Methods**: Instant UPI (Google Pay, PhonePe, Paytm, CRED), Credit/Debit Cards, and Cash on Delivery.
- **Detailed Bill Breakdown**: Item subtotal, coupon savings, delivery fee, partner tip, and taxes.

### 8. **Live Animated Route Map Tracker & Valet Assignment**
- **Prominent Customer Header**: Prominently shows **"ORDER PLACED BY: [Your Account Name]"**, Order ID (`CB-XXXXX`), customer phone number, and delivery destination.
- **Clear Delivery Valet Designation**: Explicitly identifies **"YOUR DELIVERY PARTNER (ASSIGNED VALET): Ramesh Kumar"** on an electric scooter, ensuring zero confusion between the customer's account and the rider.
- Animated route path with a moving delivery scooter between the restaurant and customer home.
- Real-time 4-stage stepper: *Order Placed &rarr; Food Preparing &rarr; On The Way &rarr; Delivered*.
- Call & Message partner quick action triggers.

### 10. **GPS Current Location Access**
- Click the delivery location in the top strip to open the location selector.
- Tap **"Use Current Location"**: Uses the browser's `navigator.geolocation` API and OpenStreetMap reverse-geocoding to automatically detect the user's local neighborhood and city.
- Automatically updates delivery estimates, nearby outlet banners, and address headers.

### 11. **User Authentication with SMS OTP Verification**
- Header **"Sign In"** button opens the Swiggy/Zomato style authentication modal.
- Tabbed view: **Sign In** vs **Create Account (Sign Up)**:
  - **Sign In**: Email/Phone & Password with show/hide eye toggle, remember me, and a **1-Click Quick Demo Login (Rahul Sharma)** for immediate testing.
  - **Create Account (OTP Verified)**:
    - User enters Name, Email, 10-digit mobile number with `+91` prefix, and Password.
    - Clicking **"Send OTP & Verify Mobile"** sends a 6-digit verification code.
    - Transitions to the **OTP Verification Screen** featuring:
      - 6 auto-advancing input boxes with backspace & paste support.
      - Simulated real-time SMS notification banner with a 1-click **"AUTO-FILL"** button.
      - 30-second resend timer with active countdown.
      - Shake animation & error toast on incorrect OTP.
- When logged in:
  - Displays user avatar circle with the first letter of their name and their first name in the header.
  - Interactive profile dropdown menu showing user name, email, phone, quick links to *My Orders*, *Coupons*, and a *Sign Out* button.
  - Automatically pre-fills customer information during checkout.

### 12. **Printable / Downloadable Tax Invoice (Receipt)**
- Accessible from the **Live Order Tracker** modal ("Tax Invoice" button) and from **Past Orders** ("Receipt" button).
- Renders an official FSSAI & GST-compliant restaurant tax invoice with itemized line items, GST breakdown (SGST 2.5% + CGST 2.5%), platform fees, discounts, and tips.
- Includes a one-click **"Print / Save as PDF"** action with print-optimized CSS.

---

## 🚀 Running the Website

- The server is live at [http://localhost:8000](http://localhost:8000).
- Or run locally:
  ```powershell
  python -m http.server 8000
  ```
