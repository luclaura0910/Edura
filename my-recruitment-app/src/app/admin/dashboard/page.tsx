'use client';

import React from 'react';

const StatCard = ({ title, value, change, trend }: any) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
            <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {change}
            </span>
        </div>
    </div>
);

export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                <div className="flex gap-2">
                    <select className="bg-white border rounded-lg px-3 py-2 text-sm shadow-sm">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Year to Date</option>
                    </select>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-indigo-700">
                        Download Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Users" value="12,543" change="+12% vs last month" trend="up" />
                <StatCard title="Active Jobs" value="482" change="+5% vs last month" trend="up" />
                <StatCard title="New Companies" value="24" change="-2% vs last month" trend="down" />
                <StatCard title="Applications" value="3,102" change="+18% vs last month" trend="up" />
            </div>

            {/* Charts Section Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-80 flex items-center justify-center bg-gray-50">
                    <span className="text-gray-400">Chart: User Growth (Line)</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-80 flex items-center justify-center bg-gray-50">
                    <span className="text-gray-400">Chart: Job Categories (Pie)</span>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                    <h3 className="font-bold text-gray-800">Recent Activity</h3>
                </div>
                <div className="p-4">
                    {/* Mock Table */}
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 font-medium">
                            <tr>
                                <th className="px-4 py-3">User</th>
                                <th className="px-4 py-3">Action</th>
                                <th className="px-4 py-3">Time</th>
                                <th className="px-4 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i}>
                                    <td className="px-4 py-3 font-medium text-gray-900">John Doe</td>
                                    <td className="px-4 py-3">Posted a new job "Senior React Dev"</td>
                                    <td className="px-4 py-3 text-gray-500">2 mins ago</td>
                                    <td className="px-4 py-3"><span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs">Success</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
