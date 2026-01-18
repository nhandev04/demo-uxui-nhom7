import {
  ShoppingBag,
  Heart,
  User,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Temporary: Set to true to view account pages without authentication
  const isLoggedIn = true; // Change to false when auth is implemented
  const cartItemsCount = 3; // Mock cart count
  const wishlistCount = 5; // Mock wishlist count
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#f5f5f5]">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🌸</span>
            </div>
            <span className="font-['Montserrat'] text-xl sm:text-2xl text-[#6b1f15] hidden sm:block whitespace-nowrap">
              Flora Garden
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm hoa tươi, quà tặng..."
                className="w-full px-4 py-2.5 pr-12 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#e0997d] text-white rounded-lg hover:bg-[#d4705b] transition-colors flex items-center justify-center">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
            <Link
              to="/products"
              className="text-[#757575] hover:text-[#e0997d] transition-colors whitespace-nowrap"
            >
              Sản phẩm
            </Link>
            <Link
              to="/blog"
              className="text-[#757575] hover:text-[#e0997d] transition-colors whitespace-nowrap"
            >
              Tin tức
            </Link>
            <Link
              to="/about"
              className="text-[#757575] hover:text-[#e0997d] transition-colors whitespace-nowrap"
            >
              Về chúng tôi
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <button className="p-2 hover:bg-[#fdf6f5] rounded-lg transition-all duration-200 relative flex-shrink-0">
              <Heart className="w-5 h-5 text-[#757575]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#de87ac] text-white text-[10px] leading-none rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>
            <Link
              to="/cart"
              className="p-2 hover:bg-[#fdf6f5] rounded-lg transition-all duration-200 relative flex-shrink-0"
            >
              <ShoppingBag className="w-5 h-5 text-[#757575]" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e0997d] text-white text-[10px] leading-none rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            {isLoggedIn ? (
              <Link
                to="/account"
                className="p-2 hover:bg-[#fdf6f5] rounded-lg transition-all duration-200 flex-shrink-0"
              >
                <User className="w-5 h-5 text-[#757575]" />
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-3 sm:px-4 py-2 bg-[#e0997d] text-white text-sm rounded-lg hover:bg-[#d4705b] transition-all duration-200 hidden sm:block whitespace-nowrap"
              >
                Đăng nhập
              </Link>
            )}
            <button
              className="lg:hidden p-2 hover:bg-[#fdf6f5] rounded-lg flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full px-4 py-2.5 pr-12 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#e0997d] text-white rounded-lg">
              <Search className="w-4 h-4 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#f5f5f5] bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            <Link
              to="/products"
              className="block py-2.5 text-[#757575] hover:text-[#e0997d] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sản phẩm
            </Link>
            <Link
              to="/blog"
              className="block py-2.5 text-[#757575] hover:text-[#e0997d] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tin tức
            </Link>
            <Link
              to="/about"
              className="block py-2.5 text-[#757575] hover:text-[#e0997d] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
            {!isLoggedIn && (
              <Link
                to="/login"
                className="block py-2.5 text-[#e0997d] hover:text-[#d4705b] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Đăng nhập
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}