import { Recipe } from "../models/recipe";
import { Ingredient } from "../models/ingredient";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth";
import 'rxjs/Rx';

@Injectable()
export class RecipesService {
    private recipes: Recipe[] = [];

    constructor(private http: HttpClient,
                private authService: AuthService) {}

    addRecipe(title: string,
              description: string,
              difficulty: string,
              ingredients: Ingredient[]) {
        this.recipes.push(new Recipe(title, description, difficulty, ingredients));
        console.log(this.recipes);
        
    }

    getRecipes() {
        return this.recipes.slice();
    }

    updateRecipe(index: number,
                 title: string,
                 description: string,
                 difficulty: string,
                 ingredients: Ingredient[]) {
        this.recipes[index] = new Recipe(title, description, difficulty, ingredients);
    }

    removeRecipe(index: number) {
        this.recipes.splice(index, 1);
    }

    storeList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.put('https://ionic2-recipe-book-82ac5.firebaseio.com/' + userId + '/recipes.json?auth=' + token, this.recipes);
    }

    fetchList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.get('https://ionic2-recipe-book-82ac5.firebaseio.com/' + userId + '/recipes.json?auth=' + token)
            .do((data: Recipe[]) => {
                if (data) {
                    for (let item of data) {
                        if (!item.hasOwnProperty('ingredients')) {
                            item.ingredients = [];
                        }
                    }
                    this.recipes = data;
                } else {
                    this.recipes = [];
                }
            })
    }
}