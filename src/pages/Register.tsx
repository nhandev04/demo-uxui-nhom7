import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }
        // Mock registration
        console.log("Register:", formData);
        navigate("/login");
    };

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
                    <h1 className="font-['Playfair_Display'] text-3xl text-[#6b1f15] mb-2">Tạo tài khoản</h1>
                    <p className="text-[#757575]">Đăng ký để nhận nhiều ưu đãi hấp dẫn</p>
                </div>

                {/* Register Form */}
                <div className="bg-white rounded-2xl shadow-xl border border-[#f5f5f5] p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm text-[#757575] mb-2">
                                Họ và tên <span className="text-[#ef4444]">*</span>
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9e9e9e]" />
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    placeholder="Nguyễn Văn A"
                                    className="w-full pl-12 pr-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-[#757575] mb-2">
                                Email <span className="text-[#ef4444]">*</span>
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9e9e9e]" />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    className="w-full pl-12 pr-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm text-[#757575] mb-2">
                                Số điện thoại <span className="text-[#ef4444]">*</span>
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9e9e9e]" />
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="0123 456 789"
                                    className="w-full pl-12 pr-4 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-[#757575] mb-2">
                                Mật khẩu <span className="text-[#ef4444]">*</span>
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9e9e9e]" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9e9e] hover:text-[#757575]"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm text-[#757575] mb-2">
                                Xác nhận mật khẩu <span className="text-[#ef4444]">*</span>
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9e9e9e]" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-3 bg-[#fdf6f5] border border-[#f0ccc3] rounded-xl focus:outline-none focus:border-[#e0997d] focus:ring-2 focus:ring-[#e0997d]/20 transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9e9e] hover:text-[#757575]"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 mt-0.5 text-[#e0997d] border-[#f0ccc3] rounded focus:ring-2 focus:ring-[#e0997d]/20"
                                required
                            />
                            <span className="text-sm text-[#757575]">
                                Tôi đồng ý với{" "}
                                <Link to="/terms" className="text-[#e0997d] hover:text-[#d4705b]">
                                    Điều khoản sử dụng
                                </Link>{" "}
                                và{" "}
                                <Link to="/privacy" className="text-[#e0997d] hover:text-[#d4705b]">
                                    Chính sách bảo mật
                                </Link>
                            </span>
                        </label>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#e0997d] text-white rounded-xl hover:bg-[#d4705b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Đăng ký
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="text-center text-sm text-[#757575] mt-6">
                        Đã có tài khoản?{" "}
                        <Link to="/login" className="text-[#e0997d] hover:text-[#d4705b] transition-colors">
                            Đăng nhập ngay
                        </Link>
                    </p>
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
