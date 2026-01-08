import React from 'react';
import StatCard from '../components/StatCard';
import DashboardCharts from '../components/DashboardCharts';
import RecentActivity from '../components/RecentActivity';

async function getStats() {
    try {
        const res = await fetch('http://localhost:4000/admin/stats', { cache: 'no-store' });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Failed to fetch admin stats", error);
        return null;
    }
}

async function getActivity() {
    try {
        const res = await fetch('http://localhost:4000/admin/activity', { cache: 'no-store' });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Failed to fetch admin activity", error);
        return null;
    }
}

export default async function AdminDashboardPage() {
    const stats = await getStats() || {};
    const activity = await getActivity() || {};

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                <div className="flex gap-2">
                    <select className="bg-white border rounded-lg px-3 py-2 text-sm shadow-sm outline-none">
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
                <StatCard
                    title="Total Users"
                    value={stats.totalUsers?.toLocaleString() || 0}
                    change="+12% from last month"
                    trend="up"
                />
                <StatCard
                    title="Active Jobs"
                    value={stats.totalJobs?.toLocaleString() || 0}
                    change="+5% from last month"
                    trend="up"
                />
                <StatCard
                    title="Companies"
                    value={stats.totalCompanies?.toLocaleString() || 0}
                    change="-2% from last month"
                    trend="down"
                />
                <StatCard
                    title="Applications"
                    value={stats.totalApplications?.toLocaleString() || 0}
                    change="+18% from last month"
                    trend="up"
                />
            </div>

            {/* Charts Section */}
            <DashboardCharts stats={stats} />

            {/* Recent Activity */}
            <RecentActivity activity={activity} />
        </div>
    );
}
