import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @Get()
    getHealthStatus(): any {
        return this.healthService.getStatus();
    }

    @Post()
    createHealthCheck(@Body() body: any): any {
        return this.healthService.createHealthStatus(body);
    }

    @Put(':id')
    updateHealthCheck(@Param('id') id: string): any {
        return this.healthService.updateHealthStatus(id);
    }

    @Delete(':id')
    deleteHealthCheck(@Param('id') id: string): any {
        return this.healthService.deleteHealthStatus(id);
    }
}
