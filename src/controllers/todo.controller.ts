import { IsBoolean, IsString } from "class-validator";
import { Response } from "express";
import { Body, Get, JsonController, Param, Post, Req, Res } from "routing-controllers";
import { Inject, Service } from "typedi";
import { ObjectID } from "typeorm";
import { Todo } from "../models/todo.model";
import { TodoService } from "../services/todo.service";

class BaseTodo {

  @IsString()
  public content: string;

  @IsBoolean()
  public completed: boolean;

}

@Service()
@JsonController('/todos', {transformResponse: false, transformRequest: false})
export class TodoController {

  // @Inject()
  // private readonly todoService: TodoService;

  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll(@Res() response: Response) {
    // const todos = await this.todoService.getTodos()
    // return response.status(200).send(todos)
    return await this.todoService.getTodos()
  }

  @Get('/:id')
  async getTodo(@Param('id') id: string): Promise<Todo | undefined> { 
    console.log(id)
    return this.todoService.getTodo(id)
  }

  @Get('/total')
  async getTotalTodos(): Promise<number> {
    return this.todoService.getTotalTodos()
  }

  @Post()
  async addTodo(@Body() body: BaseTodo) {
    const todo = new Todo();
    todo.content = body.content;
    todo.completed = body.completed !== undefined ? body.completed : false;
    // console.log(body)
    return this.todoService.addTodo(todo);
  }
}