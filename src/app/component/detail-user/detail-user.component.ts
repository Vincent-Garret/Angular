import { Component, Input,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  id:number = 0
  @Input() user:any;

  constructor(private httpService:HttpService, private route: ActivatedRoute) {
    this.route.params
    .subscribe( params => {
      this.id = params['id'];
    })
   }

  ngOnInit(): void {
    this.getOneUser()
  }

  getOneUser() {
    this.httpService.getOneUser(this.id)
    .then(users => this.user = users)
    .catch( err => console.log(err))
  }

}
