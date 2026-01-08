'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function UserSidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'false');
        // We can dispatch a storage event if we wanted all tabs to sync, 
        // but for now simple router push is enough as header checks on mount.
        // However, Header won't update automatically just by setting localStorage if it's not a storage event or context.
        // But since we are navigating to '/', Header will mount again/render ?? 
        // In Next.js SPA navigation, Header might not unmount.
        // To be safe, we can force a reload or dispatch a custom event.

        // Dispatch custom event for Header to listen to
        window.dispatchEvent(new Event('storage'));

        router.push('/');
    };

    const menuItems = [
        { name: 'Quản lý hồ sơ', href: '/profile', icon: '👤' },
        { name: 'Quản lý CV', href: '/my-cvs', icon: '📄' },
        { name: 'Việc làm của tôi', href: '/my-jobs', icon: '💼' },
        { name: 'Thông báo việc làm', href: '/notifications', icon: '🔔' },
        { name: 'Cài đặt gợi ý', href: '/settings', icon: '⚙️' },
    ];

    return (
        <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b border-[#f3f5f7] bg-gradient-to-r from-[#00b14f]/5 to-transparent">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#f3f5f7] overflow-hidden border border-white shadow-sm">
                            <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="font-bold text-[#212f3f] text-[15px]">Nguyễn Văn A</p>
                            <p className="text-[12px] text-[#6f7882]">E123456</p>
                        </div>
                    </div>
                </div>
                <nav className="p-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition text-[14px] ${isActive
                                        ? 'bg-[#f3f5f7] text-[#00b14f] font-medium'
                                        : 'text-[#212f3f] hover:bg-[#f3f5f7] hover:text-[#00b14f]'
                                    }`}
                            >
                                <span>{item.icon}</span>
                                {item.name}
                            </Link>
                        );
                    })}

                    <div className="my-1 border-t border-[#f3f5f7]"></div>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-[#ff4d4f] hover:bg-[#fff1f0] rounded-lg transition text-[14px] text-left"
                    >
                        <span>🚪</span> Đăng xuất
                    </button>
                </nav>
            </div>

            {/* Banner */}
            <div className="bg-gradient-to-br from-[#00b14f] to-[#009643] rounded-xl p-6 text-white text-center">
                <p className="font-bold text-lg mb-2">Nâng cấp VIP</p>
                <p className="text-white/80 text-sm mb-4">Mở khóa tính năng cao cấp & tiếp cận nhiều nhà tuyển dụng hơn</p>
                <button className="w-full py-2 bg-white text-[#00b14f] rounded-lg font-semibold text-sm hover:bg-gray-50 transition">
                    Nâng cấp ngay
                </button>
            </div>
        </aside>
    );
}
