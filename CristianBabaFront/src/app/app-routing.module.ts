import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WhiskiesComponent } from './whiskies/whiskies.component';
import { HomeComponent } from './home/home.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktaildetailsComponent } from './cocktaildetails/cocktaildetails.component';
import { WhiskiesdetailsComponent } from './whiskiesdetails/whiskiesdetails.component';

const routes: Routes = [
 // {path: '', redirectTo:'login', pathMatch: 'full'},
  {path : 'login' , component: LoginComponent},
  {path: 'cocktails',component:CocktailsComponent},
  {path: 'cocktailsdetails/:id',component:CocktaildetailsComponent},
  {path: 'whiskiesdetail/:id',component:WhiskiesdetailsComponent},
  {path : 'whiskies', component: WhiskiesComponent},
  {path : 'home', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
