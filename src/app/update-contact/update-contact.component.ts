import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/model/myContact';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{

  contactId: any;
  contact:MyContact={};
  allRelations:any[]=[];

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.contactId=data.contactId;

      //call an api for getting particular contact details
      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        console.log(data);//particular contact details
        this.contact=data;
      })
    })

    this.api.getAllRelations().subscribe((data:any)=>{
      console.log(data);
      this.allRelations=data;
    })
  }

  updateContact() {
    alert(`Contact Updated`);
    this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{

    this.route.navigateByUrl('');

    })

  }

    

}
