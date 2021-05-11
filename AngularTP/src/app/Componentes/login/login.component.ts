import { Component, OnInit,Input} from '@angular/core';
import {User} from 'src/app/Models/User';
import {UserLogin} from 'src/app/Models/User-Login';
import { NgForm,FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteServiceService } from 'src/app/Services/cliente-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlog:FormGroup;
  moduser:any;
  modpassword:any;

  constructor(private route: Router, private router: ActivatedRoute,private UserService:ClienteServiceService) { 
    this.UserService.UserRoot.forEach(element => {
      this.moduser=element.User
      this.modpassword = element.Password
      // Validators.pattern('[A-Za-z0-9!?.-]{1,20}')
    });
    console.log(this.moduser)
    console.log(this.modpassword)
    this.userlog = new FormGroup({
      UserLog: new FormControl('', Validators.pattern(this.moduser)),
      PasswordLog: new FormControl('', [Validators.pattern('[A-Za-z0-9!?.-]{1,20}')]),
    })
  }

  ngOnInit(): void {
      
  }

  get Controllers (){
    return this.userlog.controls;
  }

  IsValid() {
    if (this.userlog.valid && this.Controllers.PasswordLog.value === this.modpassword) {
      this.route.navigateByUrl("navbar")
    }
    else 
      alert('Credenciales incorrectas')
  }

}
