import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {User} from '../user';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ApiService]
})
export class TableComponent implements OnInit {
   dataUser: User;
   userEdit: User;
   closeResult: string;
  constructor(private api: ApiService) { }
 
  ngOnInit(): void {
    this.getData();
    this.deleteData;
    
  }

  getData(){
    let resp = this.api.apiCall()
    .subscribe(
      response => {
        this.dataUser = response;
        console.log(this.dataUser)
      }
    )
  }

 
 deleteData(id){
  this.api.delete(id).subscribe((data)=>{
    console.log(data);
  });
 }

}