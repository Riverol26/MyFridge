import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoute } from './home/home.route';
import { ShoppingListRoute } from './shopping-list/shopping-list.route';
import { RecipeListRoute } from './recipes-list/recipes-list.route';

const routes: Routes = [
    {
        path: 'shoppingLists',
        component: ShoppingListRoute
    },
    {
        path: 'recipeLists',
        component: RecipeListRoute
    },
    {
        path: 'home',
        component: HomeRoute
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [ShoppingListRoute, RecipeListRoute, HomeRoute];
