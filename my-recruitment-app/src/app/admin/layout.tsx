'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const menuItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
        { name: 'User Management', href: '/admin/users', icon: '👥' },
        { name: 'Job Moderation', href: '/admin/jobs', icon: 'scaffold' }, // visual icon generic
        { name: 'Companies', href: '/admin/companies', icon: '🏢' },
        { name: 'Reports', href: '/admin/reports', icon: '⚠️' },
        { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className={`bg-slate-900 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
                <div className="p-4 flex items-center justify-between border-b border-slate-800">
                    {isSidebarOpen && <span className="font-bold text-xl tracking-wider">EDURA ADMIN</span>}
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-slate-800 rounded">
                        {isSidebarOpen ? '◀' : '▶'}
                    </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1 px-2">
                    {menuItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                    }`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                {isSidebarOpen && <span className="font-medium whitespace-nowrap">{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-4 left-0 w-full px-2">
                    <button className="flex items-center gap-4 px-4 py-3 w-full text-slate-400 hover:text-red-400">
                        <span className="text-xl">🚪</span>
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header */}
                <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6">
                    <h1 className="text-lg font-semibold text-gray-800 capitalize">
                        {menuItems.find(i => pathname.startsWith(i.href))?.name || 'Dashboard'}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                            A
                        </div>
                        <span className="text-sm font-medium text-gray-600">Admin User</span>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
