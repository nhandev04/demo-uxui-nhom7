import { Eye, EyeOff, Lock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    // Mock API call
    console.log('Reset password:', password);
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fdf6f5] via-white to-[#fcf1f2] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-[#f5f5f5] p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-['Playfair_Display'] text-2xl text-[#6b1f15] mb-4">
              Đặt lại mật khẩu thành công!
            </h2>
            <p className="text-[#757575] mb-8">
              Mật khẩu của bạn đã được thay đổi. Đang chuyển đến trang đăng nhập...
            </p>
          </div>
        </div>
      </div>
    );
  }

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
            Đặt lại mật khẩu
          </h1>
          <p className="text-[#757575]">Nhập mật khẩu mới của bạn</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#f5f5f5] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-sm text-[#757575] mb-2">
                Mật khẩu mới
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
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9e9e] hover:text-[#757575]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-[#9e9e9e] mt-2">
                Mật khẩu phải có ít nhất 8 ký tự
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-[#757575] mb-2">
                Xác nhận mật khẩu mới
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9e9e9e]" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9e9e] hover:text-[#757575]"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Đặt lại mật khẩu
            </button>
          </form>
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
