import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/4/4d/Turkey_Schnitzel_with_Spatzle_and_vegetables.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a9/Barbecue_spaghetti.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    // return [...this.recipes];
    return this.recipes;
  }

  getRecipe(recipeId: string) {
    // return {
    //   ...this.recipes.find((recipe) => recipe.id === recipeId),
    // };
    return this.recipes.find((recipe) => recipe.id === recipeId);
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
