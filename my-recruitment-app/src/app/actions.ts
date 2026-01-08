'use server'

import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

export async function createJob(prevState: any, formData: FormData) {
  // 1. Lấy thông tin Employer (Mockup cho MVP: lấy user 'paid@school.com')
  // Trong thực tế: const session = await auth(); const employerId = session.user.employerId;
  const user = await prisma.user.findUnique({
    where: { email: 'paid@school.com' },
    include: { employerProfile: true }
  })

  if (!user?.employerProfile) {
    return { error: 'Không tìm thấy thông tin nhà tuyển dụng. Vui lòng đăng nhập lại.' }
  }

  // 2. Extract dữ liệu từ FormData
  const rawData = {
    title: formData.get('jobTitle') as string,
    jobCategory: formData.get('jobCategory') as string,
    employmentType: formData.get('employmentType') as string,
    jobLevel: formData.get('jobLevel') as string,
    location: formData.get('location') as string,
    workMode: formData.get('workMode') as string,
    deadline: formData.get('deadline') ? new Date(formData.get('deadline') as string) : null,
    salaryMin: Number(formData.get('salaryMin')) || 0,
    salaryMax: Number(formData.get('salaryMax')) || 0,
    currency: formData.get('currency') as string,
    isNegotiable: formData.get('isNegotiable') === 'on',
    description: formData.get('jobDescription') as string,
    requirements: formData.get('jobRequirements') as string,
    benefits: formData.get('benefits') as string,
    experienceYears: Number(formData.get('experienceYears')) || 0,
    skills: formData.get('skills') as string,
    status: formData.get('action') === 'publish' ? 'PUBLISHED' : 'DRAFT',
  }

  // 3. Validation (Server-side)
  if (!rawData.title || rawData.title.length > 150) {
    return { error: 'Tiêu đề là bắt buộc và không quá 150 ký tự.' }
  }
  if (!rawData.description || rawData.description.length < 50) {
    return { error: 'Mô tả công việc phải có ít nhất 50 ký tự.' }
  }
  if (!rawData.isNegotiable && rawData.salaryMin > rawData.salaryMax) {
    return { error: 'Mức lương tối thiểu không được lớn hơn mức lương tối đa.' }
  }
  if (rawData.deadline && rawData.deadline < new Date()) {
    return { error: 'Hạn nộp hồ sơ phải lớn hơn hoặc bằng ngày hiện tại.' }
  }

  // 4. Tạo chuỗi hiển thị lương
  let salaryDisplay = 'Thỏa thuận'
  if (!rawData.isNegotiable) {
    salaryDisplay = `${rawData.salaryMin.toLocaleString()} - ${rawData.salaryMax.toLocaleString()} ${rawData.currency}`
  }

  // 5. Lưu vào Database
  try {
    await prisma.jobPost.create({
      data: {
        employerId: user.employerProfile.id,
        title: rawData.title,
        jobCategory: rawData.jobCategory,
        employmentType: rawData.employmentType,
        jobLevel: rawData.jobLevel,
        location: rawData.location,
        workMode: rawData.workMode,
        deadline: rawData.deadline,
        salaryMin: rawData.salaryMin,
        salaryMax: rawData.salaryMax,
        currency: rawData.currency,
        isNegotiable: rawData.isNegotiable,
        salary: salaryDisplay,
        description: rawData.description,
        requirements: rawData.requirements,
        benefits: rawData.benefits,
        experienceYears: rawData.experienceYears,
        skills: rawData.skills,
        status: rawData.status,
      }
    })
  } catch (error) {
    console.error(error)
    return { error: 'Đã có lỗi xảy ra khi lưu tin tuyển dụng.' }
  }

  // 6. Redirect
  redirect('/employer/dashboard')
}