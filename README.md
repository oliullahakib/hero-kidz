<div align="center">
  <img src="https://i.ibb.co.com/MxfwC02d/logo.png" alt="Hero Kidz Logo" width="200" />
  
  # Hero Kidz
  
  **Welcome to Hero Kidz! Discover the best educational and fun toys for kids.**
</div>

## 📖 Description

Hero Kidz is a modern, fast, single vendor and secure e-commerce web application specifically designed for purchasing toys and kid's products. Built seamlessly with Next.js, it offers an exceptional shopping experience for parents while maintaining high performance, robust SEO, and scalable dropshipping management features.

## ✨ Key Features

- **Extensive Toy Catalog**: Browse, search, and filter a huge collection of kids' toys.
- **Detailed Product Pages**: View product deals, descriptions, dynamic pricing, user reviews, and video demonstrations.
- **Shopping Cart & Wishlist**: Easily manage items you wish to buy or save for later.
- **User Authentication**: Secure Sign Up, Login, and Profile Management powered by NextAuth.
- **Order Management System**: Real-time order tracking and management functionalities.
- **Modern & Responsive UI**: Beautiful aesthetics built with Tailwind CSS and DaisyUI optimized for all devices.
- **Optimized SEO**: Dynamic metadata generation for all products and pages.

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Security & Utilities**: `bcryptjs` (hashing), `nodemailer` (email automation), `sweetalert2` (alerts), `react-icons`

## 📸 Preview


### All Products
![Homepage Preview](https://i.ibb.co.com/0yXwXP4s/all-products-Page.png)

### Homepage
![All Products Preview](https://i.ibb.co.com/XkK057C1/homepage.png)

## 🚀 How to Start This Project

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- Node.js
- MongoDB Database (Local or MongoDB Atlas)

### Installation Steps

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd hero-kidz
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` or `.env.local` file in the root of your project and configure the necessary environment variables required by NextAuth, MongoDB, and Nodemailer. Example:
   ```env
   # Database connection
   MONGODB_URI=your_mongodb_connection_string
   
   # NextAuth
   NEXTAUTH_SECRET=your_nextauth_secret_key
   NEXTAUTH_URL=http://localhost:3000
   
   # Emal configuration (if applicable)
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the application**:
   Open [http://localhost:3000](http://localhost:3000) with your browser to dive into Hero Kidz!
