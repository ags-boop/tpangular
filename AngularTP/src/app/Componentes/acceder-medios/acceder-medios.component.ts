import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedioServicesService } from 'src/app/Services/medio-services.service';

@Component({
  selector: 'app-acceder-medios',
  templateUrl: './acceder-medios.component.html',
  styleUrls: ['./acceder-medios.component.css']
})
export class AccederMediosComponent implements OnInit {
  receiveddata : any=[];

  constructor(private route:Router,private router: ActivatedRoute,private Medio: MedioServicesService) { 
   this.receiveddata = this.Medio.getdata().sort()
   console.log(this.receiveddata)
   // let gfg = _.orderBy(this.receiveddata, ['patron', 'tipoPeriodo'], 
   // ['asc', 'desc']);

   // console.log("data",gfg)
 }

  
  @Input() CurrentUserInBar:string;
  
  ngOnInit(): void {
    this.CurrentUserInBar = this.router.snapshot.paramMap.get("user")!;
  }


}


