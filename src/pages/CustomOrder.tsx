import { Layout } from '../components/layout/Layout';
import { Phone, Mail, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    flowerType: '',
    color: '',
    wrappingPaper: '',
    budget: '',
    requirements: '',
  });

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#fdf6f5] to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-[#e0997d]" />
            <h1 className="font-['Playfair_Display'] text-4xl text-[#6b1f15]">
              Đặt hoa theo yêu cầu
            </h1>
          </div>
          <p className="text-[#757575] text-lg">
            Tạo nên bó hoa độc đáo, thiết kế riêng cho những khoảnh khắc đặc biệt của bạn
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Custom Order Form */}
          <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8 shadow-lg">
            <h2 className="text-2xl text-[#424242] mb-6">
              Thông tin đặt hàng
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#757575] mb-2">
                    Họ và tên <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#757575] mb-2">
                    Số điện thoại <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="0123 456 789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#757575] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#757575] mb-2">
                    Loại hoa mong muốn
                  </label>
                  <select
                    value={formData.flowerType}
                    onChange={(e) => setFormData({ ...formData, flowerType: e.target.value })}
                    className="w-full px-4 py-3 border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                  >
                    <option value="">Chọn loại hoa</option>
                    <option>Hồng</option>
                    <option>Tulip</option>
                    <option>Hướng dương</option>
                    <option>Ly</option>
                    <option>Cẩm chướng</option>
                    <option>Lan</option>
                    <option>Hoa baby</option>
                    <option>Hoa mix</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#757575] mb-2">
                    Màu sắc ưu tiên
                  </label>
                  <select
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-full px-4 py-3 border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                  >
                    <option value="">Chọn màu sắc</option>
                    <option>Đỏ</option>
                    <option>Hồng</option>
                    <option>Trắng</option>
                    <option>Vàng</option>
                    <option>Cam</option>
                    <option>Tím</option>
                    <option>Xanh</option>
                    <option>Mix màu</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#757575] mb-2">
                  Giấy bọc
                </label>
                <select
                  value={formData.wrappingPaper}
                  onChange={(e) => setFormData({ ...formData, wrappingPaper: e.target.value })}
                  className="w-full px-4 py-3 border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                >
                  <option value="">Chọn loại giấy gói</option>
                  <option>Giấy kraft nâu (vintage)</option>
                  <option>Giấy kraft trắng (tối giản)</option>
                  <option>Giấy mỹ thuật hoa văn</option>
                  <option>Giấy voan/lưới mềm</option>
                  <option>Giấy nhám cao cấp</option>
                  <option>Giấy bóng kính sang trọng</option>
                  <option>Giấy gấm/vải lụa</option>
                  <option>Không cần gói (để bình/giỏ)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[#757575] mb-2">
                  Ngân sách dự kiến (VNĐ)
                </label>
                <input
                  type="text"
                  placeholder="1,000,000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#757575] mb-2">
                  Yêu cầu đặc biệt
                </label>
                <textarea
                  rows={6}
                  placeholder="Mô tả chi tiết về bó hoa bạn mong muốn: dịp sử dụng, phong cách thiết kế, kích thước, yêu cầu đặc biệt khác..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-4 py-3 border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] resize-none"
                />
              </div>

              <div className="p-4 bg-[#fdf6f5] rounded-xl">
                <p className="text-sm text-[#757575]">
                  💡 <strong>Lưu ý:</strong> Đội ngũ tư vấn của Flora Garden sẽ liên hệ với bạn trong vòng 24h để xác nhận chi tiết và báo giá chính xác.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gửi yêu cầu đặt hoa
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-6">
              Thông tin liên hệ
            </h2>
            <p className="text-[#757575] mb-8 leading-relaxed">
              Đội ngũ tư vấn của Flora Garden luôn sẵn sàng hỗ trợ bạn tạo nên những bó hoa hoàn hảo nhất. 
              Với nhiều năm kinh nghiệm trong nghệ thuật cắm hoa, chúng tôi cam kết mang đến sản phẩm vượt trội cho mọi dịp đặc biệt.
            </p>

            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#fdf6f5] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#e0997d]" />
                </div>
                <div>
                  <h3 className="text-lg text-[#424242] mb-1">
                    Điện thoại
                  </h3>
                  <p className="text-[#757575] mb-2">
                    Gọi ngay để được tư vấn miễn phí
                  </p>
                  <a
                    href="tel:1900123456"
                    className="text-[#e0997d] hover:underline"
                  >
                    1900 123 456
                  </a>
                  <br />
                  <a
                    href="tel:0901234567"
                    className="text-[#e0997d] hover:underline"
                  >
                    090 123 4567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#fdf6f5] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#e0997d]" />
                </div>
                <div>
                  <h3 className="text-lg text-[#424242] mb-1">
                    Email
                  </h3>
                  <p className="text-[#757575] mb-2">
                    Gửi yêu cầu qua email để được báo giá chi tiết
                  </p>
                  <a
                    href="mailto:contact@floragarden.vn"
                    className="text-[#e0997d] hover:underline"
                  >
                    contact@floragarden.vn
                  </a>
                  <br />
                  <a
                    href="mailto:custom@floragarden.vn"
                    className="text-[#e0997d] hover:underline"
                  >
                    custom@floragarden.vn
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#fdf6f5] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#e0997d]" />
                </div>
                <div>
                  <h3 className="text-lg text-[#424242] mb-1">
                    Địa chỉ cửa hàng
                  </h3>
                  <p className="text-[#757575]">
                    123 Nguyễn Huệ, Phường Bến Nghé, Quận 1
                    <br />
                    TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#fdf6f5] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#e0997d]" />
                </div>
                <div>
                  <h3 className="text-lg text-[#424242] mb-1">
                    Giờ làm việc
                  </h3>
                  <p className="text-[#757575]">
                    Thứ 2 - Thứ 6: 8:00 - 20:00
                    <br />
                    Thứ 7 - Chủ nhật: 8:00 - 21:00
                    <br />
                    <span className="text-[#e0997d]">
                      Phục vụ 24/7 cho đơn online
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#fdf6f5] to-white p-8 rounded-2xl">
              <h3 className="text-xl text-[#424242] mb-4">
                Tại sao chọn dịch vụ Custom của Flora Garden?
              </h3>
              <ul className="space-y-3 text-[#757575]">
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d]">✓</span>
                  <span>Thiết kế độc quyền theo phong cách riêng của bạn</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d]">✓</span>
                  <span>Hoa tươi nhập khẩu cao cấp từ Ecuador, Hà Lan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d]">✓</span>
                  <span>Florist chuyên nghiệp với hơn 10 năm kinh nghiệm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d]">✓</span>
                  <span>Tư vấn miễn phí và báo giá chi tiết</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d]">✓</span>
                  <span>Giao hàng tận nơi, đúng giờ theo yêu cầu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}