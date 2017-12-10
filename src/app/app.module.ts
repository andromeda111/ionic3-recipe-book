import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Components
import { MyApp } from './app.component';
import { EditRecipePage } from '../pages/edit-recipe/edit-recipe';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { RecipePage } from '../pages/recipe/recipe';
import { RecipesPage } from '../pages/recipes/recipes';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

// Services
import { ShoppingListService } from "../services/shopping-list";
import { RecipesService } from "../services/recipes";

@NgModule({
  declarations: [
    MyApp,
    EditRecipePage,
    RecipePage,
    RecipesPage,
    ShoppingListPage,
    TabsPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditRecipePage,
    RecipePage,
    RecipesPage,
    ShoppingListPage,
    TabsPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    RecipesService
  ]
})
export class AppModule {}
