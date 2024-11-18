import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ensure this component exists
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'jewellery',
  loadComponent: () => import('./jewellery-list/jewellery-list.component').then(m => m.JewelleryListComponent)
},
  { path: 'modify', component: ModifyListItemComponent },
  { path: 'modify/:id', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];
