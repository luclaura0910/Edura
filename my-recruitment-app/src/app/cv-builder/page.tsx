'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const sections = [
    { id: 'personal', name: 'Thông tin cá nhân', icon: '👤' },
    { id: 'objective', name: 'Mục tiêu nghề nghiệp', icon: '🎯' },
    { id: 'experience', name: 'Kinh nghiệm giảng dạy', icon: '💼' },
    { id: 'education', name: 'Học vấn', icon: '🎓' },
    { id: 'skills', name: 'Kỹ năng', icon: '⭐' },
    { id: 'certificates', name: 'Chứng chỉ', icon: '📜' },
    { id: 'activities', name: 'Hoạt động', icon: '🏆' },
];

export default function CVBuilderPage() {
    const [activeSection, setActiveSection] = useState('personal');

    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-r from-[#0a4429] to-[#0d5a36] py-6">
                <div className="max-w-[1320px] mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Tạo CV Giáo viên</h1>
                            <p className="text-white/80 mt-1">Điền thông tin để tạo CV chuyên nghiệp</p>
                        </div>
                        <Link href="/cv-templates" className="text-white/80 hover:text-white text-[14px] flex items-center gap-1">
                            ← Chọn mẫu CV khác
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-[1320px] mx-auto px-4 py-6">
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Left Sidebar - Sections */}
                    <aside className="lg:col-span-3">
                        <div className="bg-white rounded-xl p-4 sticky top-20">
                            <h3 className="font-semibold text-[#212f3f] mb-4">Các mục trong CV</h3>
                            <ul className="space-y-1">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => setActiveSection(section.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${activeSection === section.id
                                                    ? 'bg-[#00b14f]/10 text-[#00b14f]'
                                                    : 'text-[#4d5965] hover:bg-[#f3f5f7]'
                                                }`}
                                        >
                                            <span>{section.icon}</span>
                                            <span className="text-[14px] font-medium">{section.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Center - Form */}
                    <main className="lg:col-span-5">
                        <div className="bg-white rounded-xl p-6">
                            {activeSection === 'personal' && (
                                <>
                                    <h2 className="text-[18px] font-bold text-[#212f3f] mb-6">Thông tin cá nhân</h2>
                                    <div className="space-y-5">
                                        <div className="flex justify-center mb-6">
                                            <div className="text-center">
                                                <div className="w-24 h-24 bg-[#f3f5f7] rounded-full mx-auto mb-3 flex items-center justify-center text-4xl">
                                                    👤
                                                </div>
                                                <button className="text-[#00b14f] text-[14px] font-medium">Tải ảnh lên</button>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Họ và tên *</label>
                                                <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                            </div>
                                            <div>
                                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Chức danh *</label>
                                                <input type="text" placeholder="Giáo viên Tiếng Anh" className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Email *</label>
                                                <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                            </div>
                                            <div>
                                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Số điện thoại *</label>
                                                <input type="tel" placeholder="0912 345 678" className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Ngày sinh</label>
                                                <input type="date" className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                            </div>
                                            <div>
                                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Giới tính</label>
                                                <select className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]">
                                                    <option>Nam</option>
                                                    <option>Nữ</option>
                                                    <option>Khác</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Địa chỉ</label>
                                            <input type="text" placeholder="Quận/Huyện, Tỉnh/Thành phố" className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === 'objective' && (
                                <>
                                    <h2 className="text-[18px] font-bold text-[#212f3f] mb-6">Mục tiêu nghề nghiệp</h2>
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Mô tả mục tiêu của bạn</label>
                                        <textarea
                                            rows={6}
                                            placeholder="Ví dụ: Với hơn 3 năm kinh nghiệm giảng dạy Tiếng Anh IELTS, tôi mong muốn được tiếp tục cống hiến trong môi trường giáo dục chuyên nghiệp..."
                                            className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px] resize-none"
                                        ></textarea>
                                        <p className="text-[13px] text-[#6f7882] mt-2">Mẹo: Nêu rõ mục tiêu ngắn hạn và dài hạn trong sự nghiệp giảng dạy</p>
                                    </div>
                                </>
                            )}

                            {activeSection !== 'personal' && activeSection !== 'objective' && (
                                <div className="text-center py-10 text-[#6f7882]">
                                    <p className="text-[48px] mb-4">{sections.find(s => s.id === activeSection)?.icon}</p>
                                    <p className="font-medium text-[#212f3f] mb-2">{sections.find(s => s.id === activeSection)?.name}</p>
                                    <p className="text-[14px]">Nhấn "Thêm mới" để bắt đầu</p>
                                    <button className="mt-4 px-6 py-2.5 bg-[#00b14f] text-white rounded-lg font-medium hover:bg-[#009643] transition">
                                        + Thêm mới
                                    </button>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t border-[#f3f5f7]">
                                <button className="px-6 py-2.5 border border-[#e9eaec] text-[#6f7882] rounded-lg font-medium hover:border-[#00b14f] transition">
                                    ← Quay lại
                                </button>
                                <button className="px-6 py-2.5 bg-[#00b14f] text-white rounded-lg font-medium hover:bg-[#009643] transition">
                                    Tiếp theo →
                                </button>
                            </div>
                        </div>
                    </main>

                    {/* Right - Preview */}
                    <aside className="lg:col-span-4">
                        <div className="bg-white rounded-xl p-5 sticky top-20">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-[#212f3f]">Xem trước CV</h3>
                                <button className="text-[#00b14f] text-[14px] font-medium">Phóng to</button>
                            </div>

                            {/* CV Preview */}
                            <div className="aspect-[3/4] bg-white border border-[#e9eaec] rounded-lg overflow-hidden shadow-sm">
                                <div className="h-full p-4 flex flex-col">
                                    {/* Header */}
                                    <div className="flex gap-3 pb-3 border-b border-[#f3f5f7]">
                                        <div className="w-12 h-12 bg-[#00b14f]/10 rounded-full"></div>
                                        <div>
                                            <div className="h-3 bg-[#00b14f] rounded w-24 mb-2"></div>
                                            <div className="h-2 bg-gray-200 rounded w-20"></div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 py-3 space-y-3">
                                        <div>
                                            <div className="h-2 bg-[#00b14f] rounded w-20 mb-2"></div>
                                            <div className="space-y-1">
                                                <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                                                <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h-2 bg-[#00b14f] rounded w-24 mb-2"></div>
                                            <div className="space-y-1">
                                                <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                                                <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                                                <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mt-4">
                                <button className="flex-1 py-2.5 bg-[#00b14f] text-white rounded-lg font-medium text-[14px] hover:bg-[#009643] transition">
                                    Tải xuống PDF
                                </button>
                                <button className="px-4 py-2.5 border border-[#e9eaec] text-[#6f7882] rounded-lg hover:border-[#00b14f] transition">
                                    💾
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
}
