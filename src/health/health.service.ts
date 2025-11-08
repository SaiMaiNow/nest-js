import { Injectable } from '@nestjs/common';

interface StatusInterface {
    id: string;
    status: string;
    datetime: string;
}

interface getStatus {
   data: StatusInterface[];
}

@Injectable()
export class HealthService {
    private readonly status = [
        { id: '1', status: 'OK', datetime: new Date().toISOString() },
        { id: '2', status: 'DEGRADED', datetime: new Date().toISOString() },
        { id: '3', status: 'DOWN', datetime: new Date().toISOString() },
    ]

    getStatus(): getStatus {
        return { data: this.status };
    }

    createHealthStatus(Body: any) {
        const newStatus = {
            id: (this.status.length + 1).toString(),
            status: Body.status || 'UNKNOWN',
            datetime: new Date().toISOString(),
        };
        this.status.push(newStatus);
        return newStatus;
    }

    updateHealthStatus(id: string) {
        const statusToUpdate = this.status.find(s => s.id === id);
        if (statusToUpdate) {
            statusToUpdate.status = 'UPDATED';
            statusToUpdate.datetime = new Date().toISOString();
            return statusToUpdate;
        }
        return { message: 'Status not found' };
    }

    deleteHealthStatus(id: string) {
        const index = this.status.findIndex(s => s.id === id);
        if (index !== -1) {
            const deletedStatus = this.status.splice(index, 1);
            return deletedStatus[0];
        }
        return { message: 'Status not found' };
    }
}
