import { Test, TestingModule } from '@nestjs/testing';
import { TodoTask } from './todo-task';

describe('TodoTask', () => {
  let provider: TodoTask;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoTask],
    }).compile();

    provider = module.get<TodoTask>(TodoTask);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
