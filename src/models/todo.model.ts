import {
  BaseEntity, Column, Entity, ObjectID, ObjectIdColumn,
} from 'typeorm';

@Entity()
class Todo extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  content!: string;

  @Column()
  completed!: boolean;
}

export default Todo;
