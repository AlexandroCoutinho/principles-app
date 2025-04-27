import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarteiraComponent } from './components/carteira/carteira.component';

export const routes: Routes =
    [
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "home", component: HomeComponent },
        { path: "carteira", component: CarteiraComponent },
    ];
