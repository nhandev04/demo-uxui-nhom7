import { Eye, EyeOff, Lock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function ChangePassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate new password match
    if (newPassword !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    
    // Validate new password length
    if (newPassword.length < 8) {
      alert('Mật khẩu phải có ít nhất 8 ký tự!');
      return;
    }
    
    // Mock API call
    console.log('Change password:', newPassword);
    setIsSuccess(true);
    
    setTimeout(() => {
      navigate('/account');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fdf6f5] via-white to-[#fcf1f2] flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-[#f5f5f5] p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-['Playfair_Display'] text-2xl text-[#6b1f15] mb-4">
              Đổi mật khẩu thành công!
            </h2>
            <p className="text-[#757575] mb-8">
              Mật khẩu của bạn đã được cập nhật. Đang chuyển về tài khoản...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf6f5] via-white to-[#fcf1f2] flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          {/* Lock Icon */}
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-2">
            Đặt Lại Mật Khẩu
          </h1>
          <p className="text-[#757575]">Nhập mật khẩu mới của bạn</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#f5f5f5] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-sm text-[#757575] mb-2">
                Mật Khẩu Mới
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Nhập mật khẩu mới..."
                  className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9e9e] hover:text-[#757575]"
                >
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-[#9e9e9e] mt-2">
                Tối thiểu 8 ký tự, chứa chữ hoa, chữ thường và số
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-[#757575] mb-2">
                Xác Nhận Mật Khẩu
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Nhập lại mật khẩu..."
                  className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Đặt Lại Mật Khẩu
            </button>
          </form>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link 
            to="/login" 
            className="text-sm text-[#757575] hover:text-[#e0997d] transition-colors"
          >
            Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}