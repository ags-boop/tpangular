import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { CuentaclienteComponent } from './Componentes/cuentacliente/cuentacliente.component';
import { AccederMediosComponent } from './Componentes/acceder-medios/acceder-medios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    CuentaclienteComponent,
    AccederMediosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
