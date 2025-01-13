import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Todo } from '@prisma/client';
import { TodoTask } from './todo-task/todo-task';

@Controller('todo')
export class TodoController {
  constructor(private todoTask: TodoTask) {}

  @Get('/get/:id')
  async getTodo(@Param('id') id_task: string): Promise<Todo> {
    return this.todoTask.getData(id_task);
  }
  @Get('/get-todos')
  async getTodos(): Promise<Todo[]> {
    return this.todoTask.getAllData();
  }
  @Post('/add-todo')
  async addTodo(@Query('task_name') task_name: string): Promise<Todo> {
    return this.todoTask.saveData(task_name);
  }

  @Put('/update-todo')
  async updateTodo(
    @Query('id') id_task: string,
    @Query('task_name') task_name: string,
  ): Promise<Todo> {
    return this.todoTask.updateData(id_task, task_name);
  }

  @Delete('/delete-todo')
  async deleteTodo(@Query('id') id_task: string): Promise<Todo> {
    return this.todoTask.deleteData(id_task);
  }
}
