import { Eye, Package, Truck, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { orders } from '../../data/mockData';

export function AccountOrders() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-[#10b981]" />;
      case 'shipping':
        return <Truck className="w-5 h-5 text-[#f59e0b]" />;
      case 'processing':
        return <Package className="w-5 h-5 text-[#0ea5e9]" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-[#ef4444]" />;
      default:
        return <Package className="w-5 h-5 text-[#9e9e9e]" />;
    }
  };

  const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
      delivered: 'Đã giao',
      shipping: 'Đang giao',
      processing: 'Đang xử lý',
      cancelled: 'Đã hủy',
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status: string) => {
    const colorMap: Record<string, string> = {
      delivered: 'bg-[#10b981]/10 text-[#10b981]',
      shipping: 'bg-[#f59e0b]/10 text-[#f59e0b]',
      processing: 'bg-[#0ea5e9]/10 text-[#0ea5e9]',
      cancelled: 'bg-[#ef4444]/10 text-[#ef4444]',
    };
    return colorMap[status] || 'bg-[#9e9e9e]/10 text-[#9e9e9e]';
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="bg-white rounded-2xl border border-[#f5f5f5] p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl text-[#424242] mb-4 sm:mb-6">Đơn hàng của tôi</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-[#f5f5f5]">
          {['Tất cả', 'Đang xử lý', 'Đang giao', 'Đã giao', 'Đã hủy'].map((tab) => (
            <button
              key={tab}
              className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm bg-[#fdf6f5] text-[#757575] hover:bg-[#e0997d] hover:text-white transition-all whitespace-nowrap"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-[#f5f5f5] rounded-xl p-4 sm:p-6 hover:border-[#f0ccc3] transition-colors overflow-hidden"
            >
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-4 border-b border-[#f5f5f5]">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg text-[#424242] mb-1 truncate">{order.id}</h3>
                  <p className="text-xs sm:text-sm text-[#9e9e9e] truncate">Ngày đặt: {order.date}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {getStatusIcon(order.status)}
                  <span className={`px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-3 mb-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h4 className="text-sm sm:text-base text-[#424242] mb-1 truncate">{item.name}</h4>
                      <p className="text-xs sm:text-sm text-[#9e9e9e]">x{item.quantity}</p>
                    </div>
                    <span className="text-sm sm:text-base text-[#e0997d] flex-shrink-0 whitespace-nowrap">{item.price.toLocaleString()}₫</span>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#f5f5f5]">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-[#9e9e9e] mb-1">Tổng tiền</p>
                  <p className="text-xl sm:text-2xl text-[#e0997d] truncate">{order.total.toLocaleString()}₫</p>
                </div>
                <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                  {order.status === 'delivered' && (
                    <button className="flex-1 sm:flex-none px-3 sm:px-4 lg:px-6 py-3 border-2 border-[#f0ccc3] text-[#757575] text-xs sm:text-sm rounded-xl hover:bg-[#fdf6f5] transition-colors whitespace-nowrap">
                      Mua lại
                    </button>
                  )}
                  <Link
                    to={`/account/orders/${order.id}`}
                    className="flex-1 sm:flex-none px-3 sm:px-4 lg:px-6 py-3 bg-[#e0997d] text-white text-xs sm:text-sm rounded-xl hover:bg-[#d4705b] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Chi tiết</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}