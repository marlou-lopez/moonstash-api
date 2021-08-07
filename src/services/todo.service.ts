import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Todo from '../models/todo.model';
import TodoRepository from '../repositories/todo.repository';

@Service()
class TodoService {
  @InjectRepository()
  private readonly todoRepository: TodoRepository;

  async getTodos(): Promise<Todo[]> {
    const todos = await this.todoRepository.findTodos();

    return todos;
  }

  async getTodo(id: string): Promise<Todo | undefined> {
    const todo = await this.todoRepository.findTodoById(id);

    return todo;
  }

  async getTotalTodos(): Promise<number> {
    const count = await this.todoRepository.findTotalTodos();

    return count;
  }

  async addTodo(param: Todo) {
    const todo = await this.todoRepository.createTodo(param);

    return todo;
  }
}

export default TodoService;
