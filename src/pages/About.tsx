import { Layout } from '../components/layout/Layout';
import { Award, Heart, Truck, Users } from 'lucide-react';

export function About() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[400px] bg-gradient-to-br from-[#fdf6f5] to-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1560113406-36a33855c51e?w=1200"
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-['Playfair_Display'] text-5xl text-[#6b1f15] mb-6">
              Về Flora Garden
            </h1>
            <p className="text-xl text-[#757575] leading-relaxed">
              Nghệ thuật tạo nên những khoảnh khắc đáng nhớ với hoa tươi cao cấp
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#e0997d] tracking-wider uppercase">Câu chuyện của chúng tôi</span>
              <h2 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mt-2 mb-6">
                Hành trình mang vẻ đẹp đến mọi nhà
              </h2>
              <p className="text-[#757575] leading-relaxed mb-4">
                Flora Garden được thành lập vào năm 2020 với tầm nhìn mang đến những bó hoa cao cấp 
                nhất cho khách hàng Việt Nam. Chúng tôi tin rằng mỗi bông hoa đều mang một thông điệp 
                riêng, một cảm xúc đặc biệt cần được truyền tải một cách tinh tế nhất.
              </p>
              <p className="text-[#757575] leading-relaxed">
                Với đội ngũ florist chuyên nghiệp được đào tạo bài bản, chúng tôi cam kết mang đến 
                những sản phẩm hoa tươi chất lượng cao nhất, được nhập khẩu trực tiếp từ các nông trại 
                uy tín trên thế giới.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1765544182338-d2198afee27d?w=800"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#fdf6f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e0997d] tracking-wider uppercase">Giá trị cốt lõi</span>
            <h2 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mt-2">
              Những gì chúng tôi tin tưởng
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Chất lượng cao',
                desc: 'Hoa tươi nhập khẩu trực tiếp từ Ecuador, Colombia và Hà Lan',
              },
              {
                icon: Heart,
                title: 'Tận tâm',
                desc: 'Phục vụ khách hàng với tất cả sự chân thành và nhiệt huyết',
              },
              {
                icon: Truck,
                title: 'Giao hàng nhanh',
                desc: 'Cam kết giao hàng trong vòng 2-4 giờ tại TP.HCM',
              },
              {
                icon: Users,
                title: 'Đội ngũ chuyên nghiệp',
                desc: 'Florist giàu kinh nghiệm, được đào tạo bài bản',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-[#424242] mb-3">{value.title}</h3>
                <p className="text-[#9e9e9e]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e0997d] tracking-wider uppercase">Đội ngũ của chúng tôi</span>
            <h2 className="font-['Playfair_Display'] text-4xl text-[#6b1f15] mt-2">
              Gặp gỡ những người tạo nên sự khác biệt
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Nguyễn Minh Anh',
                role: 'Founder & Creative Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
              },
              {
                name: 'Trần Thanh Hà',
                role: 'Head Florist',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
              },
              {
                name: 'Lê Quốc Bảo',
                role: 'Operations Manager',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
              },
            ].map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl text-[#424242] mb-2">{member.name}</h3>
                <p className="text-[#9e9e9e]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#e0997d] to-[#de87ac]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-['Playfair_Display'] text-4xl mb-6">
            Sẵn sàng tạo nên khoảnh khắc đặc biệt?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Khám phá bộ sưu tập hoa tươi cao cấp của chúng tôi
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-4 bg-white text-[#e0997d] rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
          >
            Xem sản phẩm
          </a>
        </div>
      </section>
    </Layout>
  );
}