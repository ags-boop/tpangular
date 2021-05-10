import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedioServicesService } from 'src/app/Services/medio-services.service';

@Component({
  selector: 'app-acceder-medios',
  templateUrl: './acceder-medios.component.html',
  styleUrls: ['./acceder-medios.component.css']
})
export class AccederMediosComponent implements OnInit {
  receiveddata : any;
  datareceived : any[]=[];
  test : any[]=[];

  constructor(private route:Router,private router: ActivatedRoute,private Medio: MedioServicesService) { 
    this.receiveddata = this.Medio.getdata()
   
    console.log("data",this.receiveddata)
    
  }
  
  @Input() CurrentUserInBar:string;
  
  ngOnInit(): void {
    this.CurrentUserInBar = this.router.snapshot.paramMap.get("user")!;
  
  }


}

const dataconst = [
  {
    "listaDeDescuentosLimitadasDeTarifas":[
       {"tipoPeriodo":1,"limite":40,"definicionDiaria":"08:00","definicionSemanal":0,"definicionMensual":0,"pasajeroId":1},
       {
          "tipoPeriodo":2,
          "limite":41,
          "definicionDiaria":"0",
          "definicionSemanal":1,
          "definicionMensual":0,
          "pasajeroId":1
       },
       {
          "tipoPeriodo":3,
          "limite":42,
          "definicionDiaria":"0",
          "definicionSemanal":0,
          "definicionMensual":21,
          "pasajeroId":1
       },
       {
          "tipoPeriodo":1,
          "limite":90,
          "definicionDiaria":"10:00",
          "definicionSemanal":0,
          "definicionMensual":0,
          "pasajeroId":2
       },
       {
          "tipoPeriodo":2,
          "limite":91,
          "definicionDiaria":"0",
          "definicionSemanal":7,
          "definicionMensual":0,
          "pasajeroId":2
       },
       {
          "tipoPeriodo":3,
          "limite":92,
          "definicionDiaria":"0",
          "definicionSemanal":0,
          "definicionMensual":4,
          "pasajeroId":2
       },
       {
          "tipoPeriodo":1,
          "limite":150,
          "definicionDiaria":"23:00",
          "definicionSemanal":0,
          "definicionMensual":0,
          "pasajeroId":3
       },
       {
          "tipoPeriodo":2,
          "limite":151,
          "definicionDiaria":"0",
          "definicionSemanal":5,
          "definicionMensual":0,
          "pasajeroId":3
       },
       {
          "tipoPeriodo":3,
          "limite":152,
          "definicionDiaria":"0",
          "definicionMensual":30,
          "definicionSemanal":0,
          "pasajeroId":3
       }
    ]
 }
]  


const test2 = [
  {
     "id":"1",
     "nombre":"Torta de Chocolate",
     "stock":"35",
     "precio":"5.00",
     "url":"torta-de-chocolate",
     "img":"tc.jpg",
     "fecha":"2019-06-17 15:56:23"
  },
  {
     "id":"2",
     "nombre":"Pie de Manzana",
     "stock":"45",
     "precio":"4.50",
     "url":"pie-de-manzana",
     "img":"pm.jpg",
     "fecha":"2018-08-11 16:25:33"
  },
  {
     "id":"3",
     "nombre":"Arroz con Leche",
     "stock":"36",
     "precio":"2.50",
     "url":"arroz-con-leche",
     "img":"al.jpg",
     "fecha":"2018-08-11 16:25:36"
  },
  {
     "id":"4",
     "nombre":"Gelatina de Fresa",
     "stock":"60",
     "precio":"1.50",
     "url":"gelatina-de-fresa",
     "img":"gf.jpg",
     "fecha":"2018-08-11 16:25:39"
  },
  {
     "id":"5",
     "nombre":"Suspiro a la Limeña",
     "stock":"26",
     "precio":"6.00",
     "url":"suspiro-a-la-limeña",
     "img":"sl.jpg",
     "fecha":"2019-06-17 15:58:43"
  },
  {
     "id":"6",
     "nombre":"Mazamorra Morada",
     "stock":"50",
     "precio":"3.00",
     "url":"mazamorra-morada",
     "img":"mm.png",
     "fecha":"2018-08-11 16:25:45"
  }
]