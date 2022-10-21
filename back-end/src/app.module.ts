import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { OperationsModule } from './operations/operations.module';
import { OperationsController } from './operations/operations.controller';
import { OperationsService } from './operations/operations.service';

@Module({
  imports: [PrismaModule, UsersModule, OperationsModule],
  controllers: [UsersController, OperationsController],
  providers: [UsersService, OperationsService],
})
export class AppModule {}
