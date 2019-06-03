import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
  constructor(private http: HttpClient) { }


  SearchCocktail(input:string) {
    return  this.http.get<Drink>(this.URL+'search.php?s='+input )
   }

  GetDetails(id:string){
    return this.http.get<ICocktail[]>(this.URL+'lookup.php?i='+id)
  }
  GetNonAlcoholic(Non_Alcoholic){
    return this.http.get<ICocktail[]>(this.URL+"filter.php?a=" + Non_Alcoholic)
  }

  
 }

export interface ICocktail {
  drinks: Drink[];
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: any;
  strDrinkES: any;
  strDrinkDE: any;
  strDrinkFR: any;
  'strDrinkZH-HANS': any;
  'strDrinkZH-HANT': any;
  strTags: any;
  strVideo: any;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: any;
  strInstructionsDE: any;
  strInstructionsFR: any;
  'strInstructionsZH-HANS': any;
  'strInstructionsZH-HANT': any;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  dateModified: string;
}