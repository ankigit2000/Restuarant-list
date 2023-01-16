import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../modules/restaurant.module';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  baseUrl:string = environment.baseUrl;
  baseApiUrl: string= environment.baseApiUrl;
  constructor(private http: HttpClient, private router: Router) { }

  getAllRestaurants() : Observable<Restaurant[]>{
   return this.http.get<Restaurant[]>(this.baseApiUrl+'api/Restaurant');
  }
  addRestaurant(addRestaurantRequest: Restaurant): Observable<Restaurant>{
    addRestaurantRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Restaurant>(this.baseApiUrl + 'api/Restaurant', addRestaurantRequest);
  }
  getRestaurant(id: string) :Observable<Restaurant> {
    return this.http.get<Restaurant>(this.baseApiUrl + 'api/Restaurant/'+id);
  }

  updateRestaurant(id: string, updateRestaurantRequest: Restaurant): Observable<Restaurant>{
    return this.http.put<Restaurant>(this.baseApiUrl + 'api/Restaurant/' +id, updateRestaurantRequest);
  }
  deleteRestaurant(id: string): Observable<Restaurant>{
    return  this.http.delete<Restaurant>(this.baseApiUrl + 'api/Restaurant/'+id)
  }
  signUp(model: any){
    return this.http.post<any>(`${this.baseUrl}register`,model)
  }
  login(model: any){
    return this.http.post<any>(`${this.baseUrl}Login`,model)
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['login'])
    localStorage.removeItem('token');
  }
  // to store the token
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }
  //to get the token
  getToken(){
    return localStorage.getItem('token')
  }
  //to check the logged in or not
  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }
}
