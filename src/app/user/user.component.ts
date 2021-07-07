import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service';
import { User } from '../user';
// import {User} from '../user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ApiService]
})
export class UserComponent implements OnInit {

  dataUser: User[];
  constructor(private api: ApiService) { }
 
  ngOnInit(): void {
    this.onSubmit;
  }

  onSubmit(data) {
   console.log(data)
    this.api.add(data).subscribe((res:Response) => {
     console.log(res);
   });
    }
 
   
  

}