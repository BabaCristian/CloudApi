import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhiskiesComponent } from './whiskies/whiskies.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailService } from './Services/cocktail.service';
import { FormsModule } from '@angular/forms';
import { CocktaildetailsComponent } from './cocktaildetails/cocktaildetails.component';
import { WhiskiesdetailsComponent } from './whiskiesdetails/whiskiesdetails.component';
import { AuthService } from "./Services/auth.service";




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    WhiskiesComponent,
    CocktailsComponent,
    CocktaildetailsComponent,
    WhiskiesdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [CocktailService,AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }
