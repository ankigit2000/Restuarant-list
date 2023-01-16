import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import validateAllForm from 'src/app/components/helpers/validateForm';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  type : string = "password";
  isText: boolean =false;
  eyeIcon: string = "fa-eye-slash";

  loginForm!:FormGroup;

  constructor(private fb:FormBuilder, private auth:RestaurantsService, private router:Router){}



  ngOnInit():void{
    this.loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
 })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type="text": this.type = "password";
 }
 onLogin(){
  if(this.loginForm.valid){
//send object to DB
      this.auth.login(this.loginForm.value)
      .subscribe({
      next:(res)=>{
      alert(res.message)
      this.auth.storeToken(res.token);
      if(res.message=="Login Success!"){

        this.loginForm.reset();
    
        this.auth.storeToken(res.token);
    
        this.router.navigate(['restaurants']);}
    },
    error:(err)=>{
      alert(err?.error.message)
    }
  })
  
console.log(this.loginForm.value);
   }
else{

//throw error using the toaster and with required fields

console.log("Form is not valid")

validateAllForm.validateAllFormFields(this.loginForm);

alert("Your form is invalid");

   }

 }

}
