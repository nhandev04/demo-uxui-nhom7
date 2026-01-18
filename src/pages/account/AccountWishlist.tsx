import { Heart, ShoppingBag, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/mockData';

export function AccountWishlist() {
  const wishlistItems = products.slice(0, 6);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-[#424242]">Danh sách yêu thích</h2>
          <p className="text-[#9e9e9e]">{wishlistItems.length} sản phẩm</p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-[#f0ccc3] mx-auto mb-6" />
            <h3 className="text-xl text-[#757575] mb-4">Chưa có sản phẩm yêu thích</h3>
            <Link
              to="/products"
              className="inline-block px-8 py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] transition-colors"
            >
              Khám phá sản phẩm
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-xl transition-all duration-300"
              >
                <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <X className="w-5 h-5 text-[#ef4444]" />
                </button>
                <div className="relative h-64 overflow-hidden bg-[#fafafa]">
                  <Link to={`/products/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                </div>
                <div className="p-5">
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-[#424242] mb-2 group-hover:text-[#e0997d] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                      <span className="text-sm text-[#757575]">{product.rating}</span>
                    </div>
                    <span className="text-xs text-[#9e9e9e]">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl text-[#e0997d]">
                        {product.price.toLocaleString()}₫
                      </span>
                      {product.originalPrice && (
                        <div className="text-sm text-[#9e9e9e] line-through">
                          {product.originalPrice.toLocaleString()}₫
                        </div>
                      )}
                    </div>
                    <button className="w-10 h-10 bg-[#e0997d] hover:bg-[#d4705b] rounded-lg flex items-center justify-center transition-colors">
                      <ShoppingBag className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
        <h3 className="text-xl text-[#424242] mb-6">Có thể bạn cũng thích</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {products.slice(6, 10).map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-sm text-[#424242] group-hover:text-[#e0997d] transition-colors line-clamp-1 mb-2">
                {product.name}
              </h4>
              <span className="text-[#e0997d]">{product.price.toLocaleString()}₫</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
