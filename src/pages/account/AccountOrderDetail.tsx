import { ArrowLeft, Package, Truck, CheckCircle, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { orders } from '../../data/mockData';

export function AccountOrderDetail() {
  const { orderId } = useParams();
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return <div>Không tìm thấy đơn hàng</div>;
  }

  const timeline = [
    { label: 'Đơn hàng đã đặt', date: order.date, completed: true },
    { label: 'Đã xác nhận', date: order.date, completed: true },
    { label: 'Đang giao hàng', date: order.date, completed: order.status !== 'processing' },
    { label: 'Đã giao hàng', date: order.date, completed: order.status === 'delivered' },
  ];

  return (
    <div className="space-y-6">
      <Link
        to="/account/orders"
        className="inline-flex items-center gap-2 text-[#757575] hover:text-[#e0997d] transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Quay lại danh sách
      </Link>

      <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#f5f5f5]">
          <div>
            <h2 className="text-2xl text-[#424242] mb-2">Chi tiết đơn hàng</h2>
            <p className="text-[#9e9e9e]">Mã đơn hàng: {order.id}</p>
          </div>
          <span className="px-4 py-2 bg-[#10b981]/10 text-[#10b981] rounded-full">
            {order.status === 'delivered' ? 'Đã giao' : order.status === 'shipping' ? 'Đang giao' : 'Đang xử lý'}
          </span>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h3 className="text-lg text-[#424242] mb-6">Trạng thái đơn hàng</h3>
          <div className="space-y-6">
            {timeline.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-[#10b981]' : 'bg-[#f5f5f5]'
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-[#9e9e9e]" />
                    )}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className={`absolute left-5 top-10 w-0.5 h-12 ${step.completed ? 'bg-[#10b981]' : 'bg-[#f5f5f5]'}`} />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <p className={`${step.completed ? 'text-[#424242]' : 'text-[#9e9e9e]'}`}>
                    {step.label}
                  </p>
                  {step.completed && <p className="text-sm text-[#9e9e9e] mt-1">{step.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Items */}
        <div className="mb-8 pb-8 border-b border-[#f5f5f5]">
          <h3 className="text-lg text-[#424242] mb-6">Sản phẩm</h3>
          <div className="space-y-4">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-[#fdf6f5] rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-[#424242] mb-1">{item.name}</h4>
                  <p className="text-sm text-[#9e9e9e]">Số lượng: {item.quantity}</p>
                </div>
                <span className="text-xl text-[#e0997d]">{item.price.toLocaleString()}₫</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mb-8 pb-8 border-b border-[#f5f5f5]">
          <h3 className="text-lg text-[#424242] mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#e0997d]" />
            Địa chỉ giao hàng
          </h3>
          <div className="p-4 bg-[#fdf6f5] rounded-xl text-[#757575]">
            <p className="text-[#424242] mb-2">Nguyễn Văn A</p>
            <p className="mb-1">0123 456 789</p>
            <p>123 Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh</p>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="text-lg text-[#424242] mb-4">Tổng đơn hàng</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-[#757575]">
              <span>Tạm tính</span>
              <span>{(order.total - 50000).toLocaleString()}₫</span>
            </div>
            <div className="flex justify-between text-[#757575]">
              <span>Phí vận chuyển</span>
              <span>50,000₫</span>
            </div>
            <div className="flex justify-between pt-4 border-t border-[#f5f5f5]">
              <span className="text-lg text-[#424242]">Tổng cộng</span>
              <span className="text-2xl text-[#e0997d]">{order.total.toLocaleString()}₫</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
