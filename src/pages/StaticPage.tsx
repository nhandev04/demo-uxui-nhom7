import { Layout } from '../components/layout/Layout';
import { useLocation } from 'react-router-dom';

// Generic component for static pages like Terms, Privacy, Shipping, Returns, FAQ
export function StaticPage() {
  const location = useLocation();
  
  const pageContent: Record<string, { title: string; content: JSX.Element }> = {
    '/privacy': {
      title: 'Chính sách bảo mật',
      content: (
        <div className="space-y-6 text-[#757575]">
          <p className="text-lg">
            Tại Flora Garden, chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của khách hàng.
          </p>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">1. Thu thập thông tin</h3>
            <p className="leading-relaxed">
              Chúng tôi thu thập thông tin cá nhân khi bạn đặt hàng, đăng ký tài khoản, hoặc liên hệ với chúng tôi. 
              Thông tin có thể bao gồm: họ tên, địa chỉ email, số điện thoại, địa chỉ giao hàng.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">2. Sử dụng thông tin</h3>
            <p className="leading-relaxed">
              Thông tin của bạn được sử dụng để xử lý đơn hàng, giao hàng, cải thiện dịch vụ và gửi thông tin 
              khuyến mãi (nếu bạn đồng ý).
            </p>
          </div>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">3. Bảo mật thông tin</h3>
            <p className="leading-relaxed">
              Chúng tôi sử dụng các biện pháp bảo mật tiêu chuẩn công nghiệp để bảo vệ thông tin cá nhân của bạn.
            </p>
          </div>
        </div>
      ),
    },
    '/terms': {
      title: 'Điều khoản sử dụng',
      content: (
        <div className="space-y-6 text-[#757575]">
          <p className="text-lg">
            Vui lòng đọc kỹ các điều khoản và điều kiện sau đây trước khi sử dụng dịch vụ của chúng tôi.
          </p>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">1. Chấp nhận điều khoản</h3>
            <p className="leading-relaxed">
              Bằng việc truy cập và sử dụng trang web này, bạn đồng ý tuân thủ các điều khoản và điều kiện sử dụng.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">2. Sử dụng dịch vụ</h3>
            <p className="leading-relaxed">
              Bạn đồng ý sử dụng dịch vụ của chúng tôi cho mục đích hợp pháp và không vi phạm bất kỳ quy định pháp luật nào.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">3. Quyền sở hữu trí tuệ</h3>
            <p className="leading-relaxed">
              Tất cả nội dung trên trang web này thuộc quyền sở hữu của Flora Garden và được bảo vệ bởi luật bản quyền.
            </p>
          </div>
        </div>
      ),
    },
    '/shipping': {
      title: 'Chính sách giao hàng',
      content: (
        <div className="space-y-6 text-[#757575]">
          <p className="text-lg">
            Chúng tôi cam kết giao hàng nhanh chóng và đảm bảo chất lượng hoa tươi tốt nhất đến tay khách hàng.
          </p>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">1. Khu vực giao hàng</h3>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>TP. Hồ Chí Minh: Giao hàng trong 2-4 giờ</li>
              <li>Hà Nội: Giao hàng trong 3-5 giờ</li>
              <li>Các tỉnh thành khác: Giao hàng trong 1-2 ngày</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">2. Phí giao hàng</h3>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Miễn phí giao hàng cho đơn từ 500.000₫</li>
              <li>Phí giao hàng tiêu chuẩn: 50.000₫</li>
              <li>Giao hàng ngoài giờ: Phụ thu 30.000₫</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">3. Theo dõi đơn hàng</h3>
            <p className="leading-relaxed">
              Bạn có thể theo dõi tình trạng đơn hàng trong phần "Đơn hàng của tôi" sau khi đăng nhập.
            </p>
          </div>
        </div>
      ),
    },
    '/returns': {
      title: 'Chính sách đổi trả & hoàn tiền',
      content: (
        <div className="space-y-6 text-[#757575]">
          <p className="text-lg">
            Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.
          </p>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">1. Điều kiện đổi trả</h3>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Hoa không đúng như mô tả hoặc bị hư hỏng khi giao</li>
              <li>Giao sai sản phẩm hoặc thiếu số lượng</li>
              <li>Thông báo trong vòng 24 giờ kể từ khi nhận hàng</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">2. Quy trình đổi trả</h3>
            <p className="leading-relaxed">
              Liên hệ với chúng tôi qua hotline hoặc email kèm hình ảnh sản phẩm. Chúng tôi sẽ xử lý trong vòng 24 giờ.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-[#424242] mb-3">3. Hoàn tiền</h3>
            <p className="leading-relaxed">
              Hoàn tiền sẽ được xử lý trong vòng 7-10 ngày làm việc sau khi xác nhận đổi trả.
            </p>
          </div>
        </div>
      ),
    },
    '/faq': {
      title: 'Câu hỏi thường gặp',
      content: (
        <div className="space-y-6">
          {[
            {
              q: 'Hoa có tươi không?',
              a: 'Tất cả hoa của chúng tôi đều được nhập khẩu trực tiếp từ các nông trại uy tín và được bảo quản trong điều kiện tốt nhất.',
            },
            {
              q: 'Tôi có thể đặt hàng trước không?',
              a: 'Có, bạn có thể đặt hàng trước tối thiểu 1 ngày. Đối với đơn hàng lớn hoặc đặc biệt, vui lòng đặt trước ít nhất 3 ngày.',
            },
            {
              q: 'Có giao hàng vào ngày lễ không?',
              a: 'Có, chúng tôi giao hàng vào tất cả các ngày trong năm, bao gồm cả ngày lễ và Tết.',
            },
            {
              q: 'Tôi có thể tùy chỉnh bó hoa không?',
              a: 'Chúng tôi cung cấp dịch vụ tùy chỉnh theo yêu cầu. Vui lòng liên hệ với chúng tôi để được tư vấn.',
            },
            {
              q: 'Thanh toán như thế nào?',
              a: 'Chúng tôi chấp nhận thanh toán COD, chuyển khoản ngân hàng, ví MoMo và thẻ tín dụng.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-[#fdf6f5] rounded-xl p-6">
              <h3 className="text-lg text-[#424242] mb-3">{faq.q}</h3>
              <p className="text-[#757575] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      ),
    },
  };

  const page = pageContent[location.pathname];

  if (!page) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl text-[#757575]">Trang không tồn tại</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-[#fdf6f5] to-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-['Playfair_Display'] text-4xl text-[#6b1f15]">
            {page.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-[#f5f5f5] p-8">
          {page.content}
        </div>
      </div>
    </Layout>
  );
}