import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() CurrentUserInBar:string;
  constructor(private route:Router,private router: ActivatedRoute) { }

  ngOnInit(): void {
     this.CurrentUserInBar = this.router.snapshot.paramMap.get("usuario")!;
  }

}
