import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) { }

    async findAllUsers() {
        return this.prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
            take: 50,
            include: {
                roles: true
            }
        });
    }

    async getDashboardStats() {
        const [totalUsers, totalJobs, totalCompanies, totalApplications] = await Promise.all([
            this.prisma.user.count(),
            this.prisma.job.count(),
            this.prisma.company.count(),
            this.prisma.jobApplication.count()
        ]);

        return {
            totalUsers,
            totalJobs,
            totalCompanies,
            totalApplications
        };
    }

    async getRecentActivity() {
        // Compose a mixed activity feed
        const recentUsers = await this.prisma.user.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            select: { id: true, email: true, fullName: true, role: true, createdAt: true }
        });

        const recentJobs = await this.prisma.job.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            select: { id: true, title: true, company: { select: { name: true } }, createdAt: true }
        });

        return {
            recentUsers,
            recentJobs
        };
    }
}
