
import { Component, OnInit } from '@angular/core';
import { CocktailService, ICocktail } from '../Services/cocktail.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cocktaildetails',
  templateUrl: './cocktaildetails.component.html',
  styleUrls: ['./cocktaildetails.component.scss']
})
export class CocktaildetailsComponent implements OnInit {
  id: any;
  details: ICocktail[]
  detail: any[]
  constructor(private cocktailservice : CocktailService, public route : ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
    
    this.cocktailservice.GetDetails(this.id).subscribe((test) => {
      console.log(test)
        this.details = test
        this.detail = this.details
        console.log(this.id)
    }),err => console.log(err.message)

  }




  ngOnInit() {
  }

}