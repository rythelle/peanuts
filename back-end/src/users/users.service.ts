import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(@Body() createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: { password: false },
      where: { admin: false },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        created_at: true,
        updated_at: true,
        admin: false,
        active: true,
        username: true,
        password: false,
      },
    });
  }

  update(id: number, @Body() { email, username, password }: UpdateUserDto) {
    return this.prisma.user.update({
      data: { email, username, password },
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
