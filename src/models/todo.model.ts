import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Todo extends BaseEntity {

  @ObjectIdColumn()
  id!: ObjectID

  @Column()
  content!: string;

  @Column()
  completed!: boolean
}