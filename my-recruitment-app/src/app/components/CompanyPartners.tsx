'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'international', name: 'Trường Quốc tế' },
    { id: 'public', name: 'Trường Công lập' },
    { id: 'private', name: 'Trường Tư thục' },
    { id: 'center', name: 'Trung tâm Anh ngữ' },
    { id: 'kindergarten', name: 'Mầm non' },
];

const companies = [
    { id: 1, name: 'Vinschool', jobs: 156, followers: '32.5K', category: 'private', color: '#C62828' },
    { id: 2, name: 'APAX English', jobs: 234, followers: '25.3K', category: 'center', color: '#1E88E5' },
    { id: 3, name: 'British International School', jobs: 45, followers: '18.2K', category: 'international', color: '#00695C' },
    { id: 4, name: 'FPT Education', jobs: 89, followers: '45.1K', category: 'private', color: '#EF6C00' },
    { id: 5, name: 'VUS - Anh Văn Hội Việt Mỹ', jobs: 178, followers: '56.2K', category: 'center', color: '#1565C0' },
    { id: 6, name: 'Hanoi Amsterdam', jobs: 23, followers: '12.9K', category: 'public', color: '#7B1FA2' },
    { id: 7, name: 'Singapore International School', jobs: 67, followers: '28.7K', category: 'international', color: '#D32F2F' },
    { id: 8, name: 'Kinderworld', jobs: 145, followers: '38.7K', category: 'kindergarten', color: '#43A047' },
    { id: 9, name: 'Gateway', jobs: 52, followers: '14.3K', category: 'private', color: '#01579B' },
    { id: 10, name: 'ILA Vietnam', jobs: 98, followers: '28.6K', category: 'center', color: '#AD1457' },
    { id: 11, name: 'Marie Curie School', jobs: 34, followers: '21.4K', category: 'private', color: '#1976D2' },
    { id: 12, name: 'Wellspring School', jobs: 76, followers: '22.1K', category: 'private', color: '#00838F' },
];

export default function CompanyPartners() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [followedCompanies, setFollowedCompanies] = useState<number[]>([]);

    const filteredCompanies = activeCategory === 'all'
        ? companies
        : companies.filter(c => c.category === activeCategory);

    const toggleFollow = (companyId: number) => {
        setFollowedCompanies(prev =>
            prev.includes(companyId)
                ? prev.filter(id => id !== companyId)
                : [...prev, companyId]
        );
    };

    return (
        <section className="py-8 bg-white">
            <div className="max-w-[1320px] mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                    <h2 className="text-[20px] font-bold text-[#212f3f] flex items-center gap-3">
                        <span className="w-1 h-6 bg-[#00b14f] rounded-full"></span>
                        Trường học & Trung tâm hàng đầu
                    </h2>
                    <Link
                        href="/companies"
                        className="text-[#00b14f] hover:underline font-medium text-[14px] flex items-center gap-1"
                    >
                        Xem tất cả
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Category Filters */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition ${activeCategory === category.id
                                    ? 'bg-[#00b14f] text-white shadow-md'
                                    : 'bg-[#f3f5f7] text-[#212f3f] hover:bg-[#e8eaed]'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Companies Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filteredCompanies.map((company) => (
                        <div
                            key={company.id}
                            className="bg-white border border-[#e9eaec] rounded-xl p-4 hover:shadow-lg hover:border-[#00b14f] transition-all duration-200 group text-center"
                        >
                            {/* Company Logo */}
                            <Link href={`/companies/${company.id}`}>
                                <div
                                    className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center text-white font-bold text-[24px]"
                                    style={{ backgroundColor: company.color }}
                                >
                                    {company.name.charAt(0)}
                                </div>
                            </Link>

                            {/* Company Info */}
                            <Link href={`/companies/${company.id}`}>
                                <h3 className="font-semibold text-[14px] text-[#212f3f] mb-1 line-clamp-1 group-hover:text-[#00b14f] transition">
                                    {company.name}
                                </h3>
                            </Link>

                            <p className="text-[13px] text-[#6f7882] mb-3">
                                {company.jobs} vị trí tuyển dụng
                            </p>

                            {/* Follow Button */}
                            <button
                                onClick={() => toggleFollow(company.id)}
                                className={`w-full py-2 rounded-lg text-[13px] font-medium transition ${followedCompanies.includes(company.id)
                                        ? 'bg-[#00b14f] text-white'
                                        : 'border border-[#00b14f] text-[#00b14f] hover:bg-[#00b14f] hover:text-white'
                                    }`}
                            >
                                {followedCompanies.includes(company.id) ? '✓ Đang theo dõi' : '+ Theo dõi'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
