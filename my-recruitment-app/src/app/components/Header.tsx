'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check local storage on mount
        const storedLoginState = localStorage.getItem('isLoggedIn');
        if (storedLoginState !== null) {
            setIsLoggedIn(storedLoginState === 'true');
        } else {
            // Default to true for this demo session as per user request
            // But saving it so logout can override it
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
        router.push('/');
        setActiveDropdown(null);
    };

    return (
        <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-[1320px] mx-auto px-4">
                <div className="flex justify-between h-[68px] items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-10">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#00b14f] rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>
                            </div>
                            <span className="text-[22px] font-bold text-[#00b14f]">edura</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {/* Việc làm */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('jobs')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link href="/jobs" className="px-4 py-2 text-[#212f3f] hover:text-[#00b14f] text-[14px] font-normal flex items-center gap-1 transition rounded-lg hover:bg-[#f3f5f7]">
                                    Việc làm
                                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                {activeDropdown === 'jobs' && (
                                    <div className="absolute top-full left-0 pt-2 w-56">
                                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                                            <Link href="/jobs" className="block px-4 py-2 text-[14px] text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f]">Tất cả việc làm</Link>
                                            <Link href="/jobs?filter=hot" className="block px-4 py-2 text-[14px] text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f]">Việc làm Hot</Link>
                                            <Link href="/jobs?filter=urgent" className="block px-4 py-2 text-[14px] text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f]">Tuyển gấp</Link>
                                            <Link href="/companies" className="block px-4 py-2 text-[14px] text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f]">Trường học/Trung tâm</Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Tạo CV */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('cv')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link href="/cv-templates" className="px-4 py-2 text-[#212f3f] hover:text-[#00b14f] text-[14px] font-normal flex items-center gap-1 transition rounded-lg hover:bg-[#f3f5f7]">
                                    Tạo CV
                                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                {activeDropdown === 'cv' && (
                                    <div className="absolute top-full left-0 pt-2 w-56">
                                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                                            <Link href="/cv-templates" className="block px-4 py-2 text-[14px] text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f]">Mẫu CV Giáo viên</Link>
                                            <Link href="/cv-builder" className="block px-4 py-2 text-[14px] text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f]">Tạo CV Online</Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Công cụ */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('tools')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link href="/tools" className="px-4 py-2 text-[#212f3f] hover:text-[#00b14f] text-[14px] font-normal flex items-center gap-1 transition rounded-lg hover:bg-[#f3f5f7]">
                                    Công cụ
                                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                {activeDropdown === 'tools' && (
                                    <div className="absolute top-full left-0 pt-2 w-56">
                                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                                            <Link href="/tools/salary-calculator" className="block px-4 py-2 text-[14px] text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f]">Tính lương Gross-Net</Link>
                                            <Link href="/tools" className="block px-4 py-2 text-[14px] text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f]">Tất cả công cụ</Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/blog"
                                className="px-4 py-2 text-[#212f3f] hover:text-[#00b14f] text-[14px] font-normal transition rounded-lg hover:bg-[#f3f5f7]"
                            >
                                Cẩm nang nghề nghiệp
                            </Link>
                        </nav>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/employer"
                            className="hidden lg:flex items-center gap-2 px-4 py-2 text-[14px] text-[#212f3f] bg-[#f3f5f7] rounded-[44px] hover:bg-[#e8eaed] transition font-medium mr-2"
                        >
                            Đăng tuyển & tìm hồ sơ
                        </Link>

                        {!isLoggedIn ? (
                            <>
                                <Link
                                    href="/login"
                                    className="hidden md:flex items-center justify-center px-6 py-2.5 bg-[#00b14f] text-white rounded-[44px] hover:bg-[#009643] transition text-[14px] font-semibold"
                                >
                                    Đăng nhập
                                </Link>

                                <Link
                                    href="/register"
                                    className="hidden md:flex items-center justify-center px-6 py-2.5 border-2 border-[#00b14f] text-[#00b14f] rounded-[44px] hover:bg-[#00b14f] hover:text-white transition text-[14px] font-semibold"
                                >
                                    Đăng ký
                                </Link>
                            </>
                        ) : (
                            <div className="flex items-center gap-4">
                                {/* Chat */}
                                <button className="p-2 text-[#6f7882] hover:text-[#00b14f] hover:bg-[#f3f5f7] rounded-full transition relative">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </button>

                                {/* Notifications */}
                                <button className="p-2 text-[#6f7882] hover:text-[#00b14f] hover:bg-[#f3f5f7] rounded-full transition relative">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                                </button>

                                {/* User Dropdown */}
                                <div
                                    className="relative group py-2"
                                    onMouseEnter={() => setActiveDropdown('user')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="flex items-center gap-2 cursor-pointer">
                                        <div className="w-9 h-9 rounded-full bg-[#e9eaec] overflow-hidden border border-[#e9eaec]">
                                            <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random" alt="Avatar" className="w-full h-full object-cover" />
                                        </div>
                                    </div>

                                    {activeDropdown === 'user' && (
                                        <div className="absolute top-full right-0 pt-2 w-72">
                                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                                {/* User Info */}
                                                <div className="p-4 border-b border-[#f3f5f7] bg-gradient-to-r from-[#00b14f]/5 to-transparent">
                                                    <div className="flex gap-3">
                                                        <div className="w-12 h-12 rounded-full bg-[#f3f5f7] overflow-hidden border border-white shadow-sm">
                                                            <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random" alt="Avatar" className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-[#212f3f] text-[15px]">Nguyễn Văn A</p>
                                                            <p className="text-[13px] text-[#6f7882]">Mã ứng viên: <span className="text-[#212f3f]">E123456</span></p>
                                                            <p className="text-[12px] text-[#00b14f] mt-1">Tài khoản đã xác thực</p>
                                                        </div>
                                                    </div>
                                                    <Link href="/profile" className="mt-3 block w-full py-2 bg-[#00b14f] text-white text-center rounded-lg text-[13px] font-semibold hover:bg-[#009643]">
                                                        Nâng cấp tài khoản VIP
                                                    </Link>
                                                </div>

                                                {/* Menu Items */}
                                                <div className="py-2">
                                                    <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f] text-[14px]">
                                                        <span className="text-xl">👤</span>
                                                        Cài đặt thông tin cá nhân
                                                    </Link>
                                                    <Link href="/my-cvs" className="flex items-center gap-3 px-4 py-2.5 text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f] text-[14px]">
                                                        <span className="text-xl">📄</span>
                                                        Quản lý CV
                                                    </Link>
                                                    <Link href="/my-jobs" className="flex items-center gap-3 px-4 py-2.5 text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f] text-[14px]">
                                                        <span className="text-xl">💼</span>
                                                        Việc làm của tôi
                                                    </Link>
                                                    <Link href="/notifications" className="flex items-center gap-3 px-4 py-2.5 text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f] text-[14px]">
                                                        <span className="text-xl">🔔</span>
                                                        Thông báo việc làm
                                                    </Link>
                                                    <div className="my-1 border-t border-[#f3f5f7]"></div>
                                                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-[#ff4d4f] hover:bg-[#fff1f0] text-[14px] text-left">
                                                        <span className="text-xl">🚪</span>
                                                        Đăng xuất
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Mobile menu button */}
                        <button
                            className="lg:hidden p-2 text-gray-600 hover:text-[#00b14f] hover:bg-[#f3f5f7] rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100">
                        <nav className="flex flex-col gap-1">
                            <Link href="/jobs" className="px-4 py-3 text-[#212f3f] hover:text-[#00b14f] hover:bg-[#f3f5f7] rounded-lg text-[14px]">Việc làm</Link>
                            <Link href="/cv-templates" className="px-4 py-3 text-[#212f3f] hover:text-[#00b14f] hover:bg-[#f3f5f7] rounded-lg text-[14px]">Tạo CV</Link>
                            <Link href="/tools" className="px-4 py-3 text-[#212f3f] hover:text-[#00b14f] hover:bg-[#f3f5f7] rounded-lg text-[14px]">Công cụ</Link>
                            <Link href="/blog" className="px-4 py-3 text-[#212f3f] hover:text-[#00b14f] hover:bg-[#f3f5f7] rounded-lg text-[14px]">Cẩm nang nghề nghiệp</Link>
                            <Link href="/companies" className="px-4 py-3 text-[#212f3f] hover:text-[#00b14f] hover:bg-[#f3f5f7] rounded-lg text-[14px]">Trường học</Link>
                            {!isLoggedIn ? (
                                <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-2 px-4">
                                    <Link href="/login" className="text-center py-3 bg-[#00b14f] text-white font-semibold rounded-[44px] text-[14px]">Đăng nhập</Link>
                                    <Link href="/register" className="text-center py-3 border-2 border-[#00b14f] text-[#00b14f] font-semibold rounded-[44px] text-[14px]">Đăng ký</Link>
                                </div>
                            ) : (
                                <div className="pt-4 mt-2 border-t border-gray-100">
                                    <div className="px-4 mb-2 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#f3f5f7]">
                                            <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random" alt="Avatar" className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#212f3f]">Nguyễn Văn A</p>
                                            <p className="text-[12px] text-[#6f7882]">E123456</p>
                                        </div>
                                    </div>
                                    <Link href="/profile" className="block px-4 py-3 text-[#212f3f] hover:bg-[#f3f5f7]">Cài đặt tài khoản</Link>
                                    <Link href="/my-jobs" className="block px-4 py-3 text-[#212f3f] hover:bg-[#f3f5f7]">Việc làm của tôi</Link>
                                    <Link href="/my-cvs" className="block px-4 py-3 text-[#212f3f] hover:bg-[#f3f5f7]">Quản lý CV</Link>
                                    <button onClick={handleLogout} className="block w-full text-left px-4 py-3 text-[#ff4d4f] hover:bg-[#fff1f0]">Đăng xuất</button>
                                </div>
                            )}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
