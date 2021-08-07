import { IsString, IsBoolean } from 'class-validator';

class BaseTodoBody {
  @IsString()
  public content: string;

  @IsBoolean()
  public completed: boolean;
}

export default BaseTodoBody;
