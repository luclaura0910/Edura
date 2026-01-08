import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    // Mock data for initial testing
    private users = [
        { id: '1', name: 'Nguyen Van A', email: 'a@example.com', role: 'JOB_SEEKER', status: 'ACTIVE', joined: '2024-01-01' },
        { id: '2', name: 'Tech Corp HR', email: 'hr@techcorp.com', role: 'EMPLOYER', status: 'ACTIVE', joined: '2024-01-05' },
        { id: '3', name: 'Spammer 123', email: 'spam@fake.com', role: 'JOB_SEEKER', status: 'BANNED', joined: '2024-01-10' },
    ];

    findAllUsers() {
        return this.users;
    }

    getDashboardStats() {
        return {
            totalUsers: 12543,
            totalJobs: 482,
            pendingReports: 5,
        };
    }
}
