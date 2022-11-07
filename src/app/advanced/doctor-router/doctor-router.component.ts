import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-router',
  templateUrl: './doctor-router.component.html',
  styles: [
  ]
})
export class DoctorRouterComponent implements OnInit {
id:string='';
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params['id'];

    })

  }
  saveDoctor(){
    this.router.navigate(['doctor','007']);
  }

}
