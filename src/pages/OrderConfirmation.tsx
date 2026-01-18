import { Layout } from '../components/layout/Layout';
import { CheckCircle, Package, Truck, Home, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export function OrderConfirmation() {
  const { orderId } = useParams();

  const orderDetails = {
    id: orderId,
    date: new Date().toLocaleDateString('vi-VN'),
    total: 3390000,
    items: [
      { name: 'Elegant Rose Bouquet', quantity: 2, price: 1250000 },
      { name: 'Spring Garden Mix', quantity: 1, price: 890000 },
    ],
    shipping: {
      name: 'Nguyễn Văn A',
      phone: '0123 456 789',
      address: '123 Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh',
    },
  };

  return (
    <Layout>
      <div className="min-h-[600px] bg-gradient-to-br from-[#fdf6f5] to-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mb-4">
              Đặt hàng thành công!
            </h1>
            <p className="text-[#757575] text-lg mb-2">
              Cảm ơn bạn đã đặt hàng tại Flora Garden
            </p>
            <p className="text-[#9e9e9e]">
              Mã đơn hàng: <span className="text-[#e0997d]">{orderId}</span>
            </p>
          </div>

          {/* Order Timeline */}
          <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8 mb-8">
            <h2 className="text-xl text-[#424242] mb-6">Trạng thái đơn hàng</h2>
            <div className="space-y-6">
              {[
                { icon: Package, label: 'Đơn hàng đã được xác nhận', active: true },
                { icon: Package, label: 'Đang chuẩn bị hàng', active: false },
                { icon: Truck, label: 'Đang giao hàng', active: false },
                { icon: Home, label: 'Đã giao hàng', active: false },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.active
                        ? 'bg-[#e0997d] text-white'
                        : 'bg-[#f5f5f5] text-[#9e9e9e]'
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span
                    className={step.active ? 'text-[#424242]' : 'text-[#9e9e9e]'}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8 mb-8">
            <h2 className="text-xl text-[#424242] mb-6">Chi tiết đơn hàng</h2>
            <div className="space-y-4 mb-6 pb-6 border-b border-[#f5f5f5]">
              {orderDetails.items.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="text-[#757575]">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="text-[#424242]">
                    {(item.price * item.quantity).toLocaleString()}₫
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-[#757575]">
                <span>Tạm tính</span>
                <span>3,340,000₫</span>
              </div>
              <div className="flex justify-between text-[#757575]">
                <span>Phí vận chuyển</span>
                <span>50,000₫</span>
              </div>
            </div>
            <div className="flex justify-between pt-4 border-t border-[#f5f5f5]">
              <span className="text-lg text-[#424242]">Tổng cộng</span>
              <span className="text-2xl text-[#e0997d]">
                {orderDetails.total.toLocaleString()}₫
              </span>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8 mb-8">
            <h2 className="text-xl text-[#424242] mb-6">Thông tin giao hàng</h2>
            <div className="text-[#757575]">
              <p className="text-[#424242] mb-2">{orderDetails.shipping.name}</p>
              <p className="mb-1">{orderDetails.shipping.phone}</p>
              <p>{orderDetails.shipping.address}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/account/orders"
              className="py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              Xem đơn hàng
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="py-4 border-2 border-[#f0ccc3] text-[#b85a47] rounded-xl hover:bg-[#fdf6f5] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}