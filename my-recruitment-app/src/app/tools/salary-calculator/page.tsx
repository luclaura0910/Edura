'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SalaryCalculatorPage() {
    const [grossSalary, setGrossSalary] = useState('');
    const [dependents, setDependents] = useState('0');
    const [region, setRegion] = useState('1');
    const [result, setResult] = useState<{
        grossSalary: number;
        netSalary: number;
        socialInsurance: number;
        healthInsurance: number;
        unemploymentInsurance: number;
        personalTax: number;
    } | null>(null);

    const calculateSalary = () => {
        const gross = parseFloat(grossSalary) * 1000000;
        if (isNaN(gross) || gross <= 0) return;

        // Simplified calculation for demo
        const bhxh = Math.min(gross * 0.08, 36000000 * 0.08);
        const bhyt = Math.min(gross * 0.015, 36000000 * 0.015);
        const bhtn = Math.min(gross * 0.01, 36000000 * 0.01);

        const totalInsurance = bhxh + bhyt + bhtn;
        const beforeTax = gross - totalInsurance;
        const personalDeduction = 11000000;
        const dependentDeduction = parseInt(dependents) * 4400000;
        const taxableIncome = Math.max(0, beforeTax - personalDeduction - dependentDeduction);

        // Progressive tax
        let tax = 0;
        if (taxableIncome > 0) {
            if (taxableIncome <= 5000000) tax = taxableIncome * 0.05;
            else if (taxableIncome <= 10000000) tax = 250000 + (taxableIncome - 5000000) * 0.1;
            else if (taxableIncome <= 18000000) tax = 750000 + (taxableIncome - 10000000) * 0.15;
            else if (taxableIncome <= 32000000) tax = 1950000 + (taxableIncome - 18000000) * 0.2;
            else if (taxableIncome <= 52000000) tax = 4750000 + (taxableIncome - 32000000) * 0.25;
            else if (taxableIncome <= 80000000) tax = 9750000 + (taxableIncome - 52000000) * 0.3;
            else tax = 18150000 + (taxableIncome - 80000000) * 0.35;
        }

        const netSalary = gross - totalInsurance - tax;

        setResult({
            grossSalary: gross,
            netSalary,
            socialInsurance: bhxh,
            healthInsurance: bhyt,
            unemploymentInsurance: bhtn,
            personalTax: tax,
        });
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('vi-VN').format(Math.round(value)) + ' đ';
    };

    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#0a4429] to-[#0d5a36] py-10">
                <div className="max-w-[1320px] mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold text-white mb-3">
                        Tính lương Gross - Net Giáo viên
                    </h1>
                    <p className="text-white/80">
                        Quy đổi lương Gross sang Net và ngược lại theo quy định mới nhất
                    </p>
                </div>
            </section>

            {/* Calculator */}
            <div className="max-w-[1320px] mx-auto px-4 py-10">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Input Form */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-[18px] font-bold text-[#212f3f] mb-6">Nhập thông tin</h2>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">
                                    Lương Gross (triệu đồng)
                                </label>
                                <input
                                    type="number"
                                    value={grossSalary}
                                    onChange={(e) => setGrossSalary(e.target.value)}
                                    placeholder="Ví dụ: 20"
                                    className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] focus:ring-2 focus:ring-[#00b14f]/20 outline-none text-[15px]"
                                />
                            </div>

                            <div>
                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">
                                    Số người phụ thuộc
                                </label>
                                <select
                                    value={dependents}
                                    onChange={(e) => setDependents(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]"
                                >
                                    {[0, 1, 2, 3, 4, 5].map((n) => (
                                        <option key={n} value={n}>{n} người</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">
                                    Vùng lương tối thiểu
                                </label>
                                <select
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]"
                                >
                                    <option value="1">Vùng I - 4.680.000đ</option>
                                    <option value="2">Vùng II - 4.160.000đ</option>
                                    <option value="3">Vùng III - 3.640.000đ</option>
                                    <option value="4">Vùng IV - 3.250.000đ</option>
                                </select>
                            </div>

                            <button
                                onClick={calculateSalary}
                                className="w-full py-3.5 bg-[#00b14f] text-white rounded-lg font-semibold hover:bg-[#009643] transition"
                            >
                                Tính lương
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-[18px] font-bold text-[#212f3f] mb-6">Kết quả</h2>

                        {result ? (
                            <div className="space-y-4">
                                <div className="bg-[#00b14f]/10 rounded-xl p-5 text-center">
                                    <p className="text-[14px] text-[#6f7882] mb-1">Lương NET thực nhận</p>
                                    <p className="text-[28px] font-bold text-[#00b14f]">
                                        {formatCurrency(result.netSalary)}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#f3f5f7] rounded-lg p-4">
                                        <p className="text-[13px] text-[#6f7882] mb-1">Lương Gross</p>
                                        <p className="text-[16px] font-semibold text-[#212f3f]">
                                            {formatCurrency(result.grossSalary)}
                                        </p>
                                    </div>
                                    <div className="bg-[#f3f5f7] rounded-lg p-4">
                                        <p className="text-[13px] text-[#6f7882] mb-1">Thuế TNCN</p>
                                        <p className="text-[16px] font-semibold text-[#e74c3c]">
                                            -{formatCurrency(result.personalTax)}
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t border-[#e9eaec] pt-4">
                                    <h3 className="text-[14px] font-semibold text-[#212f3f] mb-3">Các khoản bảo hiểm</h3>
                                    <div className="space-y-2 text-[14px]">
                                        <div className="flex justify-between">
                                            <span className="text-[#6f7882]">BHXH (8%)</span>
                                            <span className="text-[#212f3f]">-{formatCurrency(result.socialInsurance)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[#6f7882]">BHYT (1.5%)</span>
                                            <span className="text-[#212f3f]">-{formatCurrency(result.healthInsurance)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[#6f7882]">BHTN (1%)</span>
                                            <span className="text-[#212f3f]">-{formatCurrency(result.unemploymentInsurance)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-10 text-[#6f7882]">
                                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <p>Nhập lương Gross và nhấn "Tính lương" để xem kết quả</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Section */}
                <div className="mt-10 bg-white rounded-xl p-6">
                    <h2 className="text-[18px] font-bold text-[#212f3f] mb-4">Lưu ý về lương Giáo viên</h2>
                    <ul className="space-y-2 text-[14px] text-[#6f7882]">
                        <li className="flex gap-2">
                            <span className="text-[#00b14f]">•</span>
                            Lương giáo viên được tính theo ngạch, bậc và hệ số lương cơ sở
                        </li>
                        <li className="flex gap-2">
                            <span className="text-[#00b14f]">•</span>
                            Giáo viên được hưởng phụ cấp ưu đãi nghề từ 25-50% tùy cấp học
                        </li>
                        <li className="flex gap-2">
                            <span className="text-[#00b14f]">•</span>
                            Mức lương cơ sở hiện tại là 2.340.000 đồng/tháng (từ 01/07/2024)
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
}
