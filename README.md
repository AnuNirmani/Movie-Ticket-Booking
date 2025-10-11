# 🎬 Movie Ticket Booking System

A modern, full-featured movie ticket booking **frontend application** built with React and Vite. This project showcases a complete user interface for a movie ticket booking system, providing a seamless experience for users to browse movies, book tickets, manage their bookings, and explore theaters.

> **Note:** This is a frontend-only application. Backend API integration and database functionality are planned for future development.

## ✨ Features

### 🔐 Authentication System
- User Registration & Login
- Forgot Password functionality
- OTP verification system
- Secure password reset

### 🎥 Movie Browsing
- **Now Showing**: Browse currently playing movies
- **Coming Soon**: Preview upcoming releases
- **Movie Details**: View comprehensive movie information
- **Theaters**: Explore available theaters and locations

### 🎟️ Booking System
- **Movie Selection**: Choose your preferred movie and showtime
- **Seat Booking**: Interactive seat selection interface
- **Payment**: Secure payment processing
- **My Bookings**: View and manage your ticket history

### 👤 User Profile
- Personal profile management
- Booking history tracking
- Favorite movies collection
- User preferences

### 📱 Additional Features
- **Deals & Offers**: Exclusive discounts and promotions
- **Contact Us**: Customer support
- **About Us**: Learn about the platform
- **Terms & Conditions**: Legal information
- **Advertisements**: Promotional content

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Movie-Ticket-Booking.git
   cd Movie-Ticket-Booking
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🛠️ Tech Stack

### Frontend Technologies
- **React 19.1.1** - UI framework
- **Vite 7.1.7** - Build tool and development server
- **React Router DOM 7.9.1** - Client-side routing
- **React Icons 5.5.0** - Icon library
- **CSS3** - Styling

### Development Tools
- **ESLint** - Code linting
- **@vitejs/plugin-react** - React Fast Refresh support

> **Backend:** Not included in this repository. This is a frontend-only implementation.

## 📁 Project Structure

```
Movie-Ticket-Booking/
├── public/                      # Static assets
│   ├── movie-posters-bg.svg
│   └── vite.svg
├── src/
│   ├── FrondEnd/               # Main application code
│   │   ├── components/         # Reusable components
│   │   │   ├── Deals.jsx
│   │   │   └── MovieInfo.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Auth/           # Authentication pages
│   │   │   │   ├── login.jsx
│   │   │   │   ├── Signup.jsx
│   │   │   │   ├── ForgotPassword.jsx
│   │   │   │   ├── SendOTP.jsx
│   │   │   │   └── NewPassword.jsx
│   │   │   ├── Home/           # Home and booking pages
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── NowShowing.jsx
│   │   │   │   ├── ComingSoon.jsx
│   │   │   │   ├── Theaters.jsx
│   │   │   │   ├── Deals.jsx
│   │   │   │   └── Booking/    # Booking flow
│   │   │   │       ├── MovieSelecting.jsx
│   │   │   │       ├── SeatBooking.jsx
│   │   │   │       └── Payment.jsx
│   │   │   ├── Profile/        # User profile pages
│   │   │   │   ├── profile.jsx
│   │   │   │   ├── mybooking.jsx
│   │   │   │   └── favorites.jsx
│   │   │   ├── Footer/         # Footer pages
│   │   │   │   ├── AboutUs.jsx
│   │   │   │   ├── ContactUs.jsx
│   │   │   │   ├── TermsAndConditions.jsx
│   │   │   │   └── Advertisements.jsx
│   │   │   └── HeadFoot/       # Header & Footer components
│   │   │       ├── Navbar.jsx
│   │   │       └── Footer.jsx
│   │   └── css/                # Component-specific stylesheets
│   │       ├── Auth/
│   │       ├── Home/
│   │       ├── Profile/
│   │       ├── Footer/
│   │       └── HeadFoot/
│   ├── components/             # Global components
│   │   └── ScrollToTop.jsx
│   ├── assets/                 # Images and static files
│   ├── App.jsx                 # Main App component with routing
│   ├── main.jsx                # Application entry point
│   ├── App.css                 # Global app styles
│   └── index.css               # Global CSS
├── dist/                       # Production build output
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                   # Project documentation
```

## 🎯 Key Application Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Login | Landing/Login page |
| `/login` | Login | User login |
| `/signup` | Signup | New user registration |
| `/home` | Home | Main dashboard |
| `/movies` | NowShowing | Browse current movies |
| `/now-showing` | NowShowing | Currently playing movies |
| `/coming-soon` | ComingSoon | Upcoming movies |
| `/theaters` | Theaters | Theater locations |
| `/movie-selecting` | MovieSelecting | Select movie showtime |
| `/seat-booking` | SeatBooking | Choose seats |
| `/payment` | Payment | Payment processing |
| `/profile` | Profile | User profile |
| `/bookings` | MyBooking | Booking history |
| `/favorites` | Favorites | Favorite movies |
| `/deals` | Deals | Offers and promotions |
| `/about` | AboutUs | About the platform |
| `/contact` | ContactUs | Contact information |
| `/terms` | TermsAndConditions | Terms of service |

## 🎨 UI/UX Features

- **Responsive Design**: Optimized for all device sizes
- **Modern Interface**: Clean and intuitive user interface
- **Smooth Navigation**: Seamless page transitions with React Router
- **Interactive Components**: Dynamic seat selection and movie browsing
- **Visual Feedback**: Loading states and user interactions

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized production builds. Configuration can be modified in `vite.config.js`.

### ESLint Configuration
Code quality is maintained through ESLint. Rules are defined in `eslint.config.js`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Anuttara Nirmani - *Initial work*

## 🚧 Future Enhancements

### Backend Development (Priority)
- [ ] Backend API development with Node.js/Express or similar
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication & authorization
- [ ] Real-time seat availability tracking
- [ ] Payment gateway integration

### Additional Features
- [ ] Email and SMS notifications
- [ ] Mobile app version
- [ ] Social media integration
- [ ] Movie reviews and ratings system
- [ ] Loyalty points and rewards program
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Admin dashboard for theater management

---

Made with ❤️ using React and Vite
