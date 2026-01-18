import { Layout } from '../components/layout/Layout';
import { User, Package, MapPin, Heart, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export function Account() {
  const location = useLocation();

  const menuItems = [
    { path: '/account', icon: LayoutDashboard, label: 'Tổng quan', exact: true },
    { path: '/account/profile', icon: User, label: 'Thông tin cá nhân' },
    { path: '/account/orders', icon: Package, label: 'Đơn hàng của tôi' },
    { path: '/account/addresses', icon: MapPin, label: 'Sổ địa chỉ' },
    { path: '/account/wishlist', icon: Heart, label: 'Danh sách yêu thích' },
  ];

  const isActive = (path: string, exact: boolean = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-[#fdf6f5] to-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#6b1f15]">
            Tài khoản của tôi
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-[#f5f5f5] p-4 sm:p-6 sticky top-24">
              {/* User Info */}
              <div className="text-center pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-[#f5f5f5]">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl sm:text-2xl">N</span>
                </div>
                <h3 className="text-base sm:text-lg text-[#424242] mb-1">Nguyễn Văn A</h3>
                <p className="text-xs sm:text-sm text-[#9e9e9e]">nguyenvana@email.com</p>
              </div>

              {/* Menu */}
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-200 text-sm sm:text-base ${
                      isActive(item.path, item.exact)
                        ? 'bg-[#fdf6f5] text-[#e0997d] border-2 border-[#f0ccc3]'
                        : 'text-[#757575] hover:bg-[#fdf6f5]'
                    }`}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="w-full flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-[#ef4444] hover:bg-[#fdf6f5] rounded-xl transition-all duration-200 text-sm sm:text-base"
                >
                  <LogOut className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="truncate">Đăng xuất</span>
                </Link>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 min-w-0">
            <Outlet />
          </div>
        </div>
      </div>
    </Layout>
  );
}