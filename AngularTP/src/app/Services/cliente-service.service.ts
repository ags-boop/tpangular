import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {


  CorrectUser:string = 'superadmin'
  CorrectPassword:string = '123'

  UserRoot : User [] = [
    {
      ID : 1,
      User:this.CorrectUser,
      Password:this.CorrectPassword,
      Email: 'testaagustin8@gmail.com',
      Nombre:'Agustin',
      Apellido:'Testa',
    },
  ];
  
  constructor() { }

  onUpdate(User:User){

    let olduser = this.UserRoot.find(e => e.ID === User.ID);
    olduser!.ID = User.ID;
    olduser!.User = User.User;
    olduser!.Password = User.Password;
    olduser!.Email = User.Email;
    olduser!.Nombre = User.Nombre;
    olduser!.Apellido = User.Apellido;
  }

  onGetEmployee(id:number) {
    return this.UserRoot.find(e => e.ID === id  )

  }

}
