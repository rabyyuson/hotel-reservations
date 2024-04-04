import { Status } from '../status.enum';

export class CreateCheckInDto {
    room: number;
    status: Status;
    createdAt: string;
    updatedAt: string;
}
