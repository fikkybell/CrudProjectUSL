import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router'
import { User } from '../user';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css'],
   providers: [ApiService]
})
export class ViewPageComponent implements OnInit {
   id: number;
   dataUser = new User();
   submitted = false;
  

  constructor(private api: ApiService, private router: ActivatedRoute) { }

 
  ngOnInit(): void {
    this.update;
    this.id = this.router.snapshot.params['id'];
    this.api.getCurrentUser(this.id).subscribe((data:User)=>{
      this.dataUser = data;
    })
  }

    
   update(userForm:NgForm){
    this.api.update(this.id, userForm.value).subscribe((data)=>{
      console.log(data);
    
    });
   }
   
    }
  
    