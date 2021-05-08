import { Component, OnInit} from '@angular/core';
import {User} from 'src/app/Models/User';
import {UserLogin} from 'src/app/Models/User-Login';
import { NgForm,FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  CorrectUser:string = 'superadmin'
  CorrectPassword:string = '123'
  // UserRoot:User = {
  //   ID:1,
  //   User:'superadmin',
  //   Password:'Azerty?.123',
  //   Email:'testaagustin8@gmail.com',
  //   Nombre:'Agustin',
  //   apellido:'Testa',
  // };

  userlog:FormGroup;

  currentuser:UserLogin = {
    UserLogin:'',
    PasswordLogin: '',
  };

  constructor(private route: Router, private router: ActivatedRoute) { 
    this.userlog = new FormGroup({
      UserLog: new FormControl('', Validators.pattern(this.CorrectUser)),
      PasswordLog: new FormControl('', Validators.pattern(this.CorrectPassword)),
    })
  }

  ngOnInit(): void {

  }

  onLogin(form: NgForm){
     let CurrentAdmin : UserLogin = {
      UserLogin:form.value.User,
      PasswordLogin:form.value.Password,
    }
    if(CurrentAdmin.UserLogin == this.CorrectUser && CurrentAdmin.PasswordLogin == this.CorrectPassword){
      alert('u in ')
      console.log(CurrentAdmin.UserLogin)
      console.log(CurrentAdmin.PasswordLogin)
      
    }
    else
    alert('Credenciales Incorrectas');
  }

   get Controllers (){
    return this.userlog.controls;
  }

  IsValid() {
    if (this.userlog.valid) {
      alert('u in')
      
      //TODO
    }
    else 
      alert('not in')
  }

}
