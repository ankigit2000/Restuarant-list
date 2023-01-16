import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/modules/restaurant.module';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.css']
})
export class AddRestaurantsComponent implements OnInit {
  addRestaurantRequest: Restaurant = {
    id:'',
    restoName:'',
    location:'',
    specialities:'',
    additiionalFeatures:'',
    menu:''
  };
  constructor(private restaurantService: RestaurantsService, private router: Router ) {}

  ngOnInit(): void {

  }
  addRestaurant(){
     this.restaurantService.addRestaurant(this.addRestaurantRequest)
     .subscribe({
       next : (response)=>{
         this.router.navigate(['restaurants'])
       }
     })
   }
}
