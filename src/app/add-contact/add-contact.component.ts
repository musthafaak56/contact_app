import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/model/myContact';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{


  allRelations:any[]=[];
  // contactId:any;
  // contactName:string='';
  // contactPhoto:string='';
  contact:MyContact={};
  constructor(private api:ApiService,private route:Router) { }

  ngOnInit(): void {
    this.api.getAllRelations().subscribe((data:any)=>{
      console.log(data);
      this.allRelations=data;
    })
  }


  //add new contact
  addContact(){
    this.api.addContact(this.contact).subscribe((data:any)=>{
      this.route.navigateByUrl('');
    })
  }

}
