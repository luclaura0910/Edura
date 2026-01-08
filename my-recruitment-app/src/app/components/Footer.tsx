import Link from 'next/link';

const footerLinks = {
    about: {
        title: 'Về EDURA',
        links: [
            { name: 'Giới thiệu', href: '/about' },
            { name: 'Góc báo chí', href: '/press' },
            { name: 'Tuyển dụng', href: '/careers' },
            { name: 'Liên hệ', href: '/contact' },
            { name: 'Hỏi đáp', href: '/faq' },
            { name: 'Điều khoản dịch vụ', href: '/terms' },
            { name: 'Quy định bảo mật', href: '/privacy' },
        ],
    },
    candidate: {
        title: 'Dành cho ứng viên',
        links: [
            { name: 'Việc làm mới nhất', href: '/jobs' },
            { name: 'CV xin việc', href: '/cv-templates' },
            { name: 'Việc làm IT', href: '/jobs/it' },
            { name: 'Việc làm Senior', href: '/jobs/senior' },
            { name: 'Việc làm Part-time', href: '/jobs/part-time' },
        ],
    },
    explore: {
        title: 'Khám phá',
        links: [
            { name: 'Cẩm nang nghề nghiệp', href: '/blog' },
            { name: 'Bảng lương', href: '/salary-report' },
            { name: 'Top công ty', href: '/companies' },
            { name: 'Việc làm theo ngành nghề', href: '/jobs/by-category' },
            { name: 'Việc theo địa điểm', href: '/jobs/by-location' },
        ],
    },
    employer: {
        title: 'Nhà tuyển dụng',
        links: [
            { name: 'Đăng tin tuyển dụng', href: '/employer/post-job' },
            { name: 'Tìm hồ sơ ứng viên', href: '/employer/search' },
            { name: 'Bảng giá dịch vụ', href: '/employer/pricing' },
            { name: 'Blog tuyển dụng', href: '/employer/blog' },
        ],
    },
};

const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://facebook.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        color: '#1877F2',
    },
    {
        name: 'YouTube',
        href: 'https://youtube.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        color: '#FF0000',
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        color: '#0A66C2',
    },
    {
        name: 'TikTok',
        href: 'https://tiktok.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
        ),
        color: '#000000',
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#212f3f]">
            {/* Main Footer */}
            <div className="max-w-[1320px] mx-auto px-4 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Logo & Description */}
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[#00b14f] rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>
                            </div>
                            <span className="text-[20px] font-bold text-[#00b14f]">edura</span>
                        </Link>
                        <p className="text-[#9ca3af] text-[13px] mb-5 leading-relaxed">
                            EDURA ươm mầm thành công cho hàng triệu ứng viên và kết nối với hàng nghìn doanh nghiệp uy tín.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-[#2d3e4f] rounded-lg flex items-center justify-center text-[#9ca3af] hover:text-white transition"
                                    style={{ '--hover-bg': social.color } as React.CSSProperties}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Link Columns */}
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-white text-[15px] mb-4">{section.title}</h3>
                            <ul className="space-y-2.5">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-[#9ca3af] text-[13px] hover:text-[#00b14f] transition"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* App Download Section */}
                <div className="mt-8 pt-6 border-t border-[#3d4f5f]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                        <div>
                            <h3 className="font-semibold text-white text-[15px] mb-1">Ứng dụng tìm việc dành cho bạn</h3>
                            <p className="text-[#9ca3af] text-[13px]">Tải app ngay để có trải nghiệm tốt nhất</p>
                        </div>
                        <div className="flex gap-3">
                            {/* App Store Button */}
                            <a
                                href="#"
                                className="flex items-center gap-3 bg-[#2d3e4f] hover:bg-[#3d4f5f] px-4 py-2.5 rounded-lg transition"
                            >
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[10px] text-[#9ca3af]">Download on the</p>
                                    <p className="text-[14px] font-semibold text-white">App Store</p>
                                </div>
                            </a>

                            {/* Google Play Button */}
                            <a
                                href="#"
                                className="flex items-center gap-3 bg-[#2d3e4f] hover:bg-[#3d4f5f] px-4 py-2.5 rounded-lg transition"
                            >
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[10px] text-[#9ca3af]">Get it on</p>
                                    <p className="text-[14px] font-semibold text-white">Google Play</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-[#1a252f] py-4">
                <div className="max-w-[1320px] mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-[#9ca3af]">
                        <div>
                            <p className="font-semibold text-white mb-1">Công ty Cổ phần EDURA Việt Nam</p>
                            <p>Giấy phép ĐKKD số: 0123456789 • Địa chỉ: Tầng 10, Tòa ABC Tower, Quận 1, TP.HCM</p>
                        </div>
                        <div className="text-left md:text-right">
                            <p>Hotline: <a href="tel:19001234" className="text-[#00b14f] font-semibold hover:underline">1900 1234</a></p>
                            <p className="mt-1">© 2014-2026 EDURA Vietnam JSC.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
