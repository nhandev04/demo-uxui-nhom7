import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { ChangePassword } from './pages/ChangePassword';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CustomOrder } from './pages/CustomOrder';
import { StaticPage } from './pages/StaticPage';
import { Account } from './pages/Account';
import { AccountOverview } from './pages/account/AccountOverview';
import { AccountProfile } from './pages/account/AccountProfile';
import { AccountOrders } from './pages/account/AccountOrders';
import { AccountOrderDetail } from './pages/account/AccountOrderDetail';
import { AccountAddresses } from './pages/account/AccountAddresses';
import { AccountWishlist } from './pages/account/AccountWishlist';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        
        {/* Info Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-order" element={<CustomOrder />} />
        
        {/* Static Pages */}
        <Route path="/privacy" element={<StaticPage />} />
        <Route path="/terms" element={<StaticPage />} />
        <Route path="/shipping" element={<StaticPage />} />
        <Route path="/returns" element={<StaticPage />} />
        <Route path="/faq" element={<StaticPage />} />
        
        {/* Account Routes */}
        <Route path="/account" element={<Account />}>
          <Route index element={<AccountOverview />} />
          <Route path="profile" element={<AccountProfile />} />
          <Route path="orders" element={<AccountOrders />} />
          <Route path="orders/:orderId" element={<AccountOrderDetail />} />
          <Route path="addresses" element={<AccountAddresses />} />
          <Route path="wishlist" element={<AccountWishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}