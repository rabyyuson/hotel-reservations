
import { Body, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCheckInDto } from './dto/create-check-in.dto';
import { UpdateCheckInDto } from './dto/update-check-in.dto';
import { CheckIn } from './entities/check-in.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckInService {
  constructor(@InjectRepository(CheckIn) private readonly repository: Repository<CheckIn>) {}
  
    async create(@Body() createCheckInDto: CreateCheckInDto) {
        const reservation = await this.repository.save({
            ...createCheckInDto,
            createdAt: createCheckInDto.createdAt,
            updatedAt: createCheckInDto.updatedAt,
        });

        return {
            success: true,
            data: reservation,
        };
    }

    async findAll() {
        const reservations = await this.repository.find();

        return {
            success: true,
            count: reservations.length,
            data: reservations,
        };
    }

    async findOne(@Param('id') id: string) {
        const reservation = await this.repository.findOneBy({ room: Number(id) });

        if (!reservation) {
            throw new NotFoundException();
        }

        return {
            success: true,
            data: reservation,
        }
    }

    async update(@Param('id') id: string, @Body() updateCheckInDto: UpdateCheckInDto) {
        const reservation = await this.repository.findOneBy({ room: Number(id) });

        if (!reservation) {
            throw new NotFoundException();
        }

        const data = await this.repository.save({
            ...reservation,
            ...updateCheckInDto,
            createdAt: updateCheckInDto.createdAt ?? reservation.createdAt,
            updatedAt: updateCheckInDto.updatedAt ?? reservation.updatedAt,
        });

        return {
            success: true,
            data,
        }
    }

    async remove(@Param('id') id: string) {
        const reservation = await this.repository.findOneBy({ room: Number(id) });

        if (!reservation) {
            throw new NotFoundException();
        }

        await this.repository.remove(reservation);
    }
}
