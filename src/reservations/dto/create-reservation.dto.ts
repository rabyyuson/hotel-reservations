import { Status } from "../status.enum";

export class CreateReservationDto {
    name: string;
    room: number;
    status: Status;
    checkInDate: string;
    checkOutDate: string;
    createdAt: string;
    updatedAt: string;
}
