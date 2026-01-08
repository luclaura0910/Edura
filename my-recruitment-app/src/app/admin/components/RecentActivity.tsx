'use client';

import React from 'react';

export default function RecentActivity({ activity }: { activity: any }) {
    if (!activity) return <div>Loading...</div>;
    const { recentUsers, recentJobs } = activity;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">New Users</h3>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
                </div>
                <ul className="divide-y divide-gray-100">
                    {recentUsers?.map((user: any) => (
                        <li key={user.id} className="px-6 py-4 hover:bg-gray-50 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-900">{user.fullName || user.email}</p>
                                <p className="text-xs text-gray-500">{user.role}</p>
                            </div>
                            <span className="text-xs text-gray-400">{new Date(user.createdAt).toLocaleDateString()}</span>
                        </li>
                    ))}
                    {(!recentUsers || recentUsers.length === 0) && <li className="px-6 py-4 text-gray-500 text-sm">No recent users.</li>}
                </ul>
            </div>

            {/* Recent Jobs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">Recent Jobs</h3>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
                </div>
                <ul className="divide-y divide-gray-100">
                    {recentJobs?.map((job: any) => (
                        <li key={job.id} className="px-6 py-4 hover:bg-gray-50 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-900">{job.title}</p>
                                <p className="text-xs text-gray-500">{job.company?.name || 'Unknown Company'}</p>
                            </div>
                            <span className="text-xs text-gray-400">{new Date(job.createdAt).toLocaleDateString()}</span>
                        </li>
                    ))}
                    {(!recentJobs || recentJobs.length === 0) && <li className="px-6 py-4 text-gray-500 text-sm">No recent jobs.</li>}
                </ul>
            </div>
        </div>
    );
}
