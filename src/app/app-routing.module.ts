import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'taxfree', loadChildren: './taxfree/taxfree.module#TaxfreePageModule' },
  { path: 'resturants', loadChildren: './resturants/resturants.module#ResturantsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
