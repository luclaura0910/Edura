import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const tools = [
    {
        id: 'cv-builder',
        title: 'Tạo CV Online',
        description: 'Tạo CV giáo viên chuyên nghiệp với hơn 50+ mẫu CV miễn phí chuẩn ngành giáo dục',
        icon: '📝',
        color: 'from-green-500 to-green-600',
        href: '/cv-builder',
        popular: true,
    },
    {
        id: 'salary-calculator',
        title: 'Tính lương Giáo viên',
        description: 'Quy đổi lương Gross sang Net theo bảng lương giáo viên mới nhất năm 2026',
        icon: '💰',
        color: 'from-blue-500 to-blue-600',
        href: '/tools/salary-calculator',
        popular: true,
    },
    {
        id: 'salary-table',
        title: 'Bảng lương Giáo viên',
        description: 'Tra cứu bảng lương giáo viên theo hạng I, II, III cập nhật mới nhất',
        icon: '📊',
        color: 'from-purple-500 to-purple-600',
        href: '/tools/salary-table',
    },
    {
        id: 'cover-letter',
        title: 'Viết thư xin việc',
        description: 'Tạo thư xin việc giáo viên ấn tượng với mẫu có sẵn cho từng vị trí',
        icon: '✉️',
        color: 'from-teal-500 to-teal-600',
        href: '/tools/cover-letter',
    },
    {
        id: 'personality-test',
        title: 'Trắc nghiệm nghề nghiệp',
        description: 'Khám phá bạn phù hợp với cấp học và môn học nào trong ngành giáo dục',
        icon: '🧠',
        color: 'from-pink-500 to-pink-600',
        href: '/tools/personality-test',
    },
    {
        id: 'lesson-plans',
        title: 'Mẫu Giáo án',
        description: 'Kho giáo án mẫu phong phú cho các môn học, chuẩn chương trình GDPT mới',
        icon: '📚',
        color: 'from-orange-500 to-orange-600',
        href: '/tools/lesson-plans',
    },
    {
        id: 'tax-calculator',
        title: 'Tính thuế TNCN',
        description: 'Tính thuế thu nhập cá nhân theo biểu thuế lũy tiến mới nhất',
        icon: '🧾',
        color: 'from-red-500 to-red-600',
        href: '/tools/tax-calculator',
    },
    {
        id: 'interview-tips',
        title: 'Kỹ năng phỏng vấn',
        description: 'Câu hỏi phỏng vấn giáo viên thường gặp và cách trả lời ấn tượng',
        icon: '💬',
        color: 'from-indigo-500 to-indigo-600',
        href: '/tools/interview-tips',
    },
];

export default function ToolsPage() {
    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#0a4429] to-[#0d5a36] py-12">
                <div className="max-w-[1320px] mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Công cụ hỗ trợ Giáo viên
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        Tất cả công cụ cần thiết để hỗ trợ bạn trong hành trình tìm việc giáo viên
                    </p>
                </div>
            </section>

            {/* Tools Grid */}
            <div className="max-w-[1320px] mx-auto px-4 py-10">
                {/* Popular Tools */}
                <h2 className="text-[20px] font-bold text-[#212f3f] mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 bg-[#00b14f] rounded-full"></span>
                    Công cụ phổ biến
                </h2>
                <div className="grid md:grid-cols-2 gap-5 mb-10">
                    {tools.filter(t => t.popular).map((tool) => (
                        <Link
                            key={tool.id}
                            href={tool.href}
                            className="bg-white rounded-xl p-6 border border-[#e9eaec] hover:border-[#00b14f] hover:shadow-lg transition group flex gap-5"
                        >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                                {tool.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[18px] font-semibold text-[#212f3f] mb-2 group-hover:text-[#00b14f] transition">
                                    {tool.title}
                                </h3>
                                <p className="text-[14px] text-[#6f7882] leading-relaxed">
                                    {tool.description}
                                </p>
                                <span className="inline-flex items-center gap-1 text-[#00b14f] font-medium text-[14px] mt-3">
                                    Sử dụng ngay
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* All Tools */}
                <h2 className="text-[20px] font-bold text-[#212f3f] mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 bg-[#00b14f] rounded-full"></span>
                    Tất cả công cụ
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {tools.map((tool) => (
                        <Link
                            key={tool.id}
                            href={tool.href}
                            className="bg-white rounded-xl p-5 border border-[#e9eaec] hover:border-[#00b14f] hover:shadow-lg transition group text-center"
                        >
                            <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                {tool.icon}
                            </div>
                            <h3 className="font-semibold text-[15px] text-[#212f3f] mb-2 group-hover:text-[#00b14f] transition">
                                {tool.title}
                            </h3>
                            <p className="text-[13px] text-[#6f7882] line-clamp-2">
                                {tool.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
