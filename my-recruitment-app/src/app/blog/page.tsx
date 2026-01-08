import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const categories = ['Tất cả', 'Kỹ năng giảng dạy', 'CV & Phỏng vấn', 'Lương & Chế độ', 'Phát triển nghề nghiệp', 'Tin tức giáo dục'];

const articles = [
    {
        id: 1,
        title: 'Top 10 kỹ năng mềm cần có của một Giáo viên xuất sắc năm 2026',
        excerpt: 'Khám phá những kỹ năng mềm quan trọng nhất mà mỗi giáo viên cần rèn luyện để thành công trong sự nghiệp giảng dạy...',
        category: 'Kỹ năng giảng dạy',
        date: '05/01/2026',
        readTime: '5 phút',
        views: 12450,
        featured: true,
    },
    {
        id: 2,
        title: 'Cách viết CV Giáo viên ấn tượng để chinh phục nhà trường',
        excerpt: 'Hướng dẫn chi tiết cách tạo CV xin việc giáo viên chuyên nghiệp, gây ấn tượng mạnh với nhà tuyển dụng...',
        category: 'CV & Phỏng vấn',
        date: '04/01/2026',
        readTime: '7 phút',
        views: 9823,
        featured: true,
    },
    {
        id: 3,
        title: 'Bảng lương Giáo viên 2026: Cập nhật mới nhất theo từng hạng',
        excerpt: 'Tổng hợp chi tiết bảng lương giáo viên công lập theo hạng I, II, III và các phụ cấp kèm theo...',
        category: 'Lương & Chế độ',
        date: '03/01/2026',
        readTime: '10 phút',
        views: 25678,
        featured: true,
    },
    {
        id: 4,
        title: 'Bí quyết trả lời phỏng vấn xin việc Giáo viên thành công',
        excerpt: 'Những câu hỏi phỏng vấn thường gặp và cách trả lời ấn tượng cho vị trí giáo viên...',
        category: 'CV & Phỏng vấn',
        date: '02/01/2026',
        readTime: '6 phút',
        views: 8765,
    },
    {
        id: 5,
        title: 'Chương trình GDPT mới 2018: Những điều giáo viên cần biết',
        excerpt: 'Tìm hiểu về chương trình giáo dục phổ thông mới và cách thích ứng trong giảng dạy...',
        category: 'Tin tức giáo dục',
        date: '01/01/2026',
        readTime: '8 phút',
        views: 15432,
    },
    {
        id: 6,
        title: 'Lộ trình phát triển nghề nghiệp cho Giáo viên mới ra trường',
        excerpt: 'Hướng dẫn từng bước để xây dựng sự nghiệp giảng dạy vững chắc từ những ngày đầu...',
        category: 'Phát triển nghề nghiệp',
        date: '30/12/2025',
        readTime: '9 phút',
        views: 7654,
    },
    {
        id: 7,
        title: 'Phương pháp quản lý lớp học hiệu quả dành cho Giáo viên',
        excerpt: 'Những kỹ thuật và chiến lược giúp giáo viên kiểm soát lớp học tốt hơn...',
        category: 'Kỹ năng giảng dạy',
        date: '28/12/2025',
        readTime: '7 phút',
        views: 11234,
    },
    {
        id: 8,
        title: 'So sánh lương giáo viên công lập và tư thục: Đâu là lựa chọn tốt?',
        excerpt: 'Phân tích ưu nhược điểm của việc làm giáo viên ở trường công và trường tư...',
        category: 'Lương & Chế độ',
        date: '25/12/2025',
        readTime: '6 phút',
        views: 18765,
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#0a4429] to-[#0d5a36] py-10">
                <div className="max-w-[1320px] mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold text-white mb-3">
                        Cẩm nang nghề Giáo viên
                    </h1>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Chia sẻ kiến thức, kinh nghiệm và các xu hướng mới nhất trong ngành giáo dục
                    </p>
                </div>
            </section>

            <div className="max-w-[1320px] mx-auto px-4 py-8">
                {/* Category Tabs */}
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

                {/* Featured Articles */}
                <div className="grid lg:grid-cols-3 gap-5 mb-10">
                    {articles.filter(a => a.featured).map((article, i) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.id}`}
                            className={`bg-white rounded-xl overflow-hidden border border-[#e9eaec] hover:border-[#00b14f] hover:shadow-lg transition group ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                        >
                            <div className={`bg-gradient-to-br from-[#f3f5f7] to-[#e9eaec] relative ${i === 0 ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <span className="absolute top-3 left-3 bg-[#00b14f] text-white text-[11px] px-3 py-1 rounded-full font-medium">
                                    {article.category}
                                </span>
                            </div>
                            <div className={`p-5 ${i === 0 ? 'lg:p-6' : ''}`}>
                                <h3 className={`font-semibold text-[#212f3f] mb-2 group-hover:text-[#00b14f] transition line-clamp-2 ${i === 0 ? 'text-[18px]' : 'text-[15px]'}`}>
                                    {article.title}
                                </h3>
                                <p className="text-[#6f7882] text-[13px] line-clamp-2 mb-3">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center text-[12px] text-[#9ca3af]">
                                    <span>{article.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{article.readTime} đọc</span>
                                    <span className="mx-2">•</span>
                                    <span>{article.views.toLocaleString()} lượt xem</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* All Articles */}
                <h2 className="text-[20px] font-bold text-[#212f3f] mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 bg-[#00b14f] rounded-full"></span>
                    Bài viết mới nhất
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.id}`}
                            className="bg-white rounded-xl overflow-hidden border border-[#e9eaec] hover:border-[#00b14f] hover:shadow-lg transition group"
                        >
                            <div className="aspect-[16/10] bg-gradient-to-br from-[#f3f5f7] to-[#e9eaec] relative">
                                <span className="absolute top-3 left-3 bg-[#00b14f] text-white text-[11px] px-3 py-1 rounded-full font-medium">
                                    {article.category}
                                </span>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-[15px] text-[#212f3f] mb-2 group-hover:text-[#00b14f] transition line-clamp-2">
                                    {article.title}
                                </h3>
                                <div className="flex items-center text-[12px] text-[#9ca3af]">
                                    <span>{article.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{article.readTime} đọc</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-10">
                    <button className="px-10 py-3 border-2 border-[#00b14f] text-[#00b14f] rounded-[44px] font-semibold hover:bg-[#00b14f] hover:text-white transition">
                        Xem thêm bài viết
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
