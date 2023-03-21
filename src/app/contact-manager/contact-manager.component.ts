import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit{


  //display system date and time
  loginDate:any;

  // allContacts:any
  allContacts:MyContact[]=[];   //empty array declaration


  //searching
  searchKey:string='';

  heading='Contact Details';

  constructor(private api:ApiService) { 
    this.loginDate=new Date();
    
  }


  getAllContacts(){
    this.api.getAllContacts().subscribe((data:any)=>{
      console.log(data);    //array[4] all contact details
      this.allContacts=data;    //passing data to allContacts variable
    })
  }

  ngOnInit(): void{
    this.getAllContacts();
  }

  

  // nameChange(){
  //   alert(`Value Changed`)
  // }

  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value;
    console.log(this.searchKey); 
  }

  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((data:any)=>{
      this.getAllContacts();
      alert(`Contact with contactId:${contactId} is deleted`)
    })
  }

}
