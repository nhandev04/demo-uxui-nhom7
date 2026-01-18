import { Layout } from '../components/layout/Layout';
import { MapPin, CreditCard, Truck, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    note: '',
    paymentMethod: 'cod',
    shippingMethod: 'standard',
  });

  const cartItems = [
    {
      name: 'Elegant Rose Bouquet',
      price: 1250000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1756752461877-90ebb73004c5?w=100',
    },
    {
      name: 'Spring Garden Mix',
      price: 890000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1765544182338-d2198afee27d?w=100',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50000;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = 'ORD-' + Date.now();
    navigate(`/order-confirmation/${orderId}`);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-[#fdf6f5] to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mb-6">
            Thanh toán
          </h1>
          {/* Steps */}
          <div className="flex items-center gap-4 mb-8">
            {[
              { num: 1, label: 'Địa chỉ giao hàng', icon: MapPin },
              { num: 2, label: 'Phương thức thanh toán', icon: CreditCard },
              { num: 3, label: 'Xác nhận', icon: Check },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= s.num
                        ? 'bg-[#e0997d] text-white'
                        : 'bg-[#f5f5f5] text-[#9e9e9e]'
                    }`}
                  >
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-sm ${
                      step >= s.num ? 'text-[#424242]' : 'text-[#9e9e9e]'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {idx < 2 && (
                  <div
                    className={`h-0.5 flex-1 mx-4 ${
                      step > s.num ? 'bg-[#e0997d]' : 'bg-[#f5f5f5]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Info */}
            <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
              <h2 className="text-2xl text-[#424242] mb-6">Thông tin giao hàng</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#757575] mb-2">Họ và tên *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#757575] mb-2">Số điện thoại *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-[#757575] mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-[#757575] mb-2">Địa chỉ *</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#757575] mb-2">Tỉnh/Thành phố *</label>
                  <select
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                  >
                    <option value="">Chọn</option>
                    <option value="hcm">TP. Hồ Chí Minh</option>
                    <option value="hn">Hà Nội</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#757575] mb-2">Quận/Huyện *</label>
                  <select
                    required
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d]"
                  >
                    <option value="">Chọn</option>
                    <option value="1">Quận 1</option>
                    <option value="2">Quận 2</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-[#757575] mb-2">Ghi chú</label>
                  <textarea
                    rows={3}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
              <h2 className="text-2xl text-[#424242] mb-6">Phương thức thanh toán</h2>
              <div className="space-y-3">
                {[
                  { id: 'cod', name: 'Thanh toán khi nhận hàng (COD)' },
                  { id: 'bank', name: 'Chuyển khoản ngân hàng' },
                  { id: 'momo', name: 'Ví MoMo' },
                  { id: 'card', name: 'Thẻ tín dụng/Ghi nợ' },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      formData.paymentMethod === method.id
                        ? 'border-[#e0997d] bg-[#fdf6f5]'
                        : 'border-[#f5f5f5] hover:border-[#f0ccc3]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="w-5 h-5 text-[#e0997d]"
                    />
                    <span className="text-[#424242]">{method.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 bg-white rounded-2xl border border-[#f5f5f5] p-6">
              <h3 className="text-xl text-[#424242] mb-6">Đơn hàng</h3>
              <div className="space-y-4 mb-6">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="text-sm text-[#424242] mb-1">{item.name}</h4>
                      <p className="text-xs text-[#9e9e9e]">x{item.quantity}</p>
                    </div>
                    <span className="text-sm text-[#e0997d]">{(item.price * item.quantity).toLocaleString()}₫</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-6 pt-6 border-t border-[#f5f5f5]">
                <div className="flex justify-between text-[#757575]">
                  <span>Tạm tính</span>
                  <span>{subtotal.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between text-[#757575]">
                  <span>Phí vận chuyển</span>
                  <span>{shipping.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[#f5f5f5]">
                  <span className="text-lg text-[#424242]">Tổng cộng</span>
                  <span className="text-2xl text-[#e0997d]">{total.toLocaleString()}₫</span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
