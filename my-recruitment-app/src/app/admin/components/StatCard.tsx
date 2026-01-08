import React from 'react';

const StatCard = ({ title, value, change, trend }: { title: string, value: string | number, change?: string, trend?: 'up' | 'down' }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
            {change && (
                <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {change}
                </span>
            )}
        </div>
    </div>
);

export default StatCard;
