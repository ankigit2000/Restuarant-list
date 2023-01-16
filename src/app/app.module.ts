import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './components/restaurants/restaurant-list/restaurant-list.component';
import { AddRestaurantsComponent } from './components/restaurants/add-restaurants/add-restaurants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRestaurantsComponent } from './components/restaurants/edit-restaurants/edit-restaurants.component';
import { LoginComponent } from './components/login/login/login.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    AddRestaurantsComponent,
    EditRestaurantsComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
