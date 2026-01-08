'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

import UserSidebar from '../components/UserSidebar';

export default function MyCVsPage() {
    const cvs = [
        {
            id: 1,
            name: 'CV Giáo viên Tiếng Anh',
            template: 'Chuyên nghiệp',
            lastModified: '07/01/2026 14:30',
            isMain: true,
            completion: 95
        },
        {
            id: 2,
            name: 'CV Giáo viên Chủ nhiệm',
            template: 'Hiện đại',
            lastModified: '05/01/2026 09:15',
            isMain: false,
            completion: 80
        },
    ];

    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            <div className="max-w-[1320px] mx-auto px-4 py-8">
                <div className="flex gap-8">
                    {/* Sidebar */}
                    <UserSidebar />

                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-2xl font-bold text-[#212f3f]">Quản lý CV</h1>
                            <Link href="/cv-templates" className="px-4 py-2 bg-[#00b14f] text-white rounded-lg font-medium hover:bg-[#009643] transition flex items-center gap-2">
                                <span>+</span> Tạo CV mới
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {cvs.map((cv) => (
                                <div key={cv.id} className="bg-white rounded-xl shadow-sm border border-[#e9eaec] p-5 hover:shadow-md transition">
                                    <div className="flex gap-5">
                                        {/* CV Thumbnail */}
                                        <div className="w-[120px] h-[160px] bg-gray-100 rounded-lg border border-[#e9eaec] relative overflow-hidden flex-shrink-0 group cursor-pointer">
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                                📄 Preview
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                                <span className="text-white text-sm font-medium">Xem trước</span>
                                            </div>
                                        </div>

                                        {/* CV Info */}
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <div className="flex items-center gap-3">
                                                        <h3 className="font-bold text-[#212f3f] text-lg">{cv.name}</h3>
                                                        {cv.isMain && (
                                                            <span className="px-2 py-0.5 bg-[#e6f7e9] text-[#00b14f] text-[11px] font-bold rounded border border-[#00b14f]/20 uppercase">
                                                                CV Chính
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-[#6f7882] text-[14px]">Mẫu: {cv.template} • Cập nhật: {cv.lastModified}</p>
                                                </div>
                                                <div className="relative group">
                                                    <button className="text-[#6f7882] hover:text-[#212f3f]">•••</button>
                                                </div>
                                            </div>

                                            {/* Progress */}
                                            <div className="mb-4">
                                                <div className="flex justify-between text-[13px] mb-1">
                                                    <span className="text-[#6f7882]">Độ hoàn thiện</span>
                                                    <span className={`font-semibold ${cv.completion === 100 ? 'text-[#00b14f]' : 'text-[#f7931e]'}`}>
                                                        {cv.completion}%
                                                    </span>
                                                </div>
                                                <div className="h-1.5 w-full bg-[#f3f5f7] rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${cv.completion === 100 ? 'bg-[#00b14f]' : 'bg-[#f7931e]'}`}
                                                        style={{ width: `${cv.completion}%` }}
                                                    ></div>
                                                </div>
                                                {cv.completion < 100 && (
                                                    <p className="text-[12px] text-[#f7931e] mt-1">
                                                        Bổ sung thêm thông tin để tăng cơ hội trúng tuyển
                                                    </p>
                                                )}
                                            </div>

                                            {/* Actions */}
                                            <div className="mt-auto flex gap-3">
                                                <button className="flex-1 py-2 border border-[#e9eaec] text-[#212f3f] rounded-lg font-medium text-[14px] hover:border-[#00b14f] hover:text-[#00b14f] transition flex items-center justify-center gap-2">
                                                    ✏️ Chỉnh sửa
                                                </button>
                                                <button className="flex-1 py-2 border border-[#e9eaec] text-[#212f3f] rounded-lg font-medium text-[14px] hover:border-[#00b14f] hover:text-[#00b14f] transition flex items-center justify-center gap-2">
                                                    ⬇️ Tải xuống
                                                </button>
                                                <button className="flex-1 py-2 bg-[#00b14f]/10 text-[#00b14f] rounded-lg font-medium text-[14px] hover:bg-[#00b14f] hover:text-white transition flex items-center justify-center gap-2">
                                                    🚀 Đẩy Top
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Upload Box */}
                            <div className="border-2 border-dashed border-[#e9eaec] rounded-xl p-8 text-center hover:border-[#00b14f] transition cursor-pointer bg-white">
                                <div className="w-16 h-16 bg-[#f3f5f7] rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                                    📤
                                </div>
                                <h3 className="font-semibold text-[#212f3f] mb-1">Tải lên CV có sẵn</h3>
                                <p className="text-[#6f7882] text-[14px]">Hỗ trợ định dạng PDF, DOCX (Tối đa 5MB)</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
