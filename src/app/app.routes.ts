import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { NewComponent } from './pages/new/new';

export const routes: Routes = [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'new', component: NewComponent},
        {path: 'home', component: HomeComponent},
];
