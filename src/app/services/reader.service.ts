import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(private http : HttpClient) { }
  //host : string = "http://localhost:54764/reader/api/v1"
 host : string = "http://localhost:9090/reader/api/v1"

  findAll()
{
  return this.http.get(this.host+"/findAll")
}

findBookByCategory(category:any){
  return this.http.get(this.host+"/getBookByCategory/"+category)
}
findBookByTitle(title:any){
  return this.http.get(this.host+"/getBookByTitle/"+title)
}

findBookByAuthor(author:any){
  
  return this.http.get(this.host+"/getBookByAuthor/"+author)
}

findBookByPublisher(publisher:any){
  return this.http.get(this.host+"/getBookByPublisher/"+publisher)
}

findBookByPrice(price:any){
  return this.http.get(this.host+"/getBookByPrice/"+price)
}

subscribe(name:any, email:any,id : any){
  return this.http.get(this.host+"/subscribe/"+name+"/"+email+"/"+id)
}

subscribebBook(email:any){
  return this.http.get(this.host+"/subscribedBook/"+email)
}

}


