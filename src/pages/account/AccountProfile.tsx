import { Save, Camera, Lock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AccountProfile() {
  const [formData, setFormData] = useState({
    fullName: 'Nguyễn Văn A',
    email: 'nguyenvana@email.com',
    phone: '0123 456 789',
    birthday: '1990-01-01',
    gender: 'male',
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cập nhật thông tin thành công!');
  };

  return (
    <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
      <h2 className="text-2xl text-[#424242] mb-8">Thông tin cá nhân</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-6 pb-6 border-b border-[#f5f5f5]">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">N</span>
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 w-8 h-8 bg-[#e0997d] rounded-full flex items-center justify-center text-white hover:bg-[#d4705b] transition-colors"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h3 className="text-lg text-[#424242] mb-1">Ảnh đại diện</h3>
            <p className="text-sm text-[#9e9e9e]">JPG, PNG. Tối đa 2MB</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[#757575] mb-2">Họ và tên</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
            />
          </div>
          <div>
            <label className="block text-sm text-[#757575] mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
            />
          </div>
          <div>
            <label className="block text-sm text-[#757575] mb-2">Số điện thoại</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
            />
          </div>
          <div>
            <label className="block text-sm text-[#757575] mb-2">Ngày sinh</label>
            <input
              type="date"
              value={formData.birthday}
              onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
              className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-[#757575] mb-2">Giới tính</label>
            <div className="flex gap-4">
              {[
                { value: 'male', label: 'Nam' },
                { value: 'female', label: 'Nữ' },
                { value: 'other', label: 'Khác' },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={option.value}
                    checked={formData.gender === option.value}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-5 h-5 text-[#e0997d]"
                  />
                  <span className="text-[#757575]">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-6 border-t border-[#f5f5f5]">
          <button
            type="submit"
            className="px-8 py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Lưu thay đổi
          </button>
          <button
            type="button"
            className="px-8 py-3 border-2 border-[#f0ccc3] text-[#757575] rounded-xl hover:bg-[#fdf6f5] transition-colors"
          >
            Hủy
          </button>
        </div>
      </form>

      {/* Security Section */}
      <div className="mt-8 pt-8 border-t border-[#f5f5f5]">
        <h3 className="text-xl text-[#424242] mb-4">Bảo mật</h3>
        <div className="bg-[#fdf6f5] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-[#e0997d]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg text-[#424242] mb-1">Mật khẩu</h4>
              <p className="text-sm text-[#757575]">
                Cập nhật mật khẩu của bạn để bảo vệ tài khoản
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate('/change-password')}
            className="px-6 py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] transition-colors whitespace-nowrap"
          >
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
}