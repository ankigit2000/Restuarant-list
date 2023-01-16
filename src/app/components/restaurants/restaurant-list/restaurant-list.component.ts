import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/modules/restaurant.module';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{

  restaurants: any[]= [];

  constructor(private restaurantsService:RestaurantsService, private auth:RestaurantsService){}

  ngOnInit(): void {
    this.restaurantsService.getAllRestaurants()
    .subscribe({
      next: (restaurants) =>{
        this.restaurants=restaurants;
      },
      error : (response)=>{
        console.log(response);
      }
    })
  }
  logout(){
    this.auth.logOut();
  }

}