import Link from 'next/link';

interface JobCardProps {
    id: number;
    title: string;
    company: string;
    logo?: string;
    salary: string;
    location: string;
    isHot?: boolean;
    isUrgent?: boolean;
    postedDate?: string;
    experience?: string;
}

export default function JobCard({
    id,
    title,
    company,
    logo,
    salary,
    location,
    isHot = false,
    isUrgent = false,
    postedDate = 'Hôm nay',
    experience = 'Không yêu cầu'
}: JobCardProps) {
    return (
        <div className="bg-white rounded-lg border border-[#e9eaec] hover:border-[#00b14f] hover:shadow-[0_4px_20px_rgba(0,177,79,0.15)] transition-all duration-200 group overflow-hidden">
            <div className="p-4">
                <div className="flex gap-4">
                    {/* Company Logo */}
                    <Link href={`/companies/${company}`} className="flex-shrink-0">
                        <div className="w-[70px] h-[70px] border border-[#e9eaec] rounded-lg flex items-center justify-center bg-white overflow-hidden">
                            {logo ? (
                                <img src={logo} alt={company} className="w-full h-full object-contain p-1" />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-[#00b14f]/5 to-[#00b14f]/15 flex items-center justify-center">
                                    <span className="text-[#00b14f] font-bold text-[22px]">{company.charAt(0)}</span>
                                </div>
                            )}
                        </div>
                    </Link>

                    {/* Job Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                            <Link
                                href={`/jobs/${id}`}
                                className="font-semibold text-[15px] text-[#212f3f] group-hover:text-[#00b14f] transition line-clamp-1 leading-snug"
                            >
                                {title}
                            </Link>
                        </div>

                        <Link
                            href={`/companies/${company}`}
                            className="text-[#6f7882] text-[14px] hover:text-[#00b14f] transition line-clamp-1 block mb-2"
                        >
                            {company}
                        </Link>

                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-flex items-center gap-1 text-[#00b14f] font-semibold text-[14px]">
                                {salary}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#f3f5f7] text-[#6f7882] text-[12px] rounded">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                {location}
                            </span>
                            {experience && (
                                <span className="inline-flex items-center px-2 py-0.5 bg-[#f3f5f7] text-[#6f7882] text-[12px] rounded">
                                    {experience}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Right side actions */}
                    <div className="flex flex-col items-end justify-between">
                        {/* Badges */}
                        <div className="flex gap-1">
                            {isHot && (
                                <span className="px-2 py-0.5 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white text-[10px] font-bold rounded uppercase">
                                    Hot
                                </span>
                            )}
                            {isUrgent && (
                                <span className="px-2 py-0.5 bg-[#e74c3c] text-white text-[10px] font-bold rounded uppercase">
                                    Gấp
                                </span>
                            )}
                        </div>

                        {/* Save Button */}
                        <button className="p-2 text-[#6f7882] hover:text-[#e74c3c] transition opacity-0 group-hover:opacity-100">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
