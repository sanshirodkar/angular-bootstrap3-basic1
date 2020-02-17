import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppBoostrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppBoostrapModule ],
  declarations: [ AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, ShoppingListComponent, ShoppingListEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
