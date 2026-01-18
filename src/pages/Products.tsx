import { Layout } from "../components/layout/Layout";
import {
  Filter,
  Grid,
  List,
  Star,
  ShoppingBag,
  Heart,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  DollarSign,
  Flower2,
  Palette,
  Calendar,
  X,
  RotateCcw,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import {
  products as allProducts,
  categories,
} from "../data/mockData";
import { useState } from "react";

export function Products() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const [viewMode, setViewMode] = useState<"grid" | "list">(
    "grid",
  );
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [selectedCategories, setSelectedCategories] = useState<
    string[]
  >(categoryFilter ? [categoryFilter] : []);
  const [selectedFlowerTypes, setSelectedFlowerTypes] =
    useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<
    string[]
  >([]);
  const [selectedOccasions, setSelectedOccasions] = useState<
    string[]
  >([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter products
  let products = [...allProducts];
  if (selectedCategories.length > 0) {
    products = products.filter((p) =>
      selectedCategories.includes(p.category),
    );
  }
  if (selectedFlowerTypes.length > 0) {
    products = products.filter((p) =>
      selectedFlowerTypes.includes(p.flowerType),
    );
  }
  if (selectedColors.length > 0) {
    products = products.filter((p) =>
      selectedColors.includes(p.color),
    );
  }
  if (selectedOccasions.length > 0) {
    products = products.filter((p) =>
      selectedOccasions.includes(p.occasion),
    );
  }
  products = products.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
  );

  // Sort products
  if (sortBy === "price-asc")
    products.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc")
    products.sort((a, b) => b.price - a.price);
  if (sortBy === "rating")
    products.sort((a, b) => b.rating - a.rating);

  // Filter options
  const flowerTypes = [
    "Hồng",
    "Tulip",
    "Hướng dương",
    "Ly",
    "Cẩm chướng",
    "Lan",
    "Hoa baby",
    "Hoa mix",
  ];
  const colors = [
    { name: "Đỏ", value: "Đỏ", colorClass: "#ef4444" },
    { name: "Hồng", value: "Hồng", colorClass: "#ec4899" },
    { name: "Trắng", value: "Trắng", colorClass: "#ffffff" },
    { name: "Vàng", value: "Vàng", colorClass: "#fbbf24" },
    { name: "Cam", value: "Cam", colorClass: "#f97316" },
    { name: "Tím", value: "Tím", colorClass: "#a855f7" },
    { name: "Xanh", value: "Xanh", colorClass: "#3b82f6" },
    { name: "Mix màu", value: "Mix màu", colorClass: "linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)" },
  ];
  const occasions = [
    { id: "gift", name: "Tặng/Biếu (Sinh nhật, kỷ niệm, lễ)" },
    { id: "decor", name: "Trang trí nhà cửa/Văn phòng" },
    {
      id: "event",
      name: "Sự kiện lớn (Cưới hỏi, Khai trương)",
    },
    { id: "sympathy", name: "Thể hiện sự đồng cảm/chia buồn" },
  ];

  // Check if any filters are active
  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedFlowerTypes.length > 0 ||
    selectedColors.length > 0 ||
    selectedOccasions.length > 0 ||
    priceRange[1] < 5000000;

  // Reset all filters
  const resetAllFilters = () => {
    setSelectedCategories([]);
    setSelectedFlowerTypes([]);
    setSelectedColors([]);
    setSelectedOccasions([]);
    setPriceRange([0, 5000000]);
  };

  // Get category name by id
  const getCategoryName = (id: string) => {
    const category = categories.find((c) => c.id === id);
    return category ? category.name : id;
  };

  // Get occasion name by id
  const getOccasionName = (id: string) => {
    const occasion = occasions.find((o) => o.id === id);
    return occasion ? occasion.name : id;
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-[#fdf6f5] to-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#6b1f15] mb-4">
            Sản phẩm
          </h1>
          <p className="text-sm sm:text-base text-[#757575]">
            Khám phá bộ sưu tập hoa tươi cao cấp
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Price Range */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-6">
                <h3 className="text-lg text-[#424242] mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#e0997d]" />
                  Khoảng giá
                </h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="100000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([
                        priceRange[0],
                        parseInt(e.target.value),
                      ])
                    }
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-[#757575]">
                    <span>0₫</span>
                    <span>
                      {priceRange[1].toLocaleString()}₫
                    </span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-6">
                <h3 className="text-lg text-[#424242] mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[#e0997d]" />
                  Danh mục
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(
                          cat.id,
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([
                              ...selectedCategories,
                              cat.id,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter(
                                (c) => c !== cat.id,
                              ),
                            );
                          }
                        }}
                        className="w-4 h-4 text-[#e0997d] border-[#f0ccc3] rounded focus:ring-2 focus:ring-[#e0997d]/20"
                      />
                      <span className="text-[#757575]">
                        {cat.name}
                      </span>
                      <span className="text-xs text-[#9e9e9e] ml-auto">
                        ({cat.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Flower Types */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-6">
                <h3 className="text-lg text-[#424242] mb-4 flex items-center gap-2">
                  <Flower2 className="w-5 h-5 text-[#e0997d]" />
                  Loại hoa
                </h3>
                <div className="space-y-3">
                  {flowerTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFlowerTypes.includes(
                          type,
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFlowerTypes([
                              ...selectedFlowerTypes,
                              type,
                            ]);
                          } else {
                            setSelectedFlowerTypes(
                              selectedFlowerTypes.filter(
                                (t) => t !== type,
                              ),
                            );
                          }
                        }}
                        className="w-4 h-4 text-[#e0997d] border-[#f0ccc3] rounded focus:ring-2 focus:ring-[#e0997d]/20"
                      />
                      <span className="text-[#757575]">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-6">
                <h3 className="text-lg text-[#424242] mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-[#e0997d]" />
                  Màu sắc
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => {
                        if (selectedColors.includes(color.value)) {
                          setSelectedColors(
                            selectedColors.filter(
                              (c) => c !== color.value,
                            ),
                          );
                        } else {
                          setSelectedColors([
                            ...selectedColors,
                            color.value,
                          ]);
                        }
                      }}
                      className={`relative w-10 h-10 rounded-full transition-all duration-200 ${
                        selectedColors.includes(color.value)
                          ? 'ring-4 ring-[#e0997d] ring-offset-2'
                          : 'ring-2 ring-gray-200 hover:ring-gray-300'
                      }`}
                      title={color.name}
                    >
                      {color.value === "Mix màu" ? (
                        <div
                          className="w-full h-full rounded-full"
                          style={{
                            background: color.colorClass,
                          }}
                        />
                      ) : (
                        <div
                          className={`w-full h-full rounded-full ${
                            color.value === "Trắng" ? 'border border-gray-300' : ''
                          }`}
                          style={{
                            backgroundColor: color.colorClass,
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasions */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-6">
                <h3 className="text-lg text-[#424242] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#e0997d]" />
                  Dịp
                </h3>
                <div className="space-y-3">
                  {occasions.map((occasion) => (
                    <label
                      key={occasion.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedOccasions.includes(
                          occasion.id,
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedOccasions([
                              ...selectedOccasions,
                              occasion.id,
                            ]);
                          } else {
                            setSelectedOccasions(
                              selectedOccasions.filter(
                                (o) => o !== occasion.id,
                              ),
                            );
                          }
                        }}
                        className="w-4 h-4 text-[#e0997d] border-[#f0ccc3] rounded focus:ring-2 focus:ring-[#e0997d]/20"
                      />
                      <span className="text-[#757575]">
                        {occasion.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-6">
                <h3 className="text-lg text-[#424242] mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#e0997d]" />
                  Đánh giá
                </h3>
                <div className="space-y-3">
                  {[5, 4, 3].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#e0997d] border-[#f0ccc3] rounded"
                      />
                      <div className="flex items-center gap-1">
                        {Array.from({ length: rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                            />
                          ),
                        )}
                        <span className="text-sm text-[#757575] ml-1">
                          trở lên
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8 bg-white rounded-xl border border-[#f5f5f5] p-4">
              <div className="flex items-center justify-between sm:block">
                <p className="text-sm sm:text-base text-[#757575]">
                  Hiển thị{" "}
                  <span className="text-[#424242]">
                    {products.length}
                  </span>{" "}
                  sản phẩm
                </p>
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#e0997d] text-white rounded-lg hover:bg-[#d4705b] transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  Bộ lọc
                  {hasActiveFilters && (
                    <span className="bg-white text-[#e0997d] text-xs px-2 py-0.5 rounded-full">
                      {selectedCategories.length + selectedFlowerTypes.length + selectedColors.length + selectedOccasions.length + (priceRange[1] < 5000000 ? 1 : 0)}
                    </span>
                  )}
                </button>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-[#757575] whitespace-nowrap">
                    Sắp xếp:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-[#fdf6f5] border border-[#f0ccc3] rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#e0997d]"
                  >
                    <option value="popular">Phổ biến</option>
                    <option value="price-asc">
                      Giá: Thấp - Cao
                    </option>
                    <option value="price-desc">
                      Giá: Cao - Thấp
                    </option>
                    <option value="rating">Đánh giá</option>
                    <option value="newest">Mới nhất</option>
                  </select>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg ${ 
                      viewMode === "grid"
                        ? "bg-[#e0997d] text-white"
                        : "bg-[#fdf6f5] text-[#757575]"
                    }`}
                  >
                    <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg ${ 
                      viewMode === "list"
                        ? "bg-[#e0997d] text-white"
                        : "bg-[#fdf6f5] text-[#757575]"
                    }`}
                  >
                    <List className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="mb-6 bg-white rounded-xl border border-[#f5f5f5] p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-[#757575]">Bộ lọc đang áp dụng:</span>
                  <button
                    onClick={resetAllFilters}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-[#ef4444] hover:bg-[#fef2f2] rounded-lg transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Đặt lại tất cả
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {/* Price Range Filter Tag */}
                  {priceRange[1] < 5000000 && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fdf6f5] border border-[#f0ccc3] rounded-lg text-sm">
                      <DollarSign className="w-3.5 h-3.5 text-[#e0997d]" />
                      <span className="text-[#424242]">
                        Giá: 0₫ - {priceRange[1].toLocaleString()}₫
                      </span>
                      <button
                        onClick={() => setPriceRange([0, 5000000])}
                        className="hover:bg-[#f0ccc3] rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3.5 h-3.5 text-[#757575]" />
                      </button>
                    </div>
                  )}

                  {/* Category Filter Tags */}
                  {selectedCategories.map((catId) => (
                    <div
                      key={catId}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fdf6f5] border border-[#f0ccc3] rounded-lg text-sm"
                    >
                      <Filter className="w-3.5 h-3.5 text-[#e0997d]" />
                      <span className="text-[#424242]">{getCategoryName(catId)}</span>
                      <button
                        onClick={() =>
                          setSelectedCategories(selectedCategories.filter((c) => c !== catId))
                        }
                        className="hover:bg-[#f0ccc3] rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3.5 h-3.5 text-[#757575]" />
                      </button>
                    </div>
                  ))}

                  {/* Flower Type Filter Tags */}
                  {selectedFlowerTypes.map((type) => (
                    <div
                      key={type}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fdf6f5] border border-[#f0ccc3] rounded-lg text-sm"
                    >
                      <Flower2 className="w-3.5 h-3.5 text-[#e0997d]" />
                      <span className="text-[#424242]">{type}</span>
                      <button
                        onClick={() =>
                          setSelectedFlowerTypes(selectedFlowerTypes.filter((t) => t !== type))
                        }
                        className="hover:bg-[#f0ccc3] rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3.5 h-3.5 text-[#757575]" />
                      </button>
                    </div>
                  ))}

                  {/* Color Filter Tags */}
                  {selectedColors.map((color) => (
                    <div
                      key={color}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fdf6f5] border border-[#f0ccc3] rounded-lg text-sm"
                    >
                      <Palette className="w-3.5 h-3.5 text-[#e0997d]" />
                      <span className="text-[#424242]">{color}</span>
                      <button
                        onClick={() =>
                          setSelectedColors(selectedColors.filter((c) => c !== color))
                        }
                        className="hover:bg-[#f0ccc3] rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3.5 h-3.5 text-[#757575]" />
                      </button>
                    </div>
                  ))}

                  {/* Occasion Filter Tags */}
                  {selectedOccasions.map((occasionId) => (
                    <div
                      key={occasionId}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fdf6f5] border border-[#f0ccc3] rounded-lg text-sm"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#e0997d]" />
                      <span className="text-[#424242]">{getOccasionName(occasionId)}</span>
                      <button
                        onClick={() =>
                          setSelectedOccasions(selectedOccasions.filter((o) => o !== occasionId))
                        }
                        className="hover:bg-[#f0ccc3] rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3.5 h-3.5 text-[#757575]" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Products */}
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-3 gap-6"
                  : "space-y-6"
              }
            >
              {products.map((product) =>
                viewMode === "grid" ? (
                  <ProductCardGrid
                    key={product.id}
                    product={product}
                  />
                ) : (
                  <ProductCardList
                    key={product.id}
                    product={product}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Order CTA Section */}
      <div className="bg-gradient-to-br from-[#fdf6f5] to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-[#f5f5f5] p-12 shadow-lg text-center">
            <Sparkles className="w-16 h-16 text-[#e0997d] mx-auto mb-6" />
            <h2 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mb-4">
              Không tìm thấy bó hoa ưng ý?
            </h2>
            <p className="text-[#757575] text-lg mb-8 max-w-2xl mx-auto">
              Đặt hoa theo yêu cầu riêng của bạn! Đội ngũ florist chuyên nghiệp sẽ tạo nên những bó hoa độc đáo, 
              phù hợp hoàn hảo với phong cách và dịp của bạn.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-[#757575]">
                <span className="text-[#e0997d]">✓</span>
                <span>Thiết kế độc quyền</span>
              </div>
              <div className="flex items-center gap-2 text-[#757575]">
                <span className="text-[#e0997d]">✓</span>
                <span>Hoa nhập khẩu cao cấp</span>
              </div>
              <div className="flex items-center gap-2 text-[#757575]">
                <span className="text-[#e0997d]">✓</span>
                <span>Tư vấn miễn phí</span>
              </div>
            </div>
            <Link
              to="/custom-order"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Đặt hoa theo yêu cầu
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMobileFilters(false)}
          />
          
          {/* Modal */}
          <div className="absolute inset-x-0 bottom-0 top-20 bg-white rounded-t-3xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#f5f5f5]">
              <h2 className="text-xl text-[#424242]">Bộ lọc</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f5f5f5] transition-colors"
              >
                <X className="w-5 h-5 text-[#757575]" />
              </button>
            </div>

            {/* Filters Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Price Range */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-4">
                <h3 className="text-base text-[#424242] mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#e0997d]" />
                  Khoảng giá
                </h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="100000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([
                        priceRange[0],
                        parseInt(e.target.value),
                      ])
                    }
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-[#757575]">
                    <span>0₫</span>
                    <span>
                      {priceRange[1].toLocaleString()}₫
                    </span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-4">
                <h3 className="text-base text-[#424242] mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[#e0997d]" />
                  Danh mục
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(
                          cat.id,
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([
                              ...selectedCategories,
                              cat.id,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter(
                                (c) => c !== cat.id,
                              ),
                            );
                          }
                        }}
                        className="w-4 h-4 text-[#e0997d] border-[#f0ccc3] rounded focus:ring-2 focus:ring-[#e0997d]/20"
                      />
                      <span className="text-[#757575] text-sm">
                        {cat.name}
                      </span>
                      <span className="text-xs text-[#9e9e9e] ml-auto">
                        ({cat.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Flower Types */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-4">
                <h3 className="text-base text-[#424242] mb-4 flex items-center gap-2">
                  <Flower2 className="w-5 h-5 text-[#e0997d]" />
                  Loại hoa
                </h3>
                <div className="space-y-3">
                  {flowerTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFlowerTypes.includes(
                          type,
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFlowerTypes([
                              ...selectedFlowerTypes,
                              type,
                            ]);
                          } else {
                            setSelectedFlowerTypes(
                              selectedFlowerTypes.filter(
                                (t) => t !== type,
                              ),
                            );
                          }
                        }}
                        className="w-4 h-4 text-[#e0997d] border-[#f0ccc3] rounded focus:ring-2 focus:ring-[#e0997d]/20"
                      />
                      <span className="text-[#757575] text-sm">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-4">
                <h3 className="text-base text-[#424242] mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-[#e0997d]" />
                  Màu sắc
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => {
                        if (selectedColors.includes(color.value)) {
                          setSelectedColors(
                            selectedColors.filter(
                              (c) => c !== color.value,
                            ),
                          );
                        } else {
                          setSelectedColors([
                            ...selectedColors,
                            color.value,
                          ]);
                        }
                      }}
                      className={`relative w-10 h-10 rounded-full transition-all duration-200 ${
                        selectedColors.includes(color.value)
                          ? 'ring-4 ring-[#e0997d] ring-offset-2'
                          : 'ring-2 ring-gray-200 hover:ring-gray-300'
                      }`}
                      title={color.name}
                    >
                      {color.value === "Mix màu" ? (
                        <div
                          className="w-full h-full rounded-full"
                          style={{
                            background: color.colorClass,
                          }}
                        />
                      ) : (
                        <div
                          className={`w-full h-full rounded-full ${
                            color.value === "Trắng" ? 'border border-gray-300' : ''
                          }`}
                          style={{
                            backgroundColor: color.colorClass,
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasions */}
              <div className="bg-white rounded-xl border border-[#f5f5f5] p-4">
                <h3 className="text-base text-[#424242] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#e0997d]" />
                  Dịp
                </h3>
                <div className="space-y-3">
                  {occasions.map((occasion) => (
                    <label
                      key={occasion.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedOccasions.includes(
                          occasion.id,
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedOccasions([
                              ...selectedOccasions,
                              occasion.id,
                            ]);
                          } else {
                            setSelectedOccasions(
                              selectedOccasions.filter(
                                (o) => o !== occasion.id,
                              ),
                            );
                          }
                        }}
                        className="w-4 h-4 text-[#e0997d] border-[#f0ccc3] rounded focus:ring-2 focus:ring-[#e0997d]/20"
                      />
                      <span className="text-[#757575] text-sm">
                        {occasion.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#f5f5f5] flex gap-3">
              <button
                onClick={resetAllFilters}
                className="flex-1 px-4 py-3 border-2 border-[#f0ccc3] text-[#757575] rounded-xl hover:bg-[#fdf6f5] transition-colors"
              >
                Đặt lại
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 px-4 py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] transition-colors"
              >
                Xem {products.length} sản phẩm
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

function ProductCardGrid({ product }: { product: any }) {
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
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white">
          <Heart className="w-5 h-5 text-[#e0997d]" />
        </button>
      </div>
      <div className="p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-[#424242] mb-2 group-hover:text-[#e0997d] transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
            <span className="text-sm text-[#757575]">
              {product.rating}
            </span>
          </div>
          <span className="text-xs text-[#9e9e9e]">
            ({product.reviews})
          </span>
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
          <button className="w-9 h-9 bg-[#fdf6f5] hover:bg-[#e0997d] rounded-lg flex items-center justify-center transition-colors group/btn">
            <ShoppingBag className="w-4 h-4 text-[#e0997d] group-hover/btn:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCardList({ product }: { product: any }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#f5f5f5] hover:border-[#f0ccc3] hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
        <div className="relative w-full sm:w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden">
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <Link to={`/products/${product.id}`}>
                <h3 className="text-base sm:text-xl text-[#424242] mb-2 group-hover:text-[#e0997d] transition-colors truncate">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                  <span className="text-xs sm:text-sm text-[#757575]">
                    {product.rating}
                  </span>
                </div>
                <span className="text-xs text-[#9e9e9e]">
                  ({product.reviews} đánh giá)
                </span>
              </div>
            </div>
            <button className="w-10 h-10 bg-[#fdf6f5] hover:bg-[#e0997d] rounded-lg flex items-center justify-center transition-colors group/btn flex-shrink-0">
              <Heart className="w-5 h-5 text-[#e0997d] group-hover/btn:text-white" />
            </button>
          </div>
          <p className="text-sm sm:text-base text-[#9e9e9e] mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-xl sm:text-2xl text-[#e0997d] whitespace-nowrap">
                {product.price.toLocaleString()}₫
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm text-[#9e9e9e] line-through ml-3 whitespace-nowrap">
                  {product.originalPrice.toLocaleString()}₫
                </span>
              )}
            </div>
            <Link
              to={`/products/${product.id}`}
              className="px-4 sm:px-6 py-3 bg-[#e0997d] text-white text-sm sm:text-base rounded-xl hover:bg-[#d4705b] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              Thêm vào giỏ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}