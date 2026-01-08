import Link from 'next/link';

export default function CTABanner() {
    return (
        <section className="py-10 bg-gradient-to-r from-[#00b14f] to-[#009643] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-40 h-40 bg-white rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-white rounded-full"></div>
                <div className="absolute top-1/2 right-10 w-20 h-20 bg-white rounded-full"></div>
            </div>

            <div className="max-w-[1320px] mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-3">
                            Bạn là nhà trường / Trung tâm đào tạo?
                        </h2>
                        <p className="text-white/90 text-[16px] max-w-xl">
                            Đăng tin tuyển dụng giáo viên ngay để tiếp cận hàng nghìn ứng viên chất lượng trên EDURA
                        </p>
                    </div>

                    {/* Right - CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/employer/post-job"
                            className="px-8 py-4 bg-white text-[#00b14f] rounded-[44px] font-bold hover:bg-gray-100 transition shadow-lg text-center text-[15px]"
                        >
                            Đăng tin tuyển giáo viên
                        </Link>
                        <Link
                            href="/employer/pricing"
                            className="px-8 py-4 border-2 border-white text-white rounded-[44px] font-bold hover:bg-white/10 transition text-center text-[15px]"
                        >
                            Xem bảng giá
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-10 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <p className="text-[32px] font-bold text-white">50K+</p>
                        <p className="text-white/80 text-[14px]">Giáo viên ứng tuyển</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[32px] font-bold text-white">3,500+</p>
                        <p className="text-white/80 text-[14px]">Trường học tin dùng</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[32px] font-bold text-white">15K+</p>
                        <p className="text-white/80 text-[14px]">Việc làm giáo viên/tháng</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[32px] font-bold text-white">95%</p>
                        <p className="text-white/80 text-[14px]">Tuyển dụng thành công</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
