'use client';

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    LineChart, Line
} from 'recharts';

export default function DashboardCharts({ stats }: { stats: any }) {
    // Mock data for charts since backend only gives aggregates
    // In a real scenario, we'd fetch time-series data from backend
    const data = [
        { name: 'Jan', Users: 400, Jobs: 240 },
        { name: 'Feb', Users: 300, Jobs: 139 },
        { name: 'Mar', Users: 200, Jobs: 980 },
        { name: 'Apr', Users: 278, Jobs: 390 },
        { name: 'May', Users: 189, Jobs: 480 },
        { name: 'Jun', Users: 239, Jobs: 380 },
        { name: 'Jul', Users: 349, Jobs: 430 },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">User & Job Growth</h3>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Users" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="Jobs" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Activity Overview</h3>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Users" fill="#8884d8" />
                            <Bar dataKey="Jobs" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
