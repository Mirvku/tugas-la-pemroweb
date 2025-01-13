import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TodoTask } from './todo-task/todo-task';

@Module({
  imports: [PrismaModule],
  providers: [TodoTask],
  controllers: [TodoController],
})
export class TodoModule {}
