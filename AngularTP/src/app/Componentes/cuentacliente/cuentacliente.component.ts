import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { ClienteServiceService } from 'src/app/Services/cliente-service.service';

@Component({
  selector: 'app-cuentacliente',
  templateUrl: './cuentacliente.component.html',
  styleUrls: ['./cuentacliente.component.css']
})
export class CuentaclienteComponent implements OnInit {

  constructor(private route:Router,private router: ActivatedRoute,private UserService: ClienteServiceService) { }
  userId!:number;
  userActualizado:string;

  UserRoot:User = {
    ID:1,
    User:'',
    Password:'',
    Email:'',
    Nombre:'',
    Apellido:''
  };



  ngOnInit(): void {

    this.userId = +this.router.snapshot.paramMap.get("userId")!;
    if(this.userId != null) {
      this.UserRoot = this.UserService.onGetEmployee(this.userId)!;
    }
  }

  onUpdate(form:NgForm){
    let UserUpdate : User = {
      ID:form.value.ID,
      User:form.value.user,
      Password:form.value.password,
      Email:form.value.email,
      Nombre:form.value.nombre,
      Apellido:form.value.apellido,
    }
    this.UserService.onUpdate(UserUpdate);
    alert('Se cerrara la sesion y podra iniciar con los nuevos cambios')
    this.route.navigateByUrl('')
  }
}
