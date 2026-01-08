import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const categories = ['Tất cả', 'Đơn giản', 'Chuyên nghiệp', 'Hiện đại', 'Sáng tạo', 'Giáo viên'];

const templates = [
    { id: 1, name: 'CV Giáo viên Tiếng Anh', style: 'Chuyên nghiệp', color: '#00b14f', uses: 12450 },
    { id: 2, name: 'CV Giáo viên Mầm non', style: 'Sáng tạo', color: '#ff6b35', uses: 8920 },
    { id: 3, name: 'CV Giáo viên Tiểu học', style: 'Đơn giản', color: '#1E88E5', uses: 7654 },
    { id: 4, name: 'CV Giáo viên THCS', style: 'Chuyên nghiệp', color: '#7B1FA2', uses: 6543 },
    { id: 5, name: 'CV Giáo viên THPT', style: 'Hiện đại', color: '#00695C', uses: 5432 },
    { id: 6, name: 'CV Giáo viên Toán', style: 'Đơn giản', color: '#C62828', uses: 4321 },
    { id: 7, name: 'CV Giáo viên Văn', style: 'Chuyên nghiệp', color: '#EF6C00', uses: 3987 },
    { id: 8, name: 'CV Giáo viên Tin học', style: 'Hiện đại', color: '#1565C0', uses: 3654 },
    { id: 9, name: 'CV Giáo viên Âm nhạc', style: 'Sáng tạo', color: '#AD1457', uses: 2987 },
    { id: 10, name: 'CV Giáo viên Thể dục', style: 'Đơn giản', color: '#43A047', uses: 2654 },
    { id: 11, name: 'CV Trưởng bộ môn', style: 'Chuyên nghiệp', color: '#00838F', uses: 2321 },
    { id: 12, name: 'CV Quản lý giáo dục', style: 'Hiện đại', color: '#5E35B1', uses: 1987 },
];

export default function CVTemplatesPage() {
    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#0a4429] to-[#0d5a36] py-12">
                <div className="max-w-[1320px] mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Mẫu CV Giáo viên Chuyên nghiệp
                    </h1>
                    <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                        Tạo CV xin việc giáo viên ấn tượng với hơn 50+ mẫu CV miễn phí, chuẩn ngành giáo dục
                    </p>
                    <Link
                        href="/cv-builder"
                        className="inline-block px-8 py-4 bg-white text-[#00b14f] rounded-[44px] font-bold hover:bg-gray-100 transition shadow-lg"
                    >
                        Bắt đầu tạo CV ngay
                    </Link>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-[1320px] mx-auto px-4 py-8">
                {/* Filter Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`px-5 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition ${i === 0 ? 'bg-[#00b14f] text-white' : 'bg-white text-[#4d5965] border border-[#e9eaec] hover:border-[#00b14f]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {templates.map((template) => (
                        <div key={template.id} className="bg-white rounded-xl overflow-hidden border border-[#e9eaec] hover:border-[#00b14f] hover:shadow-lg transition group">
                            {/* Template Preview */}
                            <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                                {/* Mock CV Layout */}
                                <div className="absolute inset-4 bg-white rounded-lg shadow-sm p-4 flex flex-col">
                                    <div className="flex gap-3 mb-3">
                                        <div
                                            className="w-12 h-12 rounded-full"
                                            style={{ backgroundColor: template.color + '20' }}
                                        ></div>
                                        <div className="flex-1">
                                            <div className="h-3 rounded-full mb-2" style={{ backgroundColor: template.color, width: '60%' }}></div>
                                            <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                        <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                                        <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                                        <div className="mt-3 h-3 rounded-full" style={{ backgroundColor: template.color, width: '40%' }}></div>
                                        <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                        <div className="h-2 bg-gray-200 rounded-full w-4/5"></div>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                    <Link
                                        href={`/cv-builder?template=${template.id}`}
                                        className="px-6 py-3 bg-[#00b14f] text-white rounded-lg font-semibold hover:bg-[#009643] transition"
                                    >
                                        Dùng mẫu này
                                    </Link>
                                </div>
                            </div>

                            {/* Template Info */}
                            <div className="p-4">
                                <h3 className="font-semibold text-[14px] text-[#212f3f] mb-1 group-hover:text-[#00b14f] transition">
                                    {template.name}
                                </h3>
                                <div className="flex items-center justify-between text-[13px] text-[#6f7882]">
                                    <span className="px-2 py-0.5 bg-[#f3f5f7] rounded">{template.style}</span>
                                    <span>{template.uses.toLocaleString()} lượt dùng</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tips Section */}
                <div className="mt-12 bg-white rounded-xl p-8">
                    <h2 className="text-[20px] font-bold text-[#212f3f] mb-6 flex items-center gap-3">
                        <span className="w-1 h-6 bg-[#00b14f] rounded-full"></span>
                        Hướng dẫn tạo CV Giáo viên ấn tượng
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#00b14f]/10 rounded-xl flex items-center justify-center text-[#00b14f] flex-shrink-0">
                                <span className="text-xl font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#212f3f] mb-1">Thông tin cá nhân</h3>
                                <p className="text-[13px] text-[#6f7882]">Ảnh chân dung, họ tên, liên hệ rõ ràng, chuyên nghiệp</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#00b14f]/10 rounded-xl flex items-center justify-center text-[#00b14f] flex-shrink-0">
                                <span className="text-xl font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#212f3f] mb-1">Kinh nghiệm giảng dạy</h3>
                                <p className="text-[13px] text-[#6f7882]">Liệt kê trường học, cấp lớp, môn học đã dạy</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#00b14f]/10 rounded-xl flex items-center justify-center text-[#00b14f] flex-shrink-0">
                                <span className="text-xl font-bold">3</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#212f3f] mb-1">Bằng cấp & Chứng chỉ</h3>
                                <p className="text-[13px] text-[#6f7882]">Bằng sư phạm, IELTS, TESOL hoặc chứng chỉ nghiệp vụ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
