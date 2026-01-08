import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

// This would normally come from an API
const jobData = {
    id: 1,
    title: 'Giáo viên Tiếng Anh IELTS (Full-time)',
    company: 'APAX English',
    companyId: 2,
    salary: '18 - 30 Triệu',
    location: 'Hà Nội',
    experience: '2-3 năm',
    education: 'Đại học',
    level: 'Nhân viên',
    quantity: 5,
    gender: 'Không yêu cầu',
    deadline: '15/02/2026',
    posted: '05/01/2026',
    views: 1234,
    applications: 45,
    isHot: true,
    description: `
    <h3>Mô tả công việc</h3>
    <ul>
      <li>Giảng dạy tiếng Anh IELTS cho học viên từ 15-25 tuổi</li>
      <li>Chuẩn bị giáo án, bài giảng theo chương trình chuẩn Cambridge</li>
      <li>Đánh giá, theo dõi tiến độ học tập của học viên</li>
      <li>Tham gia các hoạt động ngoại khóa của trung tâm</li>
      <li>Phối hợp với bộ phận chăm sóc học viên để đảm bảo chất lượng dạy học</li>
    </ul>
    
    <h3>Yêu cầu ứng viên</h3>
    <ul>
      <li>Tốt nghiệp Đại học chuyên ngành Sư phạm Tiếng Anh hoặc tương đương</li>
      <li>Chứng chỉ IELTS 7.0 trở lên hoặc tương đương</li>
      <li>Có kinh nghiệm giảng dạy IELTS từ 2 năm trở lên</li>
      <li>Kỹ năng giao tiếp tốt, nhiệt tình với học viên</li>
      <li>Sử dụng thành thạo các công cụ giảng dạy trực tuyến</li>
    </ul>
    
    <h3>Quyền lợi</h3>
    <ul>
      <li>Lương cạnh tranh 18 - 30 triệu/tháng tùy năng lực</li>
      <li>Thưởng theo hiệu suất giảng dạy</li>
      <li>Đóng BHXH, BHYT, BHTN đầy đủ theo quy định</li>
      <li>Được đào tạo nâng cao nghiệp vụ thường xuyên</li>
      <li>Môi trường làm việc chuyên nghiệp, năng động</li>
      <li>Cơ hội thăng tiến lên vị trí quản lý</li>
    </ul>
  `,
    workTime: 'Thứ 2 - Thứ 7 (8:00 - 17:00)',
    address: '123 Trần Duy Hưng, Cầu Giấy, Hà Nội',
};

export default function JobDetailPage() {
    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            {/* Breadcrumb */}
            <div className="bg-white border-b border-[#e9eaec]">
                <div className="max-w-[1320px] mx-auto px-4 py-3">
                    <nav className="flex items-center gap-2 text-[14px]">
                        <Link href="/" className="text-[#6f7882] hover:text-[#00b14f]">Trang chủ</Link>
                        <span className="text-[#9ca3af]">/</span>
                        <Link href="/jobs" className="text-[#6f7882] hover:text-[#00b14f]">Việc làm giáo viên</Link>
                        <span className="text-[#9ca3af]">/</span>
                        <span className="text-[#212f3f]">{jobData.title}</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto px-4 py-6">
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-5">
                        {/* Job Header */}
                        <div className="bg-white rounded-xl p-6">
                            <div className="flex gap-5">
                                <div className="w-24 h-24 bg-[#1E88E5]/10 rounded-xl flex items-center justify-center text-[#1E88E5] font-bold text-3xl flex-shrink-0">
                                    A
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <h1 className="text-[22px] font-bold text-[#212f3f]">{jobData.title}</h1>
                                        {jobData.isHot && (
                                            <span className="px-3 py-1 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white text-[12px] font-bold rounded">HOT</span>
                                        )}
                                    </div>
                                    <Link href={`/companies/${jobData.companyId}`} className="text-[#6f7882] hover:text-[#00b14f] text-[16px]">
                                        {jobData.company}
                                    </Link>
                                    <div className="flex items-center gap-4 mt-4">
                                        <span className="flex items-center gap-2 text-[#00b14f] font-bold text-[18px]">
                                            💰 {jobData.salary}
                                        </span>
                                        <span className="flex items-center gap-1 text-[#6f7882] text-[14px]">
                                            📍 {jobData.location}
                                        </span>
                                        <span className="flex items-center gap-1 text-[#6f7882] text-[14px]">
                                            ⏰ Hạn nộp: {jobData.deadline}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-6 pt-6 border-t border-[#f3f5f7]">
                                <button className="flex-1 py-3.5 bg-[#00b14f] text-white rounded-lg font-semibold hover:bg-[#009643] transition">
                                    Ứng tuyển ngay
                                </button>
                                <button className="px-6 py-3.5 border border-[#e9eaec] rounded-lg text-[#6f7882] hover:border-[#00b14f] hover:text-[#00b14f] transition">
                                    ❤️ Lưu tin
                                </button>
                            </div>
                        </div>

                        {/* Job Details */}
                        <div className="bg-white rounded-xl p-6">
                            <h2 className="text-[18px] font-bold text-[#212f3f] mb-4 flex items-center gap-2">
                                <span className="w-1 h-5 bg-[#00b14f] rounded-full"></span>
                                Chi tiết tin tuyển dụng
                            </h2>

                            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#f3f5f7] rounded-lg">
                                <div className="flex gap-3">
                                    <span className="text-[22px]">💼</span>
                                    <div>
                                        <p className="text-[#6f7882] text-[13px]">Kinh nghiệm</p>
                                        <p className="font-semibold text-[#212f3f]">{jobData.experience}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[22px]">🎓</span>
                                    <div>
                                        <p className="text-[#6f7882] text-[13px]">Học vấn</p>
                                        <p className="font-semibold text-[#212f3f]">{jobData.education}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[22px]">👥</span>
                                    <div>
                                        <p className="text-[#6f7882] text-[13px]">Số lượng</p>
                                        <p className="font-semibold text-[#212f3f]">{jobData.quantity} người</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[22px]">📊</span>
                                    <div>
                                        <p className="text-[#6f7882] text-[13px]">Cấp bậc</p>
                                        <p className="font-semibold text-[#212f3f]">{jobData.level}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div
                                className="prose prose-sm max-w-none text-[#4d5965]"
                                dangerouslySetInnerHTML={{ __html: jobData.description }}
                                style={{
                                    lineHeight: 1.8,
                                }}
                            />

                            {/* Work Info */}
                            <div className="mt-6 pt-6 border-t border-[#f3f5f7]">
                                <h3 className="font-semibold text-[#212f3f] mb-3">Thời gian & Địa điểm làm việc</h3>
                                <div className="space-y-2 text-[14px] text-[#4d5965]">
                                    <p><strong>Thời gian:</strong> {jobData.workTime}</p>
                                    <p><strong>Địa chỉ:</strong> {jobData.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-5">
                        {/* Company Info */}
                        <div className="bg-white rounded-xl p-5">
                            <h3 className="font-bold text-[#212f3f] mb-4">Thông tin công ty</h3>
                            <div className="flex gap-4 items-center mb-4">
                                <div className="w-14 h-14 bg-[#1E88E5]/10 rounded-xl flex items-center justify-center text-[#1E88E5] font-bold text-xl">
                                    A
                                </div>
                                <div>
                                    <Link href={`/companies/${jobData.companyId}`} className="font-semibold text-[#212f3f] hover:text-[#00b14f]">
                                        {jobData.company}
                                    </Link>
                                    <p className="text-[13px] text-[#6f7882]">Trung tâm Anh ngữ</p>
                                </div>
                            </div>
                            <p className="text-[14px] text-[#6f7882] mb-4">
                                Hệ thống Anh ngữ hàng đầu Việt Nam với hơn 100 cơ sở trên toàn quốc...
                            </p>
                            <Link
                                href={`/companies/${jobData.companyId}`}
                                className="block text-center py-2.5 border border-[#00b14f] text-[#00b14f] rounded-lg font-medium hover:bg-[#00b14f] hover:text-white transition text-[14px]"
                            >
                                Xem trang công ty
                            </Link>
                        </div>

                        {/* Job Stats */}
                        <div className="bg-white rounded-xl p-5">
                            <h3 className="font-bold text-[#212f3f] mb-4">Thống kê</h3>
                            <div className="space-y-3 text-[14px]">
                                <div className="flex justify-between">
                                    <span className="text-[#6f7882]">Ngày đăng</span>
                                    <span className="text-[#212f3f]">{jobData.posted}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#6f7882]">Hạn nộp hồ sơ</span>
                                    <span className="text-[#212f3f]">{jobData.deadline}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#6f7882]">Lượt xem</span>
                                    <span className="text-[#212f3f]">{jobData.views.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#6f7882]">Số lượt ứng tuyển</span>
                                    <span className="text-[#00b14f] font-semibold">{jobData.applications}</span>
                                </div>
                            </div>
                        </div>

                        {/* Share */}
                        <div className="bg-white rounded-xl p-5">
                            <h3 className="font-bold text-[#212f3f] mb-4">Chia sẻ tin tuyển dụng</h3>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2.5 bg-[#1877F2] text-white rounded-lg text-[14px] font-medium hover:opacity-90">
                                    Facebook
                                </button>
                                <button className="flex-1 py-2.5 bg-[#0A66C2] text-white rounded-lg text-[14px] font-medium hover:opacity-90">
                                    LinkedIn
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
