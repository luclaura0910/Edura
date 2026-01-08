'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

import UserSidebar from '../components/UserSidebar';

export default function MyJobsPage() {
    const [activeTab, setActiveTab] = useState<'saved' | 'applied'>('saved');

    const savedJobs = [
        { id: 1, title: 'Giáo viên Tiếng Anh IELTS', company: 'APAX English', salary: '18 - 30 Triệu', location: 'Hà Nội', deadline: '15/02/2026', savedDate: '07/01/2026' },
        { id: 2, title: 'Giáo viên Mầm non Song ngữ', company: 'Kinderworld', salary: '10 - 18 Triệu', location: 'Hồ Chí Minh', deadline: '28/01/2026', savedDate: '06/01/2026' },
        { id: 5, title: 'Giáo viên Vật lý THPT', company: 'Vinschool', salary: '20 - 35 Triệu', location: 'Hà Nội', deadline: '10/02/2026', savedDate: '05/01/2026' },
    ];

    const appliedJobs = [
        { id: 3, title: 'Giáo viên Toán cấp 2', company: 'Trường THCS Nguyễn Siêu', salary: '15 - 25 Triệu', location: 'Hà Nội', status: 'Đã xem', appliedDate: '04/01/2026' },
        { id: 8, title: 'Giáo viên Tin học STEM', company: 'Wellspring', salary: '16 - 26 Triệu', location: 'Hà Nội', status: 'Chờ duyệt', appliedDate: '03/01/2026' },
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
                        <h1 className="text-2xl font-bold text-[#212f3f] mb-6">Việc làm của tôi</h1>

                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            {/* Tabs */}
                            <div className="flex border-b border-[#e9eaec]">
                                <button
                                    onClick={() => setActiveTab('saved')}
                                    className={`flex-1 py-4 text-[15px] font-medium border-b-2 transition ${activeTab === 'saved' ? 'border-[#00b14f] text-[#00b14f]' : 'border-transparent text-[#6f7882] hover:text-[#00b14f]'
                                        }`}
                                >
                                    Việc làm đã lưu ({savedJobs.length})
                                </button>
                                <button
                                    onClick={() => setActiveTab('applied')}
                                    className={`flex-1 py-4 text-[15px] font-medium border-b-2 transition ${activeTab === 'applied' ? 'border-[#00b14f] text-[#00b14f]' : 'border-transparent text-[#6f7882] hover:text-[#00b14f]'
                                        }`}
                                >
                                    Việc làm đã ứng tuyển ({appliedJobs.length})
                                </button>
                            </div>

                            {/* List */}
                            <div className="p-4">
                                {activeTab === 'saved' ? (
                                    <div className="space-y-4">
                                        {savedJobs.map((job) => (
                                            <div key={job.id} className="flex gap-4 p-4 border border-[#e9eaec] rounded-lg hover:border-[#00b14f] hover:shadow-sm transition bg-white group">
                                                <div className="w-16 h-16 rounded-lg border border-[#e9eaec] flex items-center justify-center bg-[#f3f5f7] text-[#00b14f] font-bold text-xl flex-shrink-0">
                                                    {job.company.charAt(0)}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <Link href={`/jobs/${job.id}`} className="font-semibold text-[#212f3f] text-[16px] hover:text-[#00b14f] transition">
                                                                {job.title}
                                                            </Link>
                                                            <p className="text-[#6f7882] text-[14px] mt-1">{job.company}</p>
                                                        </div>
                                                        <button className="text-[#ff4d4f] opacity-0 group-hover:opacity-100 transition text-[13px] hover:underline">
                                                            Bỏ lưu
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-3 text-[13px] text-[#6f7882]">
                                                        <span className="text-[#00b14f] font-medium">{job.salary}</span>
                                                        <span>{job.location}</span>
                                                        <span>Hạn nộp: {job.deadline}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {appliedJobs.map((job) => (
                                            <div key={job.id} className="flex gap-4 p-4 border border-[#e9eaec] rounded-lg hover:border-[#00b14f] hover:shadow-sm transition bg-white">
                                                <div className="w-16 h-16 rounded-lg border border-[#e9eaec] flex items-center justify-center bg-[#f3f5f7] text-[#00b14f] font-bold text-xl flex-shrink-0">
                                                    {job.company.charAt(0)}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <Link href={`/jobs/${job.id}`} className="font-semibold text-[#212f3f] text-[16px] hover:text-[#00b14f] transition">
                                                                {job.title}
                                                            </Link>
                                                            <p className="text-[#6f7882] text-[14px] mt-1">{job.company}</p>
                                                        </div>
                                                        <span className={`px-3 py-1 rounded-full text-[12px] font-medium ${job.status === 'Đã xem' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                                                            }`}>
                                                            {job.status}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-3 text-[13px] text-[#6f7882]">
                                                        <span className="text-[#00b14f] font-medium">{job.salary}</span>
                                                        <span>Ứng tuyển: {job.appliedDate}</span>
                                                        <Link href={`/jobs/${job.id}`} className="ml-auto text-[#00b14f] hover:underline">
                                                            Xem lại CV đã nộp
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Empty State (if needed) */}
                                {((activeTab === 'saved' && savedJobs.length === 0) || (activeTab === 'applied' && appliedJobs.length === 0)) && (
                                    <div className="text-center py-12">
                                        <div className="w-24 h-24 bg-[#f3f5f7] rounded-full flex items-center justify-center mx-auto mb-4 text-4xl text-gray-300">
                                            📂
                                        </div>
                                        <p className="text-[#6f7882]">Bạn chưa có việc làm nào trong danh sách này</p>
                                        <Link href="/jobs" className="inline-block mt-4 px-6 py-2 bg-[#00b14f] text-white rounded-lg hover:bg-[#009643] transition">
                                            Tìm việc ngay
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
