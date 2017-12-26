import { Ingredient } from "../models/ingredient";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth";
import 'rxjs/add/operator/do';

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = []

    constructor(private http: HttpClient,
                private authService: AuthService) {}
    
    addItem(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
        console.log(this.ingredients);
        
    }

    addItems(items: Ingredient[]) {
        this.ingredients.push(...items);
    }

    getItems() {
        return this.ingredients.slice();
    }

    removeItem(index: number) {
        this.ingredients.splice(index, 1);
    }

    storeList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.put('https://ionic2-recipe-book-82ac5.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token, this.ingredients);
    }

    fetchList(token: string) {
        const userId = this.authService.getActiveUser().uid;        
        return this.http.get('https://ionic2-recipe-book-82ac5.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token).do((data: Ingredient[]) => {
               this.ingredients = data;
            });
    }
}