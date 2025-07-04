# Local Market Shopping Website - Vite Frontend

A warm, community-driven e-commerce experience built with Vite + React on the front-end and (optionally) Firebase for authentication. Shop local produce, join community initiatives, and manage your profile—all in one polished, parallax-powered site.

---

## Tech Stack

- **Frontend**
  - [Vite](https://vitejs.dev/)
  - [React 19](https://reactjs.org/) with **React Router v7**
  - [React Scroll Parallax](https://www.react-scroll-parallax.com/)
  - [React Icons](https://react-icons.github.io/react-icons/)
- **Authentication & Data**
  - [Firebase Auth](https://firebase.google.com/docs/auth) (Email/password + Google)
  - Environment variables via Vite (`import.meta.env.VITE_…`)
- **State Management**
  - **CartContext** (React Context)
  - **UserContext** (React Context for profile & “teams”)

---

## Features

1. **Homepage** with hero parallax, category grid, Call-to-Action, and auth shortcuts
2. **Shop & Category** pages listing products (hard-coded in `/data/products.js`)
3. **Cart** page with add/remove/quantity controls, real-time totals, and mobile-friendly layout
4. **Authentication**
   - **Sign Up** / **Login** with email/password & Google
   - Secure routing to **Checkout** and **Profile**
5. **Checkout** form capturing billing, payment details, coupons & loyalty points
6. **Community & Giving Back**: Legacy story, foundation initiatives, grid of cards
7. **Events Calendar**: Hard-coded list of monthly community events with “Load More” & filter
8. **Profile** page: Upload avatar, update personal info, join a “team” (Dairy/Meat/etc.)
9. Fully **responsive** design across desktop, tablet, and mobile

---

## Folder Structure

.
├── .env # Local secrets (git-ignored)
├── package.json # Scripts & dependencies
├── vite.config.js # Vite config, including any proxies
├── public/ # Static assets (images, placeholderimage.webp)
│
└── src/
├── main.jsx # App bootstrap
├── firebase.js # Firebase init (reads from import.meta.env)
├── App.jsx # Router & page mounts
├── index.css # Global CSS variables & resets
│
├── context/
│ ├── CartContext.jsx
│ └── UserContext.jsx
│
├── components/
│ ├── NavBar.jsx
│ └── ParallaxSection.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Shop.jsx
│ ├── Category.jsx
│ ├── CartPage.jsx
│ ├── CheckOut.jsx
│ ├── Login.jsx
│ ├── SignUp.jsx
│ ├── Profile.jsx
│ ├── Community.jsx
│ ├── Calendar.jsx
│ └── \*.css # Per-page CSS files
│
└── assets/ # Images, icons, etc.

## Setup & Run

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-user/local-market.git
   cd local-market
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Environment Variables**
   Create a top-level .env file (in the project root, alongside package.json) with your Firebase config:

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

   ```

4. **Run in development**

   ```
   npm run dev
   ```

---

## Styling CSS Modules - Color Theme Variables

```
:root {
  --primary: #e46a1f;
  --primary-dark: #c45c1a;
  --accent-light: #ffe1c4;
  --accent: #f5a460;
  --background-light: #fff5ec;
  --text-dark: #333;
  --text-light: #fff;
}
```

## License & Attribution

This project is licensed under the **Creative Commons Attribution 4.0 International (CC BY 4.0)**.

You are free to:

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially

**Under the following terms:**

- **Attribution** — You **must** give appropriate credit, provide a link to this repository, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

For full license details, see: https://creativecommons.org/licenses/by/4.0/
