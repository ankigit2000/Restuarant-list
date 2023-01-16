import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/modules/restaurant.module';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-edit-restaurants',
  templateUrl: './edit-restaurants.component.html',
  styleUrls: ['./edit-restaurants.component.css']
})
export class EditRestaurantsComponent implements OnInit{

  restaurantDetails : Restaurant = {
    id:'',
    restoName:'',
    location:'',
    specialities:'',
    additiionalFeatures:'',
    menu:''
  }
  constructor(private route: ActivatedRoute, private restaurantService: RestaurantsService, private router: Router){
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params)=>{
        const id = params.get('id');

        if(id){
          //call api
          this.restaurantService.getRestaurant(id)
          .subscribe({
            next: (response) => {
              this.restaurantDetails = response;
            }
          })
        }
      }
    })
  }
  updateRestaurant(){
    this.restaurantService.updateRestaurant(this.restaurantDetails.id, this.restaurantDetails)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['restaurants']);

      }
    })
  }
  deleteRestaurant(id: string){
    this.restaurantService.deleteRestaurant(id)
    .subscribe({
      next: (response) =>
      this.router.navigate(['restaurants']),
    })
  }
}
