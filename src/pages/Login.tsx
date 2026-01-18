import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production, this would call an API
    console.log('Login:', { email, password });
    navigate('/account');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf6f5] via-white to-[#fcf1f2] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">🌸</span>
            </div>
          </Link>
          <h1 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-2">
            Chào mừng trở lại
          </h1>
          <p className="text-[#757575]">Đăng nhập để tiếp tục mua sắm</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#f5f5f5] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm text-[#757575] mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9e9e9e]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-[#757575] mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9e9e9e]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9e9e] hover:text-[#757575]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#e0997d] border-[#f0ccc3] rounded focus:ring-2 focus:ring-[#e0997d]/20"
                />
                <span className="text-sm text-[#757575]">Ghi nhớ đăng nhập</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-[#e0997d] hover:text-[#d4705b] transition-colors"
              >
                Quên mật khẩu?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Đăng nhập
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#f5f5f5]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#9e9e9e]">Hoặc đăng nhập với</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 border-2 border-[#f0ccc3] rounded-xl hover:bg-[#fdf6f5] hover:border-[#e0997d] transition-all duration-200 flex items-center justify-center gap-2">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              <span className="text-[#757575]">Google</span>
            </button>
            <button className="py-3 border-2 border-[#f0ccc3] rounded-xl hover:bg-[#fdf6f5] hover:border-[#e0997d] transition-all duration-200 flex items-center justify-center gap-2">
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
              <span className="text-[#757575]">Facebook</span>
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-[#757575] mt-6">
            Chưa có tài khoản?{' '}
            <Link to="/register" className="text-[#e0997d] hover:text-[#d4705b] transition-colors">
              Đăng ký ngay
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-[#757575] hover:text-[#e0997d] transition-colors">
            ← Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
