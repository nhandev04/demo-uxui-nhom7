import { Layout } from '../components/layout/Layout';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Elegant Rose Bouquet',
      price: 1250000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1756752461877-90ebb73004c5?w=150',
      size: 'M',
      color: 'Hồng',
    },
    {
      id: 2,
      name: 'Spring Garden Mix',
      price: 890000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1765544182338-d2198afee27d?w=150',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50000;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <ShoppingBag className="w-24 h-24 text-[#f0ccc3] mx-auto mb-6" />
          <h2 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-4">
            Giỏ hàng trống
          </h2>
          <p className="text-[#757575] mb-8">
            Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg transition-all duration-200"
          >
            Khám phá sản phẩm
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#fdf6f5] to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mb-2">
            Giỏ hàng
          </h1>
          <p className="text-[#757575]">{cartItems.length} sản phẩm</p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#f5f5f5] p-6 hover:border-[#f0ccc3] transition-colors"
              >
                <div className="flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg text-[#424242] mb-1">{item.name}</h3>
                        {item.color && item.size && (
                          <p className="text-sm text-[#9e9e9e]">
                            Màu: {item.color} | Size: {item.size}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-[#fdf6f5] rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-[#757575]" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl text-[#e0997d]">
                        {item.price.toLocaleString()}₫
                      </span>
                      <div className="flex items-center border-2 border-[#f0ccc3] rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-10 h-10 hover:bg-[#fdf6f5] transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-10 h-10 hover:bg-[#fdf6f5] transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="sticky top-24 bg-white rounded-2xl border border-[#f5f5f5] p-6">
              <h3 className="text-xl text-[#424242] mb-6">Tổng đơn hàng</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-[#757575]">
                  <span>Tạm tính</span>
                  <span>{subtotal.toLocaleString()}₫</span>
                </div>
                <div className="flex items-center justify-between text-[#757575]">
                  <span>Phí vận chuyển</span>
                  <span>{shipping.toLocaleString()}₫</span>
                </div>
                <div className="pt-4 border-t border-[#f5f5f5]">
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-[#424242]">Tổng cộng</span>
                    <span className="text-2xl text-[#e0997d]">
                      {total.toLocaleString()}₫
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 mb-4"
              >
                Tiến hành thanh toán
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/products"
                className="block w-full py-4 text-center border-2 border-[#f0ccc3] text-[#b85a47] rounded-xl hover:bg-[#fdf6f5] transition-all duration-200"
              >
                Tiếp tục mua sắm
              </Link>

              {/* Voucher */}
              <div className="mt-6 pt-6 border-t border-[#f5f5f5]">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  className="w-full px-4 py-3 mb-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20"
                />
                <button className="w-full py-3 border-2 border-[#e0997d] text-[#e0997d] rounded-xl hover:bg-[#fdf6f5] transition-colors">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
