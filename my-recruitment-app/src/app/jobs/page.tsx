import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const categories = [
    { name: 'Giáo viên Tiếng Anh', count: 2456 },
    { name: 'Giáo viên Toán học', count: 1823 },
    { name: 'Giáo viên Mầm non', count: 3241 },
    { name: 'Giáo viên Tiểu học', count: 2187 },
    { name: 'Giáo viên THCS', count: 1654 },
    { name: 'Giáo viên THPT', count: 1432 },
    { name: 'Giáo viên Âm nhạc', count: 456 },
    { name: 'Giáo viên Thể dục', count: 387 },
    { name: 'Giáo viên Tin học', count: 678 },
    { name: 'Giáo viên Vật lý', count: 543 },
];

const locations = [
    'Tất cả', 'Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Bình Dương', 'Đồng Nai', 'Bắc Ninh'
];

const salaryRanges = [
    'Tất cả mức lương', 'Dưới 10 triệu', '10 - 15 triệu', '15 - 20 triệu', '20 - 30 triệu', 'Trên 30 triệu', 'Thỏa thuận'
];

const experiences = [
    'Tất cả', 'Chưa có kinh nghiệm', 'Dưới 1 năm', '1 - 2 năm', '2 - 3 năm', '3 - 5 năm', 'Trên 5 năm'
];

const mockJobs = [
    { id: 1, title: 'Giáo viên Tiếng Anh IELTS', company: 'APAX English', salary: '18 - 30 Triệu', location: 'Hà Nội', experience: '2-3 năm', isHot: true, deadline: '15/02/2026' },
    { id: 2, title: 'Giáo viên Toán cấp 2', company: 'Trường THCS Nguyễn Siêu', salary: '15 - 25 Triệu', location: 'Hà Nội', experience: '1-2 năm', isUrgent: true, deadline: '20/01/2026' },
    { id: 3, title: 'Giáo viên chủ nhiệm lớp 1-5', company: 'Gateway', salary: '12 - 20 Triệu', location: 'Hồ Chí Minh', experience: '1-2 năm', deadline: '25/01/2026' },
    { id: 4, title: 'Giáo viên Mầm non Song ngữ', company: 'Kinderworld', salary: '10 - 18 Triệu', location: 'Hồ Chí Minh', experience: 'Không yêu cầu', isHot: true, deadline: '28/01/2026' },
    { id: 5, title: 'Giáo viên Vật lý THPT', company: 'Vinschool', salary: '20 - 35 Triệu', location: 'Hà Nội', experience: '3-5 năm', isHot: true, deadline: '10/02/2026' },
    { id: 6, title: 'Giáo viên Hóa học', company: 'FPT Education', salary: '18 - 28 Triệu', location: 'Đà Nẵng', experience: '2-3 năm', deadline: '05/02/2026' },
    { id: 7, title: 'Giáo viên Âm nhạc', company: 'British International School', salary: '15 - 25 Triệu', location: 'Hồ Chí Minh', experience: '1-2 năm', deadline: '30/01/2026' },
    { id: 8, title: 'Giáo viên Tin học STEM', company: 'Wellspring', salary: '16 - 26 Triệu', location: 'Hà Nội', experience: '2-3 năm', isUrgent: true, deadline: '18/01/2026' },
    { id: 9, title: 'Trưởng bộ môn Tiếng Anh', company: 'VUS', salary: '25 - 40 Triệu', location: 'Hồ Chí Minh', experience: '5+ năm', isHot: true, deadline: '28/02/2026' },
    { id: 10, title: 'Giáo viên Ngữ văn THCS', company: 'Marie Curie School', salary: '14 - 22 Triệu', location: 'Hà Nội', experience: '1-2 năm', deadline: '22/01/2026' },
];

export default function JobsPage() {
    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            {/* Hero Search Section */}
            <section className="bg-gradient-to-r from-[#0a4429] to-[#0d5a36] py-8">
                <div className="max-w-[1320px] mx-auto px-4">
                    <h1 className="text-2xl font-bold text-white mb-4 text-center">
                        Tìm việc làm Giáo viên nhanh 24h, việc làm mới nhất trên toàn quốc
                    </h1>
                    <p className="text-white/80 text-center mb-6">
                        Tiếp cận <span className="text-[#5ddb6d] font-semibold">15,000+</span> tin tuyển dụng giáo viên mỗi ngày
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white rounded-[44px] shadow-xl p-1.5 flex flex-col md:flex-row gap-2 max-w-4xl mx-auto">
                        <div className="flex-1 flex items-center px-5 py-3">
                            <svg className="w-5 h-5 text-[#00b14f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type="text" placeholder="Vị trí giáo viên, tên trường học" className="w-full outline-none text-[15px]" />
                        </div>
                        <div className="hidden md:block w-px bg-gray-200 my-2"></div>
                        <div className="md:w-[200px] flex items-center px-5 py-3">
                            <svg className="w-5 h-5 text-[#00b14f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <select className="w-full outline-none text-[15px] bg-transparent">
                                {locations.map((loc, i) => <option key={i}>{loc}</option>)}
                            </select>
                        </div>
                        <button className="bg-[#00b14f] text-white px-8 py-4 rounded-[44px] font-semibold hover:bg-[#009643] transition text-[15px]">
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-[1320px] mx-auto px-4 py-8">
                <div className="flex gap-6">
                    {/* Sidebar Filters */}
                    <aside className="hidden lg:block w-[280px] flex-shrink-0">
                        {/* Categories */}
                        <div className="bg-white rounded-xl p-5 mb-4">
                            <h3 className="font-semibold text-[#212f3f] mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#00b14f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                                Danh mục nghề giáo viên
                            </h3>
                            <ul className="space-y-2">
                                {categories.map((cat, i) => (
                                    <li key={i}>
                                        <a href="#" className="flex justify-between text-[14px] text-[#4d5965] hover:text-[#00b14f] py-1.5">
                                            <span>{cat.name}</span>
                                            <span className="text-[#9ca3af]">({cat.count})</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Salary Filter */}
                        <div className="bg-white rounded-xl p-5 mb-4">
                            <h3 className="font-semibold text-[#212f3f] mb-4">Mức lương</h3>
                            <ul className="space-y-2">
                                {salaryRanges.map((range, i) => (
                                    <li key={i}>
                                        <label className="flex items-center gap-2 text-[14px] text-[#4d5965] cursor-pointer hover:text-[#00b14f]">
                                            <input type="radio" name="salary" className="w-4 h-4 text-[#00b14f]" />
                                            {range}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Experience Filter */}
                        <div className="bg-white rounded-xl p-5">
                            <h3 className="font-semibold text-[#212f3f] mb-4">Kinh nghiệm</h3>
                            <ul className="space-y-2">
                                {experiences.map((exp, i) => (
                                    <li key={i}>
                                        <label className="flex items-center gap-2 text-[14px] text-[#4d5965] cursor-pointer hover:text-[#00b14f]">
                                            <input type="radio" name="experience" className="w-4 h-4 text-[#00b14f]" />
                                            {exp}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Jobs List */}
                    <main className="flex-1">
                        {/* Results Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[18px] font-bold text-[#212f3f]">
                                <span className="text-[#00b14f]">15,420</span> việc làm giáo viên
                            </h2>
                            <select className="border border-[#e9eaec] rounded-lg px-4 py-2 text-[14px] outline-none focus:border-[#00b14f]">
                                <option>Mới nhất</option>
                                <option>Lương cao nhất</option>
                                <option>Phù hợp nhất</option>
                            </select>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                            {['Tất cả', 'Việc làm HOT', 'Tuyển gấp', 'Lương cao', 'Không yêu cầu KN'].map((tab, i) => (
                                <button key={i} className={`px-4 py-2 rounded-full text-[14px] font-medium whitespace-nowrap transition ${i === 0 ? 'bg-[#00b14f] text-white' : 'bg-white text-[#4d5965] border border-[#e9eaec] hover:border-[#00b14f]'}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Jobs Grid */}
                        <div className="space-y-3">
                            {mockJobs.map((job) => (
                                <div key={job.id} className="bg-white rounded-lg border border-[#e9eaec] hover:border-[#00b14f] hover:shadow-md transition p-4">
                                    <div className="flex gap-4">
                                        <div className="w-[80px] h-[80px] border border-[#e9eaec] rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00b14f]/5 to-[#00b14f]/15 flex-shrink-0">
                                            <span className="text-[#00b14f] font-bold text-2xl">{job.company.charAt(0)}</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <Link href={`/jobs/${job.id}`} className="font-semibold text-[16px] text-[#212f3f] hover:text-[#00b14f] transition">
                                                        {job.title}
                                                    </Link>
                                                    <p className="text-[#6f7882] text-[14px] mt-1">{job.company}</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    {job.isHot && <span className="px-2 py-0.5 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white text-[10px] font-bold rounded">HOT</span>}
                                                    {job.isUrgent && <span className="px-2 py-0.5 bg-[#e74c3c] text-white text-[10px] font-bold rounded">Gấp</span>}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 mt-3 flex-wrap">
                                                <span className="text-[#00b14f] font-semibold text-[14px]">{job.salary}</span>
                                                <span className="text-[#6f7882] text-[13px] flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                                    {job.location}
                                                </span>
                                                <span className="text-[#6f7882] text-[13px]">{job.experience}</span>
                                                <span className="text-[#9ca3af] text-[13px] ml-auto">Hạn: {job.deadline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 mt-8">
                            <button className="w-10 h-10 rounded-lg border border-[#e9eaec] flex items-center justify-center text-[#6f7882] hover:border-[#00b14f] hover:text-[#00b14f]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button key={page} className={`w-10 h-10 rounded-lg font-medium text-[14px] ${page === 1 ? 'bg-[#00b14f] text-white' : 'border border-[#e9eaec] text-[#6f7882] hover:border-[#00b14f] hover:text-[#00b14f]'}`}>
                                    {page}
                                </button>
                            ))}
                            <button className="w-10 h-10 rounded-lg border border-[#e9eaec] flex items-center justify-center text-[#6f7882] hover:border-[#00b14f] hover:text-[#00b14f]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
