# Flora Garden - Luxury Flower Shop E-commerce

A complete production-ready e-commerce web application for a luxury flower shop, built with React, TypeScript, Tailwind CSS, and React Router.

## 🌸 Features

### Core Features
- **Authentication System**: Login, Register, Forgot Password, Reset Password
- **Product Management**: Browse products, filter by category, sort by price/rating
- **Shopping Cart**: Add/remove items, update quantities
- **Checkout Process**: Multi-step checkout with address and payment selection
- **Order Management**: Track orders, view order history and details
- **User Account**: Complete user profile management (Shopee-style)
- **Blog/News**: Read articles about flower care and trends
- **Wishlist**: Save favorite products

### Design System
- **Colors**: Blush Pink palette (#E0997D primary, with rose and beige accents)
- **Typography**: Playfair Display (headings), Raleway (UI), Lora (body)
- **Components**: Fully styled with elegant, minimalist design
- **Responsive**: Mobile-first design, works on all screen sizes

## 📁 Project Structure

```
/
├── App.tsx                          # Main app with routing
├── components/
│   ├── layout/
│   │   ├── Header.tsx               # Site header with navigation
│   │   ├── Footer.tsx               # Site footer with links
│   │   └── Layout.tsx               # Layout wrapper
│   └── figma/
│       └── ImageWithFallback.tsx    # Protected image component
├── pages/
│   ├── Home.tsx                     # Homepage with hero, products, blog
│   ├── Products.tsx                 # Product listing with filters
│   ├── ProductDetail.tsx            # Single product page
│   ├── Cart.tsx                     # Shopping cart
│   ├── Checkout.tsx                 # Checkout process
│   ├── OrderConfirmation.tsx        # Order success page
│   ├── Login.tsx                    # Login page
│   ├── Register.tsx                 # Registration page
│   ├── ForgotPassword.tsx           # Password recovery
│   ├── ResetPassword.tsx            # Password reset
│   ├── Blog.tsx                     # Blog listing
│   ├── BlogPost.tsx                 # Single blog post
│   ├── About.tsx                    # About page
│   ├── Contact.tsx                  # Contact page
│   ├── StaticPage.tsx               # Generic static pages (Privacy, Terms, etc.)
│   ├── Account.tsx                  # Account layout with sidebar
│   └── account/
│       ├── AccountOverview.tsx      # Account dashboard
│       ├── AccountProfile.tsx       # Edit profile
│       ├── AccountOrders.tsx        # Order history
│       ├── AccountOrderDetail.tsx   # Order details
│       ├── AccountAddresses.tsx     # Address management
│       └── AccountWishlist.tsx      # Wishlist page
├── data/
│   └── mockData.ts                  # Mock data (products, orders, blog posts)
├── styles/
│   └── globals.css                  # Global styles with design system tokens
└── guidelines/
    └── Guidelines.md                # Design system documentation
```

## 🎨 Pages Overview

### Public Pages
1. **Home** (`/`) - Hero carousel, categories, featured products, new products, blog
2. **Products** (`/products`) - Grid/list view, filters, sorting
3. **Product Detail** (`/products/:id`) - Images, description, add to cart, related products
4. **Cart** (`/cart`) - View cart items, update quantities, apply vouchers
5. **Checkout** (`/checkout`) - Multi-step: shipping info, payment method, confirmation
6. **Order Confirmation** (`/order-confirmation/:orderId`) - Success page with order details
7. **Blog** (`/blog`) - Article listing with categories
8. **Blog Post** (`/blog/:id`) - Full article with related posts
9. **About** (`/about`) - Company story, values, team
10. **Contact** (`/contact`) - Contact form and information

### Authentication Pages
11. **Login** (`/login`) - Email/password with social login options
12. **Register** (`/register`) - Full registration form with validation
13. **Forgot Password** (`/forgot-password`) - Email recovery form
14. **Reset Password** (`/reset-password`) - New password form

### Account Pages (Protected)
15. **Account Dashboard** (`/account`) - Overview with stats and recent orders
16. **Profile** (`/account/profile`) - Edit personal information
17. **Orders** (`/account/orders`) - Order history with filters
18. **Order Detail** (`/account/orders/:orderId`) - Full order tracking
19. **Addresses** (`/account/addresses`) - Manage shipping addresses
20. **Wishlist** (`/account/wishlist`) - Saved favorite products

### Static/Info Pages
21. **Privacy Policy** (`/privacy`) - Privacy and data protection policy
22. **Terms of Service** (`/terms`) - Terms and conditions
23. **Shipping Policy** (`/shipping`) - Delivery information and fees
24. **Returns Policy** (`/returns`) - Return and refund policy
25. **FAQ** (`/faq`) - Frequently asked questions

## 🚀 Getting Started

This project uses:
- React 18
- TypeScript
- Tailwind CSS v4
- React Router v6
- Lucide React (icons)

All dependencies are automatically handled by Figma Make.

## 🎯 Key Features Implemented

### Navigation Flow
- Header with search, cart counter, wishlist counter
- Sticky navigation with smooth scrolling
- Mobile-responsive menu
- Breadcrumbs on detail pages

### Product Features
- Product grid and list views
- Filtering by category, price range, rating
- Sorting options (popularity, price, rating, newest)
- Product quick view
- Add to cart from listing
- Add to wishlist

### Shopping Experience
- Cart summary with voucher code
- Multi-step checkout process
- Order status tracking
- Order history with status badges
- Reorder functionality

### Account Management (Shopee-style)
- Sidebar navigation
- Profile editing with avatar upload
- Order management with detailed tracking
- Multiple shipping addresses
- Wishlist with recommendations

### Design Implementation
- All design system colors and typography
- Hover states and transitions
- Focus states for accessibility
- Loading states
- Empty states
- Error handling

## 🎨 Design System

The application follows the complete design system specified in `/guidelines/Guidelines.md`:

- **Primary Color**: Pink #E0997D
- **Secondary Color**: Rose #DE87AC
- **Neutral Colors**: Warm beige and soft gray
- **Fonts**: Playfair Display, Raleway, Lora
- **Shadows**: Multi-level elevation system
- **Borders**: Rounded corners (8px-20px)
- **Spacing**: 8px base scale
- **Interactive States**: Hover, focus, active, disabled

## 📱 Responsive Design

- **Mobile**: < 768px (Stack layout, hamburger menu)
- **Tablet**: 768px - 1024px (Adjusted grid, sidebar toggles)
- **Desktop**: > 1024px (Full layout with sidebar)

## 🔄 User Flow

```
Homepage → Products → Product Detail → Cart → Checkout → Order Confirmation
                    ↓
                Wishlist
                    ↓
            Account Dashboard
                    ↓
        Profile / Orders / Addresses
```

## 📦 Mock Data

The application includes realistic mock data for:
- 8 products with images, prices, ratings
- 4 product categories
- 3 blog posts
- 3 orders with different statuses
- 2 saved addresses
- User profile information

## 🎭 Production Ready

✅ Complete routing system
✅ All pages implemented
✅ Responsive design
✅ Interactive components
✅ Form validation
✅ Loading and empty states
✅ Consistent design system
✅ Accessible markup
✅ SEO-friendly structure

## 🚀 Next Steps (Optional Enhancements)

- Connect to real backend API
- Add user authentication
- Implement payment gateway
- Add product reviews
- Enable product search
- Add email notifications
- Implement analytics tracking
- Add multi-language support

---

**Built with ❤️ using Figma Make**