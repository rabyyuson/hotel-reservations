import { Status } from '../status.enum';

export class CreateCheckInDto {
    name: string;
    room: number;
    status: Status;
    createdAt: string;
    updatedAt: string;
}
