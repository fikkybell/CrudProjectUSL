import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../api.service';
import {User} from '../user';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  dataUser: User ;
  id : number;

  constructor(private api: ApiService, private router:ActivatedRoute) { }

  ngOnInit(): void {
this.id = this.router.snapshot.params['id'];
this.api.getCurrentUser(this.id).subscribe((data:User)=>{
  this.dataUser = data;
})
  }


}
