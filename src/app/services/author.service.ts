import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

 

  //url = "http://localhost:64396/author/api/v1/createBook"
  //url = "http://localhost:51813/author/api/v1/createBook"

  //url1 = "http://localhost:52392/author/api/v1/findBook/"

  private host:string = "http://localhost:49637/author/api/v1/findBook";
  private host1:string = "http://localhost:49637/author/api/v1/updateBook";
  private host2:string = "http://localhost:49637/author/api/v1/findBookById/";
  private host3:string = "http://localhost:49637/author/api/v1/register";
  url = "http://localhost:49637/author/api/v1/createBook"

  constructor(private http:HttpClient) { }

  registration(author: any) 
  {
   return  this.http.post(this.host3,author)
  }
  getBookById(id: number) 
  {
   return  this.http.get(this.host2+id)
  }
  generateBook(book:any) {
    
    return this.http.post<string>(`${this.url}`,book)
  }

  findBook(author:any) {
    
    return this.http.get(this.host+"/"+author)
  }

  updateBook(id:any, author:any, book:any) 
  {

    //http://localhost:9090/author/api/v1/updateBook?id=34&author=valmiki
    return this.http.put(this.host1+"?id="+id+"&author="+author,book)
  }

  

  
}
