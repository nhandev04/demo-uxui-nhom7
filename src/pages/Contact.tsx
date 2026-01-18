import { Layout } from '../components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-[#fdf6f5] to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-[#757575]">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#f5f5f5] p-6">
              <div className="w-12 h-12 bg-[#e0997d] rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg text-[#424242] mb-2">Địa chỉ</h3>
              <p className="text-[#757575]">
                123 Lê Lợi, Phường Bến Thành<br />
                Quận 1, TP. Hồ Chí Minh
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#f5f5f5] p-6">
              <div className="w-12 h-12 bg-[#de87ac] rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg text-[#424242] mb-2">Điện thoại</h3>
              <p className="text-[#757575]">
                Hotline: 0123 456 789<br />
                Office: (028) 1234 5678
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#f5f5f5] p-6">
              <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg text-[#424242] mb-2">Email</h3>
              <p className="text-[#757575]">
                hello@floragarden.vn<br />
                support@floragarden.vn
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#f5f5f5] p-6">
              <div className="w-12 h-12 bg-[#f59e0b] rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg text-[#424242] mb-2">Giờ làm việc</h3>
              <p className="text-[#757575]">
                Thứ 2 - Thứ 7: 8:00 - 20:00<br />
                Chủ nhật: 9:00 - 18:00
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
              <h2 className="text-2xl text-[#424242] mb-6">Gửi tin nhắn cho chúng tôi</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#757575] mb-2">Họ và tên *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#757575] mb-2">Email *</label>
                    <input
                      type="email"
                      required
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
                    <label className="block text-sm text-[#757575] mb-2">Chủ đề</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="order">Đặt hàng</option>
                      <option value="delivery">Giao hàng</option>
                      <option value="product">Sản phẩm</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#757575] mb-2">Nội dung *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl border border-[#f5f5f5] p-4">
            <div className="aspect-video bg-[#fdf6f5] rounded-xl flex items-center justify-center">
              <p className="text-[#9e9e9e]">Google Maps sẽ được tích hợp ở đây</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}