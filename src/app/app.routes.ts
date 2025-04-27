import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarteiraComponent } from './components/carteira/carteira.component';
import { ReducaoDeCustoMedioComponent } from './components/reducao-de-custo-medio/reducao-de-custo-medio.component';

export const routes: Routes =
    [
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "home", component: HomeComponent },
        { path: "carteira", component: CarteiraComponent },
        { path: "reducao-de-custo-medio", component: ReducaoDeCustoMedioComponent },
    ];
