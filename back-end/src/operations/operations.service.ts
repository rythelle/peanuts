import { Body, Injectable } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OperationsService {
  constructor(private prisma: PrismaService) {}

  create(@Body() createUserDto: CreateOperationDto) {
    return this.prisma.transaction.create({ data: createUserDto });
  }

  findAll(username: string) {
    return this.prisma.transaction.findMany({
      where: { username },
    });
  }

  findOne(id: number) {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    @Body() { username, description, amount, tags, type }: UpdateOperationDto,
  ) {
    return this.prisma.transaction.update({
      data: { username, description, amount, tags, type },
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.transaction.delete({ where: { id } });
  }
}
