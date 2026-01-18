import { Layout } from '../components/layout/Layout';
import { Heart, ShoppingBag, Star, Minus, Plus, Check, Truck, Shield, RefreshCw, ThumbsUp, Camera, Sparkles } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { products, productReviews } from '../data/mockData';
import { useState } from 'react';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || '1'));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Hồng');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl text-[#757575]">Không tìm thấy sản phẩm</h1>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const reviews = productReviews[product.id] || [];
  
  // Calculate rating breakdown
  const ratingBreakdown = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-[#fdf6f5] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#757575]">
            <Link to="/" className="hover:text-[#e0997d]">Trang chủ</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#e0997d]">Sản phẩm</Link>
            <span>/</span>
            <span className="text-[#424242]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Image */}
          <div>
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden bg-[#fafafa] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[600px] object-cover"
                />
                {product.originalPrice && (
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-[#ef4444] text-white rounded-full">
                      Giảm {Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-[#e0997d] cursor-pointer transition-colors">
                    <img src={product.image} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mb-4">
              <span className="px-3 py-1 bg-[#f9e6e1] text-[#e0997d] text-sm rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#f59e0b] text-[#f59e0b]'
                        : 'text-[#e0e0e0]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#757575]">{product.rating}</span>
              <span className="text-[#9e9e9e]">({product.reviews} đánh giá)</span>
            </div>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl text-[#e0997d]">
                {product.price.toLocaleString()}₫
              </span>
              {product.originalPrice && (
                <span className="text-xl text-[#9e9e9e] line-through">
                  {product.originalPrice.toLocaleString()}₫
                </span>
              )}
            </div>

            {/* Description - Bullet Points */}
            <div className="mb-8">
              <h3 className="text-[#424242] mb-3">Mô tả sản phẩm</h3>
              <ul className="space-y-2 text-[#757575]">
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d] mt-1">✓</span>
                  <span>Hoa tươi nhập khẩu cao cấp, đảm bảo chất lượng và độ tươi lâu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d] mt-1">✓</span>
                  <span>Thiết kế tinh tế bởi florist chuyên nghiệp với hơn 10 năm kinh nghiệm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d] mt-1">✓</span>
                  <span>Phù hợp cho nhiều dịp: sinh nhật, kỷ niệm, tri ân, chúc mừng</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d] mt-1">✓</span>
                  <span>Đi kèm thiệp chúc mừng và hướng dẫn chăm sóc chi tiết</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0997d] mt-1">✓</span>
                  <span>Giao hàng nhanh trong 2-4 giờ tại nội thành TP.HCM</span>
                </li>
              </ul>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-[#424242] mb-3">Số lượng</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-[#f0ccc3] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 hover:bg-[#fdf6f5] transition-colors flex items-center justify-center"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-16 text-center text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-12 h-12 hover:bg-[#fdf6f5] transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-[#757575]">
                  {product.stock} sản phẩm có sẵn
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Thêm vào giỏ hàng
              </button>
              <button className="w-14 h-14 border-2 border-[#f0ccc3] rounded-xl hover:bg-[#fdf6f5] hover:border-[#e0997d] transition-colors flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#e0997d]" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 bg-[#fdf6f5] rounded-xl">
              <div className="text-center">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-[#e0997d] mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-[#757575]">Giao hàng nhanh</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#e0997d] mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-[#757575]">Bảo đảm chất lượng</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-[#e0997d] mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-[#757575]">Đổi trả dễ dàng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
            <h2 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-8">
              Đánh giá sản phẩm
            </h2>

            {/* Rating Overview */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#f5f5f5]">
              {/* Overall Rating */}
              <div className="flex flex-col items-center justify-center p-6 bg-[#fdf6f5] rounded-xl">
                <div className="text-5xl text-[#e0997d] mb-2">{product.rating}</div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#f59e0b] text-[#f59e0b]'
                          : 'text-[#e0e0e0]'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[#757575]">{reviews.length} đánh giá</p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-20">
                      <span className="text-sm text-[#757575]">{rating}</span>
                      <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    </div>
                    <div className="flex-1 h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#e0997d]"
                        style={{
                          width: `${reviews.length > 0 ? (ratingBreakdown[rating as keyof typeof ratingBreakdown] / reviews.length) * 100 : 0}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-[#757575] w-12 text-right">
                      {ratingBreakdown[rating as keyof typeof ratingBreakdown]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review List */}
            <div className="space-y-6 mb-8">
              {reviews.map((review) => (
                <div key={review.id} className="pb-6 border-b border-[#f5f5f5] last:border-0">
                  <div className="flex gap-4">
                    <img
                      src={review.userAvatar}
                      alt={review.userName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-[#424242]">{review.userName}</h4>
                            {review.verified && (
                              <span className="px-2 py-0.5 bg-[#e8f5e9] text-[#4caf50] text-xs rounded">
                                ✓ Đã mua hàng
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? 'fill-[#f59e0b] text-[#f59e0b]'
                                      : 'text-[#e0e0e0]'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-[#9e9e9e]">
                              {new Date(review.date).toLocaleDateString('vi-VN')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#757575] leading-relaxed mb-3">
                        {review.content}
                      </p>
                      {review.images && review.images.length > 0 && (
                        <div className="flex gap-2 mb-3">
                          {review.images.map((img: string, idx: number) => (
                            <img
                              key={idx}
                              src={img}
                              alt=""
                              className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                            />
                          ))}
                        </div>
                      )}
                      <button className="flex items-center gap-2 text-sm text-[#757575] hover:text-[#e0997d] transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        Hữu ích ({review.likes})
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Write Review Button */}
            {!showReviewForm && (
              <button
                onClick={() => setShowReviewForm(true)}
                className="w-full py-4 border-2 border-[#e0997d] text-[#e0997d] rounded-xl hover:bg-[#fdf6f5] transition-colors"
              >
                Viết đánh giá
              </button>
            )}

            {/* Review Form */}
            {showReviewForm && (
              <div className="p-6 bg-[#fdf6f5] rounded-xl">
                <h3 className="text-lg text-[#424242] mb-4">Viết đánh giá của bạn</h3>
                
                {/* Rating Selection */}
                <div className="mb-4">
                  <label className="block text-sm text-[#757575] mb-2">Đánh giá của bạn</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setNewReviewRating(rating)}
                        className="p-2 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            rating <= newReviewRating
                              ? 'fill-[#f59e0b] text-[#f59e0b]'
                              : 'text-[#e0e0e0]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="mb-4">
                  <label className="block text-sm text-[#757575] mb-2">Nội dung đánh giá</label>
                  <textarea
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    rows={5}
                    placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm..."
                    className="w-full px-4 py-3 border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] resize-none"
                  />
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                  <label className="block text-sm text-[#757575] mb-2">Thêm hình ảnh (tùy chọn)</label>
                  <button className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-[#f0ccc3] rounded-xl hover:border-[#e0997d] transition-colors text-[#757575]">
                    <Camera className="w-5 h-5" />
                    Chọn ảnh
                  </button>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowReviewForm(false);
                      setNewReviewText('');
                      setNewReviewRating(5);
                    }}
                    className="flex-1 py-3 border border-[#f0ccc3] text-[#757575] rounded-xl hover:bg-white transition-colors"
                  >
                    Hủy
                  </button>
                  <button className="flex-1 py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] transition-colors">
                    Gửi đánh giá
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-8">
              Sản phẩm liên quan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#424242] mb-2 group-hover:text-[#e0997d] transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-lg text-[#e0997d]">
                      {product.price.toLocaleString()}₫
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Blog Posts */}
        <div className="mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-8">
            Bài viết liên quan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <Link to="/blog/1" className="group bg-white rounded-2xl overflow-hidden border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80"
                  alt="Cách chăm sóc hoa hồng"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#9e9e9e] mb-3">
                  <span>Hướng dẫn</span>
                  <span>•</span>
                  <span>5 phút đọc</span>
                </div>
                <h3 className="text-lg text-[#424242] mb-2 group-hover:text-[#e0997d] transition-colors">
                  Cách chăm sóc hoa hồng tươi lâu
                </h3>
                <p className="text-sm text-[#757575] line-clamp-2">
                  Bí quyết giúp hoa hồng của bạn tươi đẹp và giữ được hương thơm lâu hơn với những mẹo đơn giản.
                </p>
              </div>
            </Link>

            {/* Blog Post 2 */}
            <Link to="/blog/2" className="group bg-white rounded-2xl overflow-hidden border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&q=80"
                  alt="Ý nghĩa màu sắc hoa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#9e9e9e] mb-3">
                  <span>Kiến thức</span>
                  <span>•</span>
                  <span>7 phút đọc</span>
                </div>
                <h3 className="text-lg text-[#424242] mb-2 group-hover:text-[#e0997d] transition-colors">
                  Ý nghĩa màu sắc của hoa hồng
                </h3>
                <p className="text-sm text-[#757575] line-clamp-2">
                  Mỗi màu hoa hồng đều mang một thông điệp riêng. Tìm hiểu để chọn màu phù hợp cho từng dịp.
                </p>
              </div>
            </Link>

            {/* Blog Post 3 */}
            <Link to="/blog/3" className="group bg-white rounded-2xl overflow-hidden border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80"
                  alt="Chọn hoa theo dịp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#9e9e9e] mb-3">
                  <span>Gợi ý</span>
                  <span>•</span>
                  <span>6 phút đọc</span>
                </div>
                <h3 className="text-lg text-[#424242] mb-2 group-hover:text-[#e0997d] transition-colors">
                  Chọn hoa phù hợp cho từng dịp đặc biệt
                </h3>
                <p className="text-sm text-[#757575] line-clamp-2">
                  Hướng dẫn chi tiết về cách chọn loại hoa và kiểu cắm phù hợp với từng sự kiện quan trọng.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Custom Order CTA */}
        <div className="bg-gradient-to-r from-[#fdf6f5] to-white rounded-2xl border border-[#f5f5f5] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-10 h-10 text-[#e0997d]" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-['Playfair_Display'] text-2xl text-[#6b1f15] mb-2">
                Muốn thiết kế riêng cho mình?
              </h3>
              <p className="text-[#757575]">
                Đội ngũ florist chuyên nghiệp sẽ tạo nên bó hoa hoàn hảo theo phong cách và ngân sách của bạn
              </p>
            </div>
            <Link
              to="/custom-order"
              className="flex-shrink-0 px-6 py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Đặt hoa theo yêu cầu
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}