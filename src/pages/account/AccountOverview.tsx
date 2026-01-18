import { Package, Heart, MapPin, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AccountOverview() {
  const stats = [
    { icon: Package, label: 'Đơn hàng', value: '12', color: 'bg-[#e0997d]' },
    { icon: Heart, label: 'Yêu thích', value: '8', color: 'bg-[#de87ac]' },
    { icon: MapPin, label: 'Địa chỉ', value: '2', color: 'bg-[#10b981]' },
    { icon: TrendingUp, label: 'Tích lũy', value: '2.5M', color: 'bg-[#f59e0b]' },
  ];

  const recentOrders = [
    {
      id: 'ORD-2025-001',
      date: '2025-03-20',
      status: 'delivered',
      statusText: 'Đã giao',
      total: 1250000,
      image: 'https://images.unsplash.com/photo-1756752461877-90ebb73004c5?w=100',
    },
    {
      id: 'ORD-2025-002',
      date: '2025-03-18',
      status: 'shipping',
      statusText: 'Đang giao',
      total: 2040000,
      image: 'https://images.unsplash.com/photo-1765544182338-d2198afee27d?w=100',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-[#f5f5f5] p-6 hover:shadow-lg transition-shadow"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-3xl text-[#424242] mb-1">{stat.value}</p>
            <p className="text-sm text-[#9e9e9e]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl border border-[#f5f5f5] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-[#424242]">Đơn hàng gần đây</h2>
          <Link to="/account/orders" className="text-[#e0997d] hover:text-[#d4705b] transition-colors">
            Xem tất cả
          </Link>
        </div>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center gap-4 p-4 rounded-xl border border-[#f5f5f5] hover:border-[#f0ccc3] transition-colors"
            >
              <img src={order.image} alt="Order" className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#424242]">{order.id}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === 'delivered'
                        ? 'bg-[#10b981]/10 text-[#10b981]'
                        : 'bg-[#f59e0b]/10 text-[#f59e0b]'
                    }`}
                  >
                    {order.statusText}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#9e9e9e]">{order.date}</span>
                  <span className="text-[#e0997d]">{order.total.toLocaleString()}₫</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/account/profile"
          className="bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-2xl p-8 text-white hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl mb-2">Cập nhật thông tin</h3>
          <p className="text-white/80">Hoàn thiện hồ sơ để nhận ưu đãi đặc biệt</p>
        </Link>
        <Link
          to="/products"
          className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl p-8 text-white hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl mb-2">Khám phá sản phẩm</h3>
          <p className="text-white/80">Xem bộ sưu tập hoa tươi mới nhất</p>
        </Link>
      </div>
    </div>
  );
}
