import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const categories = ['Tất cả', 'Trường Quốc tế', 'Trường Công lập', 'Trường Tư thục', 'Trung tâm Anh ngữ', 'Mầm non'];

const companies = [
    { id: 1, name: 'Vinschool', description: 'Hệ thống các cơ sở giáo dục từ Mầm non đến THPT thuộc Tập đoàn Vingroup', jobs: 156, followers: '32.5K', type: 'Trường Tư thục', location: 'Hà Nội, Hồ Chí Minh', color: '#C62828' },
    { id: 2, name: 'APAX English', description: 'Hệ thống Anh ngữ hàng đầu Việt Nam với phương pháp giảng dạy hiện đại', jobs: 234, followers: '25.3K', type: 'Trung tâm Anh ngữ', location: 'Toàn quốc', color: '#1E88E5' },
    { id: 3, name: 'British International School', description: 'Trường Quốc tế Anh chương trình Cambridge từ mầm non đến lớp 12', jobs: 45, followers: '18.2K', type: 'Trường Quốc tế', location: 'Hà Nội, Hồ Chí Minh', color: '#00695C' },
    { id: 4, name: 'FPT Education', description: 'Hệ thống giáo dục từ Tiểu học đến Đại học của Tập đoàn FPT', jobs: 89, followers: '45.1K', type: 'Trường Tư thục', location: 'Hà Nội, Đà Nẵng', color: '#EF6C00' },
    { id: 5, name: 'VUS - Anh Văn Hội Việt Mỹ', description: 'Trung tâm Anh ngữ với hơn 25 năm kinh nghiệm đào tạo', jobs: 178, followers: '56.2K', type: 'Trung tâm Anh ngữ', location: 'Hồ Chí Minh', color: '#1565C0' },
    { id: 6, name: 'Trường THPT chuyên Hà Nội Amsterdam', description: 'Trường THPT chuyên hàng đầu Việt Nam', jobs: 23, followers: '12.9K', type: 'Trường Công lập', location: 'Hà Nội', color: '#7B1FA2' },
    { id: 7, name: 'Singapore International School', description: 'Trường Quốc tế Singapore với chương trình giáo dục chuẩn quốc tế', jobs: 67, followers: '28.7K', type: 'Trường Quốc tế', location: 'Hồ Chí Minh', color: '#D32F2F' },
    { id: 8, name: 'Kinderworld', description: 'Hệ thống mầm non song ngữ chất lượng cao', jobs: 145, followers: '38.7K', type: 'Mầm non', location: 'Toàn quốc', color: '#43A047' },
    { id: 9, name: 'Gateway', description: 'Trường Liên cấp quốc tế Gateway', jobs: 52, followers: '14.3K', type: 'Trường Tư thục', location: 'Hà Nội', color: '#01579B' },
    { id: 10, name: 'ILA Vietnam', description: 'Trung tâm Anh ngữ chuẩn quốc tế', jobs: 98, followers: '28.6K', type: 'Trung tâm Anh ngữ', location: 'Toàn quốc', color: '#AD1457' },
    { id: 11, name: 'Marie Curie School', description: 'Trường liên cấp chất lượng cao', jobs: 34, followers: '21.4K', type: 'Trường Tư thục', location: 'Hà Nội', color: '#1976D2' },
    { id: 12, name: 'Wellspring School', description: 'Trường song ngữ quốc tế Wellspring', jobs: 76, followers: '22.1K', type: 'Trường Tư thục', location: 'Hà Nội', color: '#00838F' },
];

export default function CompaniesPage() {
    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#0a4429] to-[#0d5a36] py-10">
                <div className="max-w-[1320px] mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold text-white mb-3">
                        Trường học & Trung tâm đào tạo
                    </h1>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Khám phá hơn 3,500+ trường học và trung tâm giáo dục uy tín trên cả nước
                    </p>
                </div>
            </section>

            <div className="max-w-[1320px] mx-auto px-4 py-8">
                {/* Search & Filter */}
                <div className="bg-white rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4">
                    <div className="flex-1 flex items-center px-4 py-2 border border-[#e9eaec] rounded-lg">
                        <svg className="w-5 h-5 text-[#00b14f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Tìm theo tên trường học, trung tâm..." className="w-full outline-none text-[15px]" />
                    </div>
                    <select className="px-4 py-3 border border-[#e9eaec] rounded-lg text-[15px] outline-none focus:border-[#00b14f]">
                        <option>Tất cả địa điểm</option>
                        <option>Hà Nội</option>
                        <option>Hồ Chí Minh</option>
                        <option>Đà Nẵng</option>
                    </select>
                </div>

                {/* Category Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
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

                {/* Companies Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {companies.map((company) => (
                        <Link
                            key={company.id}
                            href={`/companies/${company.id}`}
                            className="bg-white rounded-xl p-5 border border-[#e9eaec] hover:border-[#00b14f] hover:shadow-lg transition group"
                        >
                            <div className="flex gap-4">
                                <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
                                    style={{ backgroundColor: company.color }}
                                >
                                    {company.name.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-[16px] text-[#212f3f] group-hover:text-[#00b14f] transition line-clamp-1">
                                        {company.name}
                                    </h3>
                                    <p className="text-[#6f7882] text-[13px] line-clamp-2 mt-1">
                                        {company.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#f3f5f7]">
                                <span className="px-2 py-1 bg-[#f3f5f7] text-[#6f7882] text-[12px] rounded">
                                    {company.type}
                                </span>
                                <span className="text-[#6f7882] text-[13px] flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                    {company.location}
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex gap-4 text-[13px]">
                                    <span className="text-[#00b14f] font-semibold">{company.jobs} việc làm</span>
                                    <span className="text-[#6f7882]">{company.followers} theo dõi</span>
                                </div>
                                <button className="px-4 py-1.5 border border-[#00b14f] text-[#00b14f] rounded-lg text-[13px] font-medium hover:bg-[#00b14f] hover:text-white transition">
                                    + Theo dõi
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-10">
                    <button className="px-10 py-3 border-2 border-[#00b14f] text-[#00b14f] rounded-[44px] font-semibold hover:bg-[#00b14f] hover:text-white transition">
                        Xem thêm trường học
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
