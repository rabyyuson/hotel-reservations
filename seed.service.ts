import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from 'src/reservations/entities/reservation.entity';

@Injectable()
export class SeedService {
    constructor(@InjectRepository(Reservation) private readonly repository: Repository<Reservation>) {}

    async seedData() {
        const existingRecords = await this.repository.count();

        if (existingRecords === 0) {
            for (let index = 0; index < 10; index++) {
                const data = {
                    name: '',
                    room: index + 1,
                    status: undefined,
                    checkInDate: undefined,
                    checkOutDate: undefined,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };
                await this.repository.save(data);
            }
        } else {
            console.log("Database already seeded. Skipping seeding process.");
        }
    }
}
