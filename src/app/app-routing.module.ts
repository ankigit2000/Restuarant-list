import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurants/restaurant-list/restaurant-list.component';
import {AddRestaurantsComponent} from './components/restaurants/add-restaurants/add-restaurants.component';
import { EditRestaurantsComponent } from './components/restaurants/edit-restaurants/edit-restaurants.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthGuard } from './gaurds/auth.gaurd';
import { SignupComponent } from './components/signup/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'restaurants',
    component: RestaurantListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'restaurants/add',
    component: AddRestaurantsComponent
  },
  {
    path: 'restaurants/edit/:id',
    component: EditRestaurantsComponent
  },
  {
    path:'restaurants/delete/:id',
    component: EditRestaurantsComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  { 
    path:'login', 
    component: LoginComponent
  },
  {
    path:'signup', 
    component: SignupComponent
  },
  {
    path:'', 
    component: LoginComponent},
  {
    path :'restaurants', 
    component:DashboardComponent, 
    canActivate:[AuthGuard]
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
