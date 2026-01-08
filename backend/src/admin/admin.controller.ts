import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Get('users')
    findAllUsers() {
        return this.adminService.findAllUsers();
    }

    @Get('stats')
    getStats() {
        return this.adminService.getDashboardStats();
    }

    @Get('activity')
    getRecentActivity() {
        return this.adminService.getRecentActivity();
    }
}
