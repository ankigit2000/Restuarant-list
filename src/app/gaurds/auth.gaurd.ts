import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth : RestaurantsService,private router: Router){
    
  }
  canActivate() :boolean{
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      alert("you have not logged in")
      //this.toast.error(detail:"ERROR",summary:"Please Login First")
      this.router.navigate(['login'])
      return false;
    }
    
  }
  
}
