import { Field, ID, ObjectType } from 'type-graphql';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
@ObjectType()
export class Recipe {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field({ nullable: true })
  description?: string;

  @Column()
  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}
