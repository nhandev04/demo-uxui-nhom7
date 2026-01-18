import { Layout } from '../components/layout/Layout';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/mockData';

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl text-[#757575]">Không tìm thấy bài viết</h1>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[500px] bg-[#6b1f15]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-6 text-white">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Quay lại
            </Link>
            <span className="inline-block px-3 py-1 bg-[#e0997d] rounded-full text-sm mb-4">
              {post.category}
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-24">
              <h3 className="text-lg text-[#424242] mb-4">Chia sẻ</h3>
              <div className="space-y-3">
                <button className="w-full py-3 bg-[#3b5998] text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Facebook className="w-5 h-5" />
                  Facebook
                </button>
                <button className="w-full py-3 bg-[#1da1f2] text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Twitter className="w-5 h-5" />
                  Twitter
                </button>
                <button className="w-full py-3 bg-[#fdf6f5] text-[#e0997d] border-2 border-[#f0ccc3] rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Sao chép link
                </button>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <div className="md:col-span-3">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#757575] leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <p className="text-[#757575] leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mt-12 mb-6">
                Lợi ích của việc chăm sóc hoa đúng cách
              </h2>

              <p className="text-[#757575] leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <ul className="list-disc list-inside space-y-2 text-[#757575] mb-8">
                <li>Hoa tươi lâu hơn, giữ được vẻ đẹp tự nhiên</li>
                <li>Tiết kiệm chi phí mua hoa mới</li>
                <li>Tạo không gian sống xanh, thân thiện với môi trường</li>
                <li>Mang lại cảm giác thư giãn và hạnh phúc</li>
              </ul>

              <img
                src={post.image}
                alt="Hướng dẫn chăm sóc hoa"
                className="w-full rounded-2xl mb-8"
              />

              <h3 className="font-['Playfair_Display'] text-2xl text-[#6b1f15] mt-10 mb-4">
                Các bước chăm sóc cơ bản
              </h3>

              <p className="text-[#757575] leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#f5f5f5]">
              <span className="text-[#757575]">Tags:</span>
              {['Hoa tươi', 'Chăm sóc', 'Hướng dẫn'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#fdf6f5] text-[#e0997d] text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-16 border-t border-[#f5f5f5]">
          <h2 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-8">
            Bài viết liên quan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="group"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg text-[#424242] group-hover:text-[#e0997d] transition-colors mb-2 line-clamp-2">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-[#9e9e9e]">{relatedPost.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
