import { Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock API call
        console.log("Reset password for:", email);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#fdf6f5] via-white to-[#fcf1f2] flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl border border-[#f5f5f5] p-8 text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="font-['Playfair_Display'] text-2xl text-[#6b1f15] mb-4">
                            Kiểm tra email của bạn
                        </h2>
                        <p className="text-[#757575] mb-2">Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến:</p>
                        <p className="text-[#e0997d] mb-6">{email}</p>
                        <p className="text-sm text-[#9e9e9e] mb-8">
                            Vui lòng kiểm tra hộp thư và làm theo hướng dẫn để đặt lại mật khẩu. Nếu không thấy email,
                            hãy kiểm tra thư mục spam.
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => navigate("/login")}
                                className="w-full py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg transition-all duration-200"
                            >
                                Quay về đăng nhập
                            </button>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="w-full py-3 border-2 border-[#f0ccc3] text-[#b85a47] rounded-xl hover:bg-[#fdf6f5] transition-all duration-200"
                            >
                                Gửi lại email
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdf6f5] via-white to-[#fcf1f2] flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#e0997d] to-[#de87ac] rounded-xl flex items-center justify-center">
                            <span className="text-white text-2xl">🌸</span>
                        </div>
                    </Link>
                    <h1 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-2">Quên mật khẩu?</h1>
                    <p className="text-[#757575]">Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu</p>
                </div>

                {/* Form */}
                <div className="bg-white rounded-2xl shadow-xl border border-[#f5f5f5] p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm text-[#757575] mb-2">
                                Email <span className="text-[#ef4444]">*</span>
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9e9e9e]" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full pl-12 pr-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Gửi hướng dẫn
                        </button>
                    </form>

                    <div className="mt-6">
                        <Link
                            to="/login"
                            className="flex items-center justify-center gap-2 text-[#757575] hover:text-[#e0997d] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Quay lại đăng nhập
                        </Link>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-6">
                    <Link to="/" className="text-sm text-[#757575] hover:text-[#e0997d] transition-colors">
                        ← Quay về trang chủ
                    </Link>
                </div>
            </div>
        </div>
    );
}
