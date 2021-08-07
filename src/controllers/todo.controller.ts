import {
  Body, Get, JsonController, Param, Post,
} from 'routing-controllers';
import { Service } from 'typedi';
import BaseTodoBody from '../interfaces/todo.interface';
import Todo from '../models/todo.model';
import TodoService from '../services/todo.service';

@Service()
@JsonController('/todos', { transformResponse: false, transformRequest: false })
class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll() {
    return this.todoService.getTodos();
  }

  @Get('/:id')
  async getTodo(@Param('id') id: string): Promise<Todo | undefined> {
    return this.todoService.getTodo(id);
  }

  @Get('/total')
  async getTotalTodos(): Promise<number> {
    return this.todoService.getTotalTodos();
  }

  @Post()
  async addTodo(@Body() body: BaseTodoBody) {
    const todo = new Todo();
    todo.content = body.content;
    todo.completed = body.completed !== undefined ? body.completed : false;

    return this.todoService.addTodo(todo);
  }
}

export default TodoController;
