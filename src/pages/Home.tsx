import { Layout } from '../components/layout/Layout';
import { ArrowRight, Star, ShoppingBag, Heart, TrendingUp, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, categories, blogPosts } from '../data/mockData';
import { useState } from 'react';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    {
      title: 'Bộ sưu tập mùa xuân 2025',
      subtitle: 'Hoa tươi sang trọng & nhẹ nhàng',
      image: 'https://images.unsplash.com/photo-1560113406-36a33855c51e?w=1200',
      cta: 'Khám phá ngay',
    },
    {
      title: 'Giảm giá đến 30%',
      subtitle: 'Cho đơn hàng đầu tiên',
      image: 'https://images.unsplash.com/photo-1756752461877-90ebb73004c5?w=1200',
      cta: 'Mua ngay',
    },
    {
      title: 'Hoa cưới đẳng cấp',
      subtitle: 'Thiết kế độc quyền cho ngày trọng đại',
      image: 'https://images.unsplash.com/photo-1724847664831-27b55fef3121?w=1200',
      cta: 'Xem thêm',
    },
  ];

  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <Layout>
      {/* Hero Banner / Carousel */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-[#fdf6f5] to-[#fcf1f2]">
        <div className="relative h-full">
          {banners.map((banner, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              </div>
              <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
                <div className="max-w-2xl text-white">
                  <h1 className="font-['Playfair_Display'] text-6xl mb-4">
                    {banner.title}
                  </h1>
                  <p className="text-2xl mb-8 text-white/90">{banner.subtitle}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {banner.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 bg-white border-y border-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: TrendingUp, title: 'Giao hàng nhanh', desc: 'Giao trong 2-4 giờ tại TP.HCM' },
              { icon: Award, title: 'Chất lượng cao', desc: 'Hoa tươi nhập khẩu trực tiếp' },
              { icon: Users, title: 'Tư vấn miễn phí', desc: 'Đội ngũ florist chuyên nghiệp' },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4 sm:p-6 rounded-xl hover:bg-[#fdf6f5] transition-colors duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#f9e6e1] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-[#e0997d]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-[#424242] mb-1">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-[#9e9e9e]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-24 bg-[#fdf6f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-sm sm:text-base text-[#e0997d] tracking-wider uppercase">Danh mục</span>
            <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl text-[#6b1f15] mt-2">
              Khám phá theo danh mục
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl lg:text-2xl mb-1">{category.name}</h3>
                  <p className="text-xs sm:text-sm text-white/80">{category.count} sản phẩm</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-sm sm:text-base text-[#e0997d] tracking-wider uppercase">Nổi bật</span>
              <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl text-[#6b1f15] mt-2">
                Sản phẩm nổi bật
              </h2>
            </div>
            <Link
              to="/products"
              className="text-[#e0997d] hover:text-[#d4705b] flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              Xem tất cả
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="py-16 sm:py-24 bg-[#fdf6f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-sm sm:text-base text-[#e0997d] tracking-wider uppercase">Mới nhất</span>
              <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl text-[#6b1f15] mt-2">
                Sản phẩm mới
              </h2>
            </div>
            <Link
              to="/products?filter=new"
              className="text-[#e0997d] hover:text-[#d4705b] flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              Xem tất cả
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog / News */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-sm sm:text-base text-[#e0997d] tracking-wider uppercase">Tin tức</span>
              <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl text-[#6b1f15] mt-2">
                Bài viết mới nhất
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-[#e0997d] hover:text-[#d4705b] flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              Xem tất cả
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#e0997d] text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#424242] mb-3 group-hover:text-[#e0997d] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#9e9e9e] text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-[#9e9e9e]">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Product Card Component
function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden bg-[#fafafa]">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        {product.originalPrice && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#ef4444] text-white text-sm rounded-full">
              Sale
            </span>
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#10b981] text-white text-sm rounded-full">
              Mới
            </span>
          </div>
        )}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white flex items-center justify-center">
          <Heart className="w-5 h-5 text-[#e0997d]" />
        </button>
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
            <span className="text-xl text-[#e0997d]">{product.price.toLocaleString()}₫</span>
            {product.originalPrice && (
              <span className="text-sm text-[#9e9e9e] line-through ml-2">
                {product.originalPrice.toLocaleString()}₫
              </span>
            )}
          </div>
          <button className="w-9 h-9 bg-[#fdf6f5] hover:bg-[#e0997d] rounded-lg flex items-center justify-center transition-colors duration-200 group/btn">
            <ShoppingBag className="w-4 h-4 text-[#e0997d] group-hover/btn:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}