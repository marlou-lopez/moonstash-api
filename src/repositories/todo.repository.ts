import { Service } from "typedi";
import { EntityRepository, MongoRepository } from "typeorm";
import { Todo } from "../models/todo.model";

@Service()
@EntityRepository(Todo)
export class TodoRepository extends MongoRepository<Todo> {
  async findTodos(): Promise<Todo[]> {
    const todos = await this.find();
    return todos;
  }

  async findTodoById(id: string): Promise<Todo | undefined> {
    const todo = await this.findOne(id);
    return todo;
  }

  async findTotalTodos(): Promise<number> {
    const count = await this.count();
    return count;
  }

  async createTodo(todo: Todo): Promise<Todo> {
    console.log('todo: ', todo)
    const result = await this.save(todo);
    console.log('res: ', result);
    return result;
  }
}