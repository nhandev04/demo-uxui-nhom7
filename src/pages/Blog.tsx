import { Layout } from '../components/layout/Layout';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';
import { useState } from 'react';

export function Blog() {
  const categories = ['Tất cả', 'Hướng dẫn', 'Chăm sóc', 'Xu hướng', 'Sự kiện'];
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  return (
    <Layout>
      <div className="bg-gradient-to-br from-[#fdf6f5] to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mb-4">
            Tin tức & Blog
          </h1>
          <p className="text-[#757575]">Khám phá những bí quyết chăm sóc hoa và xu hướng mới nhất</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#e0997d] text-white shadow-lg'
                  : 'bg-white border-2 border-[#f0ccc3] text-[#757575] hover:border-[#e0997d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
                <h3 className="text-xl text-[#424242] mb-3 group-hover:text-[#e0997d] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#9e9e9e] text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-[#9e9e9e] mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#f5f5f5]">
                  <span className="text-sm text-[#9e9e9e]">{post.date}</span>
                  <span className="text-[#e0997d] group-hover:gap-2 flex items-center gap-1 transition-all">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}