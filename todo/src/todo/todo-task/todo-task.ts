import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class TodoTask {
  constructor(private prismaService: PrismaService) {}
  async getData(id_task: string): Promise<Todo> {
    return this.prismaService.todo.findUniqueOrThrow({
      where: {
        id: Number(id_task),
      },
    });
  }
  async getAllData(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  async saveData(task_name: string): Promise<Todo> {
    return this.prismaService.todo.create({
      data: {
        task_name,
      },
    });
  }

  async updateData(id_task: string, task_name: string): Promise<Todo> {
    return this.prismaService.todo.update({
      data: {
        task_name,
      },
      where: {
        id: Number(id_task),
      },
    });
  }

  async deleteData(id_task: string): Promise<Todo> {
    return this.prismaService.todo.delete({
      where: {
        id: Number(id_task),
      },
    });
  }
}
