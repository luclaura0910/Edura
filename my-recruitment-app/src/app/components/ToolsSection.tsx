import Link from 'next/link';

const tools = [
    {
        id: 1,
        title: 'Tạo CV Giáo viên',
        description: 'Tạo CV xin việc giáo viên chuyên nghiệp với 50+ mẫu miễn phí',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        bgColor: 'bg-green-50',
        iconColor: 'text-green-500',
        href: '/cv-builder',
    },
    {
        id: 2,
        title: 'Tính lương Giáo viên',
        description: 'Quy đổi lương Gross sang Net theo bảng lương giáo viên mới',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-500',
        href: '/tools/salary-calculator',
    },
    {
        id: 3,
        title: 'Tra cứu bảng lương',
        description: 'Bảng lương giáo viên theo hạng, ngạch cập nhật mới nhất',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-500',
        href: '/tools/salary-table',
    },
    {
        id: 4,
        title: 'Viết thư xin việc',
        description: 'Tạo thư xin việc giáo viên ấn tượng gây chú ý nhà trường',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        bgColor: 'bg-teal-50',
        iconColor: 'text-teal-500',
        href: '/tools/cover-letter',
    },
    {
        id: 5,
        title: 'Trắc nghiệm nghề nghiệp',
        description: 'Khám phá bạn phù hợp với cấp học và môn học nào nhất',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        bgColor: 'bg-pink-50',
        iconColor: 'text-pink-500',
        href: '/tools/personality-test',
    },
    {
        id: 6,
        title: 'Mẫu giáo án',
        description: 'Kho giáo án mẫu các môn học phong phú, chuẩn chương trình',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        bgColor: 'bg-orange-50',
        iconColor: 'text-orange-500',
        href: '/tools/lesson-plans',
    },
];

export default function ToolsSection() {
    return (
        <section className="py-8 bg-[#f3f5f7]">
            <div className="max-w-[1320px] mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                    <h2 className="text-[20px] font-bold text-[#212f3f] flex items-center gap-3">
                        <span className="w-1 h-6 bg-[#00b14f] rounded-full"></span>
                        Công cụ dành cho Giáo viên
                    </h2>
                    <Link
                        href="/tools"
                        className="text-[#00b14f] hover:underline font-medium text-[14px] flex items-center gap-1"
                    >
                        Xem tất cả
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {tools.map((tool) => (
                        <Link
                            key={tool.id}
                            href={tool.href}
                            className="bg-white rounded-xl p-5 border border-[#e9eaec] hover:shadow-lg hover:border-[#00b14f] transition-all duration-200 group text-center"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 mx-auto rounded-xl ${tool.bgColor} ${tool.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                {tool.icon}
                            </div>

                            {/* Content */}
                            <h3 className="font-semibold text-[14px] text-[#212f3f] mb-2 group-hover:text-[#00b14f] transition">
                                {tool.title}
                            </h3>
                            <p className="text-[12px] text-[#6f7882] line-clamp-2 leading-relaxed">
                                {tool.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
