import { MapPin, Plus, Edit, Trash2, Check } from 'lucide-react';
import { addresses } from '../../data/mockData';
import { useState } from 'react';

export function AccountAddresses() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-[#424242]">Sổ địa chỉ</h2>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Thêm địa chỉ mới
          </button>
        </div>

        {showForm && (
          <div className="mb-8 p-6 bg-[#fdf6f5] rounded-xl">
            <h3 className="text-lg text-[#424242] mb-4">Địa chỉ mới</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full px-4 py-3 bg-white border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full px-4 py-3 bg-white border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
              />
              <input
                type="text"
                placeholder="Địa chỉ"
                className="md:col-span-2 w-full px-4 py-3 bg-white border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
              />
              <select className="w-full px-4 py-3 bg-white border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]">
                <option>Tỉnh/Thành phố</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Hà Nội</option>
              </select>
              <select className="w-full px-4 py-3 bg-white border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]">
                <option>Quận/Huyện</option>
                <option>Quận 1</option>
                <option>Quận 2</option>
              </select>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <input type="checkbox" className="w-5 h-5 text-[#e0997d]" />
              <span className="text-[#757575]">Đặt làm địa chỉ mặc định</span>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="px-6 py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] transition-colors">
                Lưu địa chỉ
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-3 border-2 border-[#f0ccc3] text-[#757575] rounded-xl hover:bg-white transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`p-6 rounded-xl border-2 transition-colors ${
                address.isDefault
                  ? 'border-[#e0997d] bg-[#fdf6f5]'
                  : 'border-[#f5f5f5] hover:border-[#f0ccc3]'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#e0997d]" />
                  <h3 className="text-lg text-[#424242]">{address.name}</h3>
                </div>
                {address.isDefault && (
                  <span className="px-3 py-1 bg-[#e0997d] text-white text-xs rounded-full flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Mặc định
                  </span>
                )}
              </div>
              <div className="text-[#757575] mb-4 space-y-1">
                <p>{address.phone}</p>
                <p>{address.address}</p>
                <p>{address.city}</p>
              </div>
              <div className="flex gap-3 pt-4 border-t border-[#f5f5f5]">
                <button className="flex-1 py-2 border-2 border-[#f0ccc3] text-[#757575] rounded-lg hover:bg-[#fdf6f5] transition-colors flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Sửa
                </button>
                {!address.isDefault && (
                  <button className="flex-1 py-2 border-2 border-[#ef4444]/20 text-[#ef4444] rounded-lg hover:bg-[#ef4444]/5 transition-colors flex items-center justify-center gap-2">
                    <Trash2 className="w-4 h-4" />
                    Xóa
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
