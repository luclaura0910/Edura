import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // 1. Dọn dẹp dữ liệu cũ (Xóa bảng con trước, bảng cha sau)
  await prisma.application.deleteMany()
  await prisma.jobPost.deleteMany()
  await prisma.teacherProfile.deleteMany()
  await prisma.employerProfile.deleteMany()
  await prisma.user.deleteMany()

  // 2. Tạo Giáo viên (Teacher)
  const teacherUser = await prisma.user.create({
    data: {
      email: 'teacher@test.com',
      password: '123', // Mật khẩu demo
      role: 'TEACHER',
      teacherProfile: {
        create: {
          fullName: 'Nguyễn Văn A',
          phone: '0909123456',
          experience: '5 năm kinh nghiệm dạy Toán cấp 3',
          cvUrl: 'https://example.com/cv-nguyen-van-a.pdf'
        }
      }
    }
  })

  // 3. Tạo Employer FREE
  const freeUser = await prisma.user.create({
    data: {
      email: 'free@school.com',
      password: '123',
      role: 'EMPLOYER',
      employerProfile: {
        create: {
          companyName: 'Trung Tâm Gia Sư (Free)',
          tier: 'FREE'
        }
      }
    }
  })

  // Tạo Job cho Employer Free
  const freeEmployer = await prisma.employerProfile.findUnique({ where: { userId: freeUser.id } })
  if (freeEmployer) {
    const job = await prisma.jobPost.create({
      data: {
        employerId: freeEmployer.id,
        title: 'Tuyển Giáo Viên Toán (Lương thỏa thuận)',
        salary: 'Thỏa thuận'
      }
    })
    // Giáo viên ứng tuyển
    const teacher = await prisma.teacherProfile.findUnique({ where: { userId: teacherUser.id } })
    if (teacher) await prisma.application.create({ data: { jobId: job.id, teacherId: teacher.id } })
  }

  // 4. Tạo Employer PAID (VIP)
  const paidUser = await prisma.user.create({
    data: {
      email: 'paid@school.com',
      password: '123',
      role: 'EMPLOYER',
      employerProfile: {
        create: {
          companyName: 'Trường Quốc Tế VIP',
          tier: 'PAID',
          // Set hạn dùng 1 năm tới
          planExpiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        }
      }
    }
  })

  // Tạo Job cho Employer Paid
  const paidEmployer = await prisma.employerProfile.findUnique({ where: { userId: paidUser.id } })
  if (paidEmployer) {
    const job = await prisma.jobPost.create({
      data: {
        employerId: paidEmployer.id,
        title: 'Tuyển Giáo Viên Lý (Lương cao)',
        salary: '20 - 30 Triệu'
      }
    })
    // Giáo viên ứng tuyển
    const teacher = await prisma.teacherProfile.findUnique({ where: { userId: teacherUser.id } })
    if (teacher) await prisma.application.create({ data: { jobId: job.id, teacherId: teacher.id } })
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })