import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId:string='';
  contact:any;
  relationId:any;
  relationName:any;

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.contactId=data.contactId;
    })
    
    //view particular data - api call
    this.api.viewContact(this.contactId).subscribe((data:any)=>{
      console.log(data);    //data of particular contact
      this.contact=data;
      this.relationId=data.relationId;  
      
      this.api.getRelationName(this.relationId).subscribe((data:any)=>{
        console.log(data);
        this.relationName=data.name;
      })

    })

    //groupName

  }
 
}

