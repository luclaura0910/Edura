import Link from 'next/link';

const articles = [
    {
        id: 1,
        title: 'Top 10 kỹ năng cần có của một Giáo viên giỏi năm 2026',
        excerpt: 'Khám phá những kỹ năng quan trọng nhất mà mỗi giáo viên cần rèn luyện để thành công...',
        category: 'Kỹ năng',
        date: '05/01/2026',
        readTime: '5 phút',
        categoryColor: 'bg-blue-500',
    },
    {
        id: 2,
        title: 'Cách viết CV Giáo viên ấn tượng gây chú ý nhà trường',
        excerpt: 'Hướng dẫn chi tiết cách tạo CV xin việc giáo viên chuyên nghiệp và nổi bật...',
        category: 'CV & Hồ sơ',
        date: '04/01/2026',
        readTime: '7 phút',
        categoryColor: 'bg-green-500',
    },
    {
        id: 3,
        title: 'Xu hướng lương Giáo viên Việt Nam 2026: Báo cáo chi tiết',
        excerpt: 'Phân tích mức lương và xu hướng tuyển dụng giáo viên theo từng cấp học...',
        category: 'Báo cáo',
        date: '03/01/2026',
        readTime: '10 phút',
        categoryColor: 'bg-purple-500',
    },
    {
        id: 4,
        title: 'Bí quyết phỏng vấn xin việc Giáo viên thành công',
        excerpt: 'Những mẹo quan trọng giúp bạn tự tin chinh phục buổi phỏng vấn ứng tuyển giáo viên...',
        category: 'Phỏng vấn',
        date: '02/01/2026',
        readTime: '6 phút',
        categoryColor: 'bg-orange-500',
    },
];

export default function BlogSection() {
    return (
        <section className="py-8 bg-white">
            <div className="max-w-[1320px] mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                    <h2 className="text-[20px] font-bold text-[#212f3f] flex items-center gap-3">
                        <span className="w-1 h-6 bg-[#00b14f] rounded-full"></span>
                        Cẩm nang nghề Giáo viên
                    </h2>
                    <Link
                        href="/blog"
                        className="text-[#00b14f] hover:underline font-medium text-[14px] flex items-center gap-1"
                    >
                        Xem tất cả
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.id}`}
                            className="bg-white rounded-xl border border-[#e9eaec] overflow-hidden hover:shadow-lg hover:border-[#00b14f] transition-all duration-200 group"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-[16/10] bg-gradient-to-br from-[#f3f5f7] to-[#e9eaec] relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                {/* Category Badge */}
                                <span className={`absolute top-3 left-3 ${article.categoryColor} text-white text-[11px] px-3 py-1 rounded-full font-medium`}>
                                    {article.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="font-semibold text-[15px] text-[#212f3f] mb-2 line-clamp-2 group-hover:text-[#00b14f] transition leading-snug">
                                    {article.title}
                                </h3>
                                <p className="text-[#6f7882] text-[13px] line-clamp-2 mb-3 leading-relaxed">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center text-[12px] text-[#9ca3af]">
                                    <span>{article.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{article.readTime} đọc</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
