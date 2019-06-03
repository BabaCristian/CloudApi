import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WiskyService, Whisky } from '../Services/wisky.service';

@Component({
  selector: 'app-whiskies',
  templateUrl: './whiskies.component.html',
  styleUrls: ['./whiskies.component.scss']
})
export class WhiskiesComponent implements OnInit {

  whiskies : Whisky;
  data : string ;
  pagina : number = 1;
  constructor(private whiskyservice : WiskyService  ,
    private router :Router) {
      
      this.whiskyservice.getAllwhiskies().subscribe((test) => {
      console.log(test)
        this.whiskies = test

    ,err => console.log(err.message)

        });
    }
  ngOnInit() { }

  Getdetails(id:string){
    this.router.navigate(["whiskiesdetail/" + id])
    };

  Searchbyname(name : string) {
    this.data = name;
    this.whiskyservice.Searchname(name).subscribe((data) => {
      console.log(data)
        this.whiskies = data

    } 
    )}

    
  paginationNext() {
    
    this.pagina++;
    this.whiskyservice.Paging(this.pagina).subscribe((data) => {
      console.log(data)
        this.whiskies = data
        console.log(this.pagina)
    })
  }
  
  paginationPrev() {
    this.pagina--;
    if(this.pagina < 0){
      this.pagina = 0
    }

    this.whiskyservice.Paging(this.pagina).subscribe((data) => {
      console.log(data)
      this.whiskies = data
      console.log(this.pagina)
    })
  }
}


