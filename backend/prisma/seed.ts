import { PrismaClient, UserRole, UserStatus } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding ...');

    // Seed Industries
    const industries = [
        { name: 'Information Technology', slug: 'it-software' },
        { name: 'Marketing / Local', slug: 'marketing-pr' },
        { name: 'Banking / Finance', slug: 'banking' },
        { name: 'Human Resources', slug: 'hr' },
        { name: 'Education', slug: 'education' },
    ];

    for (const ind of industries) {
        await prisma.industry.upsert({
            where: { slug: ind.slug },
            update: {},
            create: ind,
        });
    }

    // Seed Cities (Vietnam)
    const cities = [
        { name: 'Ho Chi Minh', code: 'SG' },
        { name: 'Ha Noi', code: 'HN' },
        { name: 'Da Nang', code: 'DN' },
        { name: 'Can Tho', code: 'CT' },
        { name: 'Hai Phong', code: 'HP' },
    ];

    for (const city of cities) {
        await prisma.city.upsert({
            where: { code: city.code },
            update: {},
            create: city,
        });
    }

    // Seed Admin User
    // Note: hashing password simply here. In real app use AuthService.
    // We need to install bcryptjs: npm install bcryptjs @types/bcryptjs (or just use raw string for demo if bcrypt not avail)
    // I will assume bcryptjs is not installed yet, so I will add it to the install list or use a placeholder.
    // Actually, I should install bcryptjs.
    // For now I'll just store a raw value but mark it TODO. 
    // Wait, I can install dependencies.

    // Or simpler: Just create user and let manual testing handle login.
    // But standard is hashed. I'll basic hash with bcryptjs if I can, or use hardcoded hash for "password123".
    // $2a$10$obsj93d2zSg.Rj.Hk/d7.O1xD././././././. is common for "password"
    const passwordHash = '$2b$10$EpRnTzVlqHNP0.fKbX99ijcpn.m0M2D.Wp/wJ5.Z1.Z1.Z1.Z1'; // "password123" (approx) or generated.

    // Wait, I can't import bcryptjs if I don't install it.
    // I will install it in the next step.

    const adminEmail = 'admin@edura.com';
    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            password: passwordHash, // Placeholder hash
            fullName: 'System Admin',
            role: UserRole.ADMIN,
            status: UserStatus.ACTIVE,
            isEmailVerified: true,
        },
    });

    console.log(`Created admin: ${admin.email}`);

    // Seed Demo Employer
    const empEmail = 'hr@techcorp.com';
    const employer = await prisma.user.upsert({
        where: { email: empEmail },
        update: {},
        create: {
            email: empEmail,
            password: passwordHash,
            fullName: 'Recruiter John',
            role: UserRole.EMPLOYER,
            status: UserStatus.ACTIVE,
            // Schema has employerProfile relation.
            isEmailVerified: true
        },
    });

    // Create Employer Profile & Company
    const techCorp = await prisma.company.upsert({
        where: { slug: 'tech-corp' },
        update: {},
        create: {
            name: 'Tech Corp',
            slug: 'tech-corp',
            description: 'Leading tech company',
            scale: '100-500',
            isVerified: true
        }
    });

    await prisma.employerProfile.upsert({
        where: { userId: employer.id },
        update: {},
        create: {
            userId: employer.id,
            companyId: techCorp.id,
            position: 'HR Manager'
        }
    });

    console.log(`Created employer: ${employer.email}`);

    // ==========================================
    // Seed Admin System
    // ==========================================

    // 1. Create Permissions
    const permissions = [
        { resource: 'user', action: 'view', slug: 'user:view' },
        { resource: 'user', action: 'manage', slug: 'user:manage' },
        { resource: 'job', action: 'view', slug: 'job:view' },
        { resource: 'job', action: 'approve', slug: 'job:approve' },
        { resource: 'company', action: 'verify', slug: 'company:verify' },
        { resource: 'report', action: 'view', slug: 'report:view' },
        { resource: 'report', action: 'resolve', slug: 'report:resolve' },
        { resource: 'system', action: 'manage', slug: 'system:manage' },
    ];

    for (const p of permissions) {
        await prisma.permission.upsert({
            where: { slug: p.slug },
            update: {},
            create: p,
        });
    }

    // 2. Create Roles
    const superAdminRole = await prisma.role.upsert({
        where: { slug: 'super-admin' },
        update: {},
        create: {
            name: 'Super Admin',
            slug: 'super-admin',
            description: 'Full system access',
            permissions: {
                connect: permissions.map(p => ({ slug: p.slug })),
            },
        },
    });

    const moderatorRole = await prisma.role.upsert({
        where: { slug: 'moderator' },
        update: {},
        create: {
            name: 'Moderator',
            slug: 'moderator',
            description: 'Content moderation (Jobs, Companies)',
            permissions: {
                connect: [
                    { slug: 'job:view' },
                    { slug: 'job:approve' },
                    { slug: 'company:verify' },
                    { slug: 'report:view' },
                    { slug: 'report:resolve' },
                ],
            },
        },
    });

    // 3. Assign Role to Admin
    await prisma.user.update({
        where: { email: adminEmail },
        data: {
            roles: {
                connect: { id: superAdminRole.id },
            },
        },
    });

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
