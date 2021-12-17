import { Component, Input,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-details-property',
  templateUrl: './details-property.component.html',
  styleUrls: ['./details-property.component.css']
})
export class DetailsPropertyComponent implements OnInit {

  id:number = 0
  @Input() property:any;

  constructor(private httpService:HttpService, private route: ActivatedRoute) {
    this.route.params
    .subscribe( params => {
      this.id = params['id'];
    })
   }

  ngOnInit(): void {
    this.getOneProperty()
  }

  getOneProperty() {
    this.httpService.getOneProperty(this.id)
    .then(properties => this.property = properties)
    .catch( err => console.log(err))
  }
}
