
import { Body, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationService {
  constructor(@InjectRepository(Reservation) private readonly repository: Repository<Reservation>) {}
  
  async create(@Body() input: CreateReservationDto) {
    const reservation = await this.repository.save({
      ...input,
      ReservationDate: input.checkInDate,
      checkOutDate: input.checkOutDate,
      createdAt: input.createdAt,
      updatedAt: input.updatedAt,
    });

    return {
      data: reservation,
    };
  }

  async findAll() {
    const reservations = await this.repository.find();
    return reservations;
  }

  async findOne(@Param('id') id: string) {
    const reservation = await this.repository.findOneBy({ room: Number(id) });

    if (!reservation) {
      throw new NotFoundException();
    }

    return {
      data: reservation,
    }
  }

  async update(@Param('id') id: string, @Body() input: UpdateReservationDto) {
    const reservation = await this.repository.findOneBy({ room: Number(id) });

    if (!reservation) {
      throw new NotFoundException();
    }

    const data = await this.repository.save({
      ...reservation,
      ...input,
      checkInDate: input.checkInDate ?? reservation.checkInDate,
      checkOutDate: input.checkOutDate ?? reservation.checkOutDate,
      createdAt: input.createdAt ?? reservation.createdAt,
      updatedAt: input.updatedAt ?? reservation.updatedAt,
    });

    return {
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
