'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

import UserSidebar from '../components/UserSidebar';

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-[#f3f5f7]">
            <Header />

            <div className="max-w-[1320px] mx-auto px-4 py-8">
                <div className="flex gap-8">
                    {/* Sidebar */}
                    <UserSidebar />

                    {/* Main Content */}
                    <main className="flex-1">
                        <h1 className="text-2xl font-bold text-[#212f3f] mb-6">Cài đặt thông tin cá nhân</h1>

                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full bg-[#f3f5f7] overflow-hidden border-4 border-white shadow-sm">
                                        <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random" alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#00b14f] text-white rounded-full flex items-center justify-center border-2 border-white hover:bg-[#009643]">
                                        📷
                                    </button>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-[#212f3f]">Nguyễn Văn A</h2>
                                    <p className="text-[#6f7882] text-[14px] mb-2">Giáo viên Tiếng Anh</p>
                                    <div className="flex gap-2 text-[12px] text-[#00b14f]">
                                        <span className="px-2 py-0.5 bg-[#e6f7e9] rounded">Đã xác thực Email</span>
                                        <span className="px-2 py-0.5 bg-[#e6f7e9] rounded">Đã xác thực SĐT</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Họ và tên</label>
                                    <input type="text" defaultValue="Nguyễn Văn A" className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Chức danh</label>
                                    <input type="text" defaultValue="Giáo viên Tiếng Anh" className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Email</label>
                                    <input type="email" defaultValue="nguvenvana@email.com" disabled className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg bg-[#f9fafb] text-[#6f7882] cursor-not-allowed text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Số điện thoại</label>
                                    <input type="tel" defaultValue="0912 345 678" className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Ngày sinh</label>
                                    <input type="date" defaultValue="1995-05-15" className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Giới tính</label>
                                    <select className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]">
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                        <option>Khác</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Địa chỉ</label>
                                <input type="text" defaultValue="Cầu Giấy, Hà Nội" className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#f3f5f7] flex justify-end">
                                <button className="px-8 py-3 bg-[#00b14f] text-white rounded-lg font-semibold hover:bg-[#009643] transition">
                                    Lưu thay đổi
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-lg font-bold text-[#212f3f] mb-4">Thay đổi mật khẩu</h2>
                            <div className="space-y-4 max-w-lg">
                                <div>
                                    <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Mật khẩu hiện tại</label>
                                    <input type="password" className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Mật khẩu mới</label>
                                    <input type="password" className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium text-[#212f3f] mb-2">Xác nhận mật khẩu mới</label>
                                    <input type="password" className="w-full px-4 py-2.5 border border-[#e9eaec] rounded-lg focus:border-[#00b14f] outline-none text-[15px]" />
                                </div>
                                <button className="px-6 py-2 border border-[#e9eaec] text-[#212f3f] rounded-lg font-medium hover:border-[#00b14f] hover:text-[#00b14f] transition">
                                    Đổi mật khẩu
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
