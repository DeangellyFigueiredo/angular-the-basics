import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Receita de bolo',
      'Bolo gostoso',
      'http://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'Receita de pudim',
      'Pudim gostoso do mozão',
      'http://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
  ngOnInit(): void {}

  onRecipeSelect(recipe: Recipe) {
    console.log('RecipeListComponent.onRecipeSelect()', recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
