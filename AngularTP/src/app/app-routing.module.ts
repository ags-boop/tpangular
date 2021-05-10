import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { CuentaclienteComponent } from './Componentes/cuentacliente/cuentacliente.component';
import { AccederMediosComponent } from './Componentes/acceder-medios/acceder-medios.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'navbar/:usuario',
    component:NavBarComponent
  },
  {
    path:'cuentacliente/:userId',
    component:CuentaclienteComponent
  },
  {
    path:'accedermedios/:user',
    component:AccederMediosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
