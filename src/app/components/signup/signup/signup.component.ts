import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import validateForm from 'src/app/components/helpers/validateForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type: string = "password";
    isText: boolean = false;
    eyeIcon : string = "fa-eye-slash";
    signupForm!: FormGroup;
    constructor(private fb : FormBuilder, private auth : RestaurantsService, private router:Router){

    }
    ngOnInit(): void {
      this.signupForm= this.fb.group({
        userName:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        ConfirmPassword:['',Validators.required]
      })
    }

    hideShowPass(){
      this.isText = !this.isText;
      this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
      this.isText ? this.type = "text": this.type = "password";
    }
    hideShowconfirmPass(){
      this.isText = !this.isText;
      this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
      this.isText ? this.type = "text": this.type = "ConfirmPassword";
    }
    onSignup(){
      if(this.signupForm.valid){
        //perform logic for signup
        this.auth.signUp(this.signupForm.value)
        .subscribe({
          next:(res=>{
            alert(res.message)
            this.signupForm.reset();
            this.router.navigate(['login']);
          }),
          error:(err=>{
            alert(err?.error.message)
          })
        })
        console.log(this.signupForm.value)
      }else{
        //logic for checking validation or throwing error
        console.log("Form is not valid")

        validateForm.validateAllFormFields(this.signupForm);
        
        alert("Your form is invalid");
        
           }
        
         }
        }
function ngOnInit() {
  throw new Error('Function not implemented.');
}

