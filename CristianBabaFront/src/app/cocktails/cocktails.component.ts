import { Component, OnInit } from '@angular/core';
import { CocktailService, ICocktail,Drink } from '../Services/cocktail.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

  cocktails : Drink;
  mocktails : ICocktail[];
  data : string;
  getid : string;

  constructor(private cocktailservice : CocktailService ,
    private router :Router) {
   }

  ngOnInit() {  
  }

  Searchdata(cocktail:string){
    cocktail = this.data;
    this.cocktailservice.SearchCocktail(cocktail).subscribe((data)=>{
    this.cocktails = data;
    console.log(data);

    console.log("jouw input: " + cocktail)
  });
}

Getdetails(id:string){
this.router.navigate(["cocktailsdetails/" + id])
};

  Getnonalcoholic(non_alcohol){
    this.cocktailservice.GetNonAlcoholic(non_alcohol).subscribe((data)=>{
      this.mocktails = data;
      console.log(data);
    });
  }
}