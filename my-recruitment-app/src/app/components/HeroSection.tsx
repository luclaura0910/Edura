'use client';

import { useState } from 'react';

const jobCategories = [
    { name: 'Giáo viên Tiếng Anh', icon: '🇬🇧' },
    { name: 'Giáo viên Toán học', icon: '📐' },
    { name: 'Giáo viên Mầm non', icon: '🎒' },
    { name: 'Giáo viên Tiểu học', icon: '📚' },
    { name: 'Giáo viên THCS', icon: '🎓' },
    { name: 'Giáo viên THPT', icon: '🏫' },
    { name: 'Giáo viên Âm nhạc', icon: '🎵' },
    { name: 'Giáo viên Thể dục', icon: '⚽' },
];

const locations = [
    'Tất cả tỉnh/thành phố',
    'Hà Nội',
    'Hồ Chí Minh',
    'Đà Nẵng',
    'Hải Phòng',
    'Cần Thơ',
    'Bình Dương',
    'Đồng Nai',
    'Bắc Ninh',
    'Quảng Ninh',
];

export default function HeroSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('Tất cả tỉnh/thành phố');

    return (
        <section className="relative bg-gradient-to-br from-[#0a4429] via-[#0d5a36] to-[#0a4429] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00b14f] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00b14f] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>
            </div>

            {/* Geometric Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="max-w-[1320px] mx-auto px-4 py-8 relative z-10">
                <div className="flex gap-8">

                    {/* Left: Categories Sidebar */}
                    <div className="hidden lg:block w-[260px] flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-[#f8f9fa] px-4 py-3 border-b border-gray-100">
                                <h3 className="text-[14px] font-semibold text-[#212f3f] flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                    Vị trí giáo viên nổi bật
                                </h3>
                            </div>
                            <ul>
                                {jobCategories.map((category, index) => (
                                    <li key={index} className="border-b border-gray-50 last:border-0">
                                        <a
                                            href="#"
                                            className="flex items-center justify-between px-4 py-3 text-[14px] text-[#212f3f] hover:bg-[#f8f9fa] hover:text-[#00b14f] transition group"
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className="text-[16px]">{category.icon}</span>
                                                <span>{category.name}</span>
                                            </span>
                                            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#00b14f] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Center: Main Content */}
                    <div className="flex-1">
                        {/* Main Heading */}
                        <div className="text-center mb-6">
                            <h1 className="text-[32px] md:text-[38px] font-bold text-white mb-3 leading-tight">
                                Tìm việc làm Giáo viên nhanh chóng, hiệu quả
                            </h1>
                            <p className="text-white/80 text-[15px]">
                                Tiếp cận <span className="text-[#5ddb6d] font-semibold">15,000+</span> tin tuyển dụng giáo viên mỗi ngày từ hàng nghìn trường học uy tín tại Việt Nam
                            </p>
                        </div>

                        {/* Search Box */}
                        <div className="bg-white rounded-[44px] shadow-xl p-1.5 flex flex-col md:flex-row gap-2">
                            {/* Search Input */}
                            <div className="flex-1 flex items-center px-5 py-3">
                                <svg className="w-5 h-5 text-[#00b14f] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Vị trí giáo viên, tên trường học"
                                    className="w-full outline-none text-[#212f3f] placeholder-[#6f7882] text-[15px]"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px bg-gray-200 my-2"></div>

                            {/* Location Dropdown */}
                            <div className="md:w-[220px] flex items-center px-5 py-3">
                                <svg className="w-5 h-5 text-[#00b14f] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <select
                                    className="w-full outline-none text-[#212f3f] bg-transparent text-[15px] cursor-pointer appearance-none"
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                >
                                    {locations.map((location, index) => (
                                        <option key={index} value={location}>{location}</option>
                                    ))}
                                </select>
                                <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Search Button */}
                            <button className="bg-[#00b14f] text-white px-8 py-4 rounded-[44px] font-semibold hover:bg-[#009643] transition flex items-center justify-center gap-2 text-[15px]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Tìm kiếm
                            </button>
                        </div>

                        {/* Popular Keywords */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                            <span className="text-white/70 text-[14px]">Từ khóa phổ biến:</span>
                            {['Tiếng Anh', 'Mầm non', 'Toán', 'IELTS', 'Tiểu học', 'Quốc tế', 'STEM'].map((keyword, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="px-4 py-1.5 bg-white/15 hover:bg-white/25 text-white text-[13px] rounded-full transition border border-white/20"
                                >
                                    {keyword}
                                </a>
                            ))}
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center justify-center gap-8 mt-6">
                            <div className="text-center">
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-[#5ddb6d] rounded-full animate-pulse"></span>
                                    <span className="text-[24px] font-bold text-white">15,420</span>
                                </div>
                                <span className="text-white/70 text-[13px]">Việc làm giáo viên</span>
                            </div>
                            <div className="w-px h-10 bg-white/20"></div>
                            <div className="text-center">
                                <span className="text-[24px] font-bold text-white">1,280</span>
                                <p className="text-white/70 text-[13px]">Tin mới hôm nay</p>
                            </div>
                            <div className="w-px h-10 bg-white/20"></div>
                            <div className="text-center">
                                <span className="text-[24px] font-bold text-white">3,500+</span>
                                <p className="text-white/70 text-[13px]">Trường học tin dùng</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: CV Banner */}
                    <div className="hidden xl:block w-[280px] flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] p-4 text-white">
                                <h3 className="font-bold text-[16px] mb-1">Tạo CV Giáo viên</h3>
                                <p className="text-white/90 text-[13px]">Mẫu CV chuyên nghiệp cho ngành giáo dục</p>
                            </div>
                            <div className="p-4">
                                <div className="flex gap-2 mb-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex-1 aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-200"></div>
                                    ))}
                                </div>
                                <a
                                    href="/cv-builder"
                                    className="block text-center py-3 bg-[#00b14f] text-white rounded-lg font-semibold hover:bg-[#009643] transition text-[14px]"
                                >
                                    Tạo CV ngay
                                </a>
                            </div>
                        </div>

                        {/* App Download */}
                        <div className="mt-4 bg-white rounded-xl shadow-lg p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#00b14f] rounded-xl flex items-center justify-center">
                                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-[14px] text-[#212f3f]">Tải app EDURA</p>
                                    <p className="text-[#6f7882] text-[12px]">Tìm việc giáo viên mọi lúc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
