import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#6b1f15] text-white/80">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#e0997d] to-[#de87ac] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <h3 className="text-xl sm:text-2xl text-white mb-2 font-['Montserrat']">
                Đăng ký nhận tin
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3 w-full md:w-auto md:min-w-[350px] lg:min-w-[400px]">
              <input
                type="email"
                placeholder="Email của bạn..."
                className="flex-1 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-[#e0997d] rounded-xl hover:bg-[#fdf6f5] transition-colors flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Gửi</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🌸</span>
              </div>
              <span className="font-['Montserrat'] text-xl sm:text-2xl text-white whitespace-nowrap">
                Flora Garden
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Nghệ thuật tạo nên những khoảnh khắc đáng nhớ với hoa tươi cao cấp
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-4">Sản phẩm</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link to="/products?category=bouquet" className="hover:text-[#e0997d] transition-colors">
                  Hoa tươi
                </Link>
              </li>
              <li>
                <Link to="/products?category=wedding" className="hover:text-[#e0997d] transition-colors">
                  Hoa cưới
                </Link>
              </li>
              <li>
                <Link to="/products?category=event" className="hover:text-[#e0997d] transition-colors">
                  Hoa sự kiện
                </Link>
              </li>
              <li>
                <Link to="/products?category=gift" className="hover:text-[#e0997d] transition-colors">
                  Quà tặng
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-4">Hỗ trợ</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link to="/about" className="hover:text-[#e0997d] transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#e0997d] transition-colors">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-[#e0997d] transition-colors">
                  Chính sách giao hàng
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-[#e0997d] transition-colors">
                  Đổi trả & Hoàn tiền
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#e0997d] transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Liên hệ</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e0997d] flex-shrink-0 mt-0.5" />
                <span>123 Lê Lợi, Quận 1<br />TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#e0997d] flex-shrink-0" />
                <a href="tel:0123456789" className="hover:text-[#e0997d] transition-colors">
                  0123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#e0997d] flex-shrink-0" />
                <a href="mailto:hello@floragarden.vn" className="hover:text-[#e0997d] transition-colors">
                  hello@floragarden.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Flora Garden. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-[#e0997d] transition-colors">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-[#e0997d] transition-colors">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}