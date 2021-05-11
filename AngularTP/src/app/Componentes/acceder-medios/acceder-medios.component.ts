import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedioServicesService } from 'src/app/Services/medio-services.service';
import * as _ from 'lodash';
import { element } from 'protractor';
export interface ListaDeDescuentosLimitadasDeTarifa {
   tipoPeriodo: number;
   limite: number;
   definicionDiaria: string;
   definicionSemanal: number;
   definicionMensual: number;
   pasajeroId: number;
}
@Component({
  selector: 'app-acceder-medios',
  templateUrl: './acceder-medios.component.html',
  styleUrls: ['./acceder-medios.component.css']
})
export class AccederMediosComponent implements OnInit {
  receiveddata : any = [] ;
  finaldata : any = [] ;

  constructor(private route:Router,private router: ActivatedRoute,private Medio: MedioServicesService) { 
   this.receiveddata = this.Medio.getdata()
   this.receiveddata = _.orderBy(this.receiveddata, ['pasajeroId']);
   this.receiveddata = _.orderBy(this.receiveddata, ['tipoPeriodo']);
   // this.receiveddata = _.groupBy(this.receiveddata, 'tipoPeriodo');
   // this.receiveddata = _.castArray(this.receiveddata)
   
   console.log('data',this.receiveddata)
 }

  @Input() CurrentUserInBar:string;
  
  ngOnInit(): void {
    this.CurrentUserInBar = this.router.snapshot.paramMap.get("user")!;
  }


}




