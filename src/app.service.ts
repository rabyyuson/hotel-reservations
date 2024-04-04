import { Injectable } from '@nestjs/common';
import { SeedService } from 'seed.service';

@Injectable()
export class AppService {
    constructor(private readonly seedService: SeedService) {}

    async onModuleInit() {
        await this.seedService.seedData();
    }
}
