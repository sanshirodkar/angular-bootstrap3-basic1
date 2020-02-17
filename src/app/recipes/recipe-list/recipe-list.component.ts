import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Line','SNS Japan','https://bit.ly/38y2AFr'),
    new Recipe('HTML','Web Tech', 'https://bit.ly/322C84g'),
    new Recipe('Apple','Tech USA','https://bit.ly/39DOkLC'),
    new Recipe('Andriod','Mobile Tech','https://bit.ly/2uFo6tr'),
    new Recipe('FC Inter','Football Italy','https://bit.ly/32857nC')
  ];
  constructor() { }

  ngOnInit() {
  }

}