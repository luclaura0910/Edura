'use client';

import { useState } from 'react';
import Link from 'next/link';
import JobCard from './JobCard';

const tabs = [
    { id: 'all', name: 'Tất cả' },
    { id: 'hot', name: 'Tin tuyển dụng Hot' },
    { id: 'english', name: 'Tiếng Anh' },
    { id: 'math', name: 'Toán học' },
    { id: 'primary', name: 'Tiểu học' },
    { id: 'kindergarten', name: 'Mầm non' },
];

const mockJobs = [
    {
        id: 1,
        title: 'Giáo viên Tiếng Anh IELTS (Full-time)',
        company: 'Hệ thống Anh ngữ APAX English',
        salary: '18 - 30 Triệu',
        location: 'Hà Nội',
        isHot: true,
        experience: '2-3 năm',
        postedDate: 'Hôm nay',
    },
    {
        id: 2,
        title: 'Giáo viên Toán cấp 2 - THCS',
        company: 'Trường THCS & THPT Nguyễn Siêu',
        salary: '15 - 25 Triệu',
        location: 'Hà Nội',
        isUrgent: true,
        experience: '1-2 năm',
        postedDate: 'Hôm nay',
    },
    {
        id: 3,
        title: 'Giáo viên chủ nhiệm lớp 1-5',
        company: 'Trường Tiểu học Quốc tế Gateway',
        salary: '12 - 20 Triệu',
        location: 'Hồ Chí Minh',
        isHot: true,
        experience: '1-2 năm',
        postedDate: '1 ngày trước',
    },
    {
        id: 4,
        title: 'Giáo viên Mầm non Song ngữ',
        company: 'Hệ thống Mầm non Kinderworld',
        salary: '10 - 18 Triệu',
        location: 'Hồ Chí Minh',
        experience: 'Không yêu cầu',
        postedDate: 'Hôm nay',
    },
    {
        id: 5,
        title: 'Giáo viên Vật lý THPT chuyên',
        company: 'Trường THPT Chuyên Hà Nội Amsterdam',
        salary: '20 - 35 Triệu',
        location: 'Hà Nội',
        isHot: true,
        isUrgent: true,
        experience: '5+ năm',
        postedDate: 'Hôm nay',
    },
    {
        id: 6,
        title: 'Giáo viên Hóa học cấp 3',
        company: 'Trường Liên cấp Vinschool',
        salary: '18 - 28 Triệu',
        location: 'Hà Nội',
        experience: '2-3 năm',
        postedDate: '2 ngày trước',
    },
    {
        id: 7,
        title: 'Giáo viên dạy Nhạc/Âm nhạc',
        company: 'Trường Quốc tế British International School',
        salary: '15 - 25 Triệu',
        location: 'Hồ Chí Minh',
        isHot: true,
        experience: '1-2 năm',
        postedDate: 'Hôm nay',
    },
    {
        id: 8,
        title: 'Giáo viên Tin học - STEM',
        company: 'Trường THCS-THPT Wellspring',
        salary: '16 - 26 Triệu',
        location: 'Hà Nội',
        experience: '2-3 năm',
        postedDate: '1 ngày trước',
    },
    {
        id: 9,
        title: 'Trưởng bộ môn Tiếng Anh',
        company: 'VUS - Anh Văn Hội Việt Mỹ',
        salary: '25 - 40 Triệu',
        location: 'Hồ Chí Minh',
        isUrgent: true,
        experience: '5+ năm',
        postedDate: 'Hôm nay',
    },
    {
        id: 10,
        title: 'Giáo viên Ngữ văn THCS',
        company: 'Trường THCS Marie Curie',
        salary: '14 - 22 Triệu',
        location: 'Hà Nội',
        experience: '1-2 năm',
        postedDate: '3 ngày trước',
    },
    {
        id: 11,
        title: 'Giáo viên Thể dục/Thể chất',
        company: 'Trường Quốc tế Singapore (SIS)',
        salary: '12 - 20 Triệu',
        location: 'Hồ Chí Minh',
        isHot: true,
        experience: '1-2 năm',
        postedDate: 'Hôm nay',
    },
    {
        id: 12,
        title: 'Giáo viên Mỹ thuật Tiểu học',
        company: 'Trường Tiểu học FPT',
        salary: '10 - 16 Triệu',
        location: 'Đà Nẵng',
        experience: 'Không yêu cầu',
        postedDate: '1 ngày trước',
    },
];

export default function FeaturedJobs() {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <section className="py-8 bg-[#f3f5f7]">
            <div className="max-w-[1320px] mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                    <h2 className="text-[20px] font-bold text-[#212f3f] flex items-center gap-3">
                        <span className="w-1 h-6 bg-[#00b14f] rounded-full"></span>
                        Việc làm Giáo viên hấp dẫn
                    </h2>
                    <Link
                        href="/jobs"
                        className="text-[#00b14f] hover:underline font-medium text-[14px] flex items-center gap-1"
                    >
                        Xem tất cả
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-2 mb-5 overflow-x-auto pb-2 scrollbar-hide">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition ${activeTab === tab.id
                                    ? 'bg-[#00b14f] text-white shadow-md'
                                    : 'bg-white text-[#212f3f] hover:bg-gray-50 border border-[#e9eaec]'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockJobs.map((job) => (
                        <JobCard key={job.id} {...job} />
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8">
                    <button className="px-10 py-3 border-2 border-[#00b14f] text-[#00b14f] rounded-[44px] font-semibold hover:bg-[#00b14f] hover:text-white transition text-[15px]">
                        Xem thêm việc làm giáo viên
                    </button>
                </div>
            </div>
        </section>
    );
}
