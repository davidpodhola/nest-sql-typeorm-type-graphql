import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class RecipesService {
  constructor(
      @InjectRepository(Recipe)
      private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    // return [] as Recipe[];
    return await this.recipeRepository.find();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
