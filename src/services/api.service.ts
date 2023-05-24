import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl:string ='https://contactapp-epa8.onrender.com';
  //function to get all contacts
  getAllContacts():Observable<MyContact>{
    return this.http.get(`${this.baseUrl}/contact`);
  }
  //api call for fetch particular contact 
  viewContact(contactId:any)
  {
    return this.http.get(`${this.baseUrl}/contact/${contactId}`);
  }
  //api call for fetch group name
  getRelationName(relationId:any){
    return this.http.get(`${this.baseUrl}/relation/${relationId}`)
  }

  //function for fetch all groups from http://localhost: 3000/group
  getAllRelations(){
  return this.http.get (`${this.baseUrl}/relation`)  
  }

  //function for adding new contact to server
  addContact (contactBody: any) {
  return this.http.post(`${this.baseUrl}/contact`,contactBody)
  }

  //function for delete a contact from server 
  deleteContact (contactId: any) {
  return this.http.delete(`${this.baseUrl}/contact/${contactId}`)
  }

  //function for updating an existing contact
updateContact(contactId:any, contactBody: any){

  return this.http.put(`${this.baseUrl}/contact/${contactId}`,contactBody);

}

}
