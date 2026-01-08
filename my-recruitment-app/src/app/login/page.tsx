import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#f3f5f7] flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0a4429] via-[#0d5a36] to-[#0a4429] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white rounded-full blur-[80px]"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full px-12">
                    <Link href="/" className="flex items-center gap-3 mb-10">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#00b14f]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <span className="text-4xl font-bold text-white">edura</span>
                    </Link>

                    <h1 className="text-3xl font-bold text-white text-center mb-4">
                        Tiếp lợi thế, <br />nối thành công
                    </h1>
                    <p className="text-white/80 text-center text-lg max-w-md">
                        Nền tảng tuyển dụng giáo viên hàng đầu Việt Nam với hơn 15,000+ việc làm mỗi ngày
                    </p>

                    <div className="mt-12 flex gap-8">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white">50K+</p>
                            <p className="text-white/70 text-sm">Giáo viên</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white">3,500+</p>
                            <p className="text-white/70 text-sm">Trường học</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white">15K+</p>
                            <p className="text-white/70 text-sm">Việc làm</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-[#00b14f] rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-[#00b14f]">edura</span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#212f3f] mb-2">Đăng nhập</h2>
                    <p className="text-[#6f7882] mb-8">Chào mừng bạn quay trở lại với EDURA</p>

                    {/* Login Form */}
                    <form className="space-y-5">
                        <div>
                            <label className="block text-[14px] font-medium text-[#212f3f] mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] focus:ring-2 focus:ring-[#00b14f]/20 outline-none transition text-[15px]"
                            />
                        </div>

                        <div>
                            <label className="block text-[14px] font-medium text-[#212f3f] mb-2">
                                Mật khẩu
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] focus:ring-2 focus:ring-[#00b14f]/20 outline-none transition text-[15px] pr-12"
                                />
                                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6f7882] hover:text-[#212f3f]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00b14f] focus:ring-[#00b14f]" />
                                <span className="text-[14px] text-[#6f7882]">Ghi nhớ đăng nhập</span>
                            </label>
                            <Link href="/forgot-password" className="text-[14px] text-[#00b14f] hover:underline">
                                Quên mật khẩu?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-[#00b14f] text-white rounded-lg font-semibold hover:bg-[#009643] transition text-[15px]"
                        >
                            Đăng nhập
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-[#e9eaec]"></div>
                        <span className="text-[14px] text-[#6f7882]">hoặc đăng nhập với</span>
                        <div className="flex-1 h-px bg-[#e9eaec]"></div>
                    </div>

                    {/* Social Login */}
                    <div className="flex gap-3">
                        <button className="flex-1 py-3 border border-[#e9eaec] rounded-lg hover:bg-[#f3f5f7] transition flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="text-[14px] text-[#212f3f]">Google</span>
                        </button>
                        <button className="flex-1 py-3 border border-[#e9eaec] rounded-lg hover:bg-[#f3f5f7] transition flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="text-[14px] text-[#212f3f]">Facebook</span>
                        </button>
                    </div>

                    {/* Register Link */}
                    <p className="text-center mt-8 text-[14px] text-[#6f7882]">
                        Bạn chưa có tài khoản?{' '}
                        <Link href="/register" className="text-[#00b14f] font-semibold hover:underline">
                            Đăng ký ngay
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
