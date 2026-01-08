'use server'

import { redirect } from 'next/navigation'

export async function createJob(prevState: any, formData: FormData) {
  // Mock API call to Backend
  // In production, this should point to your actual Backend URL
  const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  console.log("Submitting job to backend at " + BACKEND_URL);

  const rawData = {
    title: formData.get('jobTitle') as string,
    // ... extract other fields as needed
    description: formData.get('jobDescription') as string,
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Placeholder logic until Backend Jobs API is ready
  console.log("Job Data received:", rawData);

  // Return success or redirect
  redirect('/employer/dashboard');
}