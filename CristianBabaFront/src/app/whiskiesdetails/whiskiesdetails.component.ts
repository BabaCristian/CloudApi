import { Component, OnInit } from '@angular/core';
import { WiskyService, Whisky} from '../Services/wisky.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-whiskiesdetails',
  templateUrl: './whiskiesdetails.component.html',
  styleUrls: ['./whiskiesdetails.component.scss']
})
export class WhiskiesdetailsComponent implements OnInit {

  id: any;
  details : Whisky
  constructor(private whiskyservice : WiskyService, public route : ActivatedRoute) {

    this.id = this.route.snapshot.params['id'];
    
    this.whiskyservice.getwhisky(this.id).subscribe((data) => {
      console.log(data)
        this.details = data
        console.log(this.id)
    }),err => console.log(err.message)

   }

  ngOnInit() {}


  

}
