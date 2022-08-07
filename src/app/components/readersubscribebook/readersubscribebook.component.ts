import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-readersubscribebook',
  templateUrl: './readersubscribebook.component.html',
  styleUrls: ['./readersubscribebook.component.css']
})
export class ReadersubscribebookComponent implements OnInit {

  flag : boolean = false

  subscriber ={
    name:'',
    email:'' 
  }

  id2 : any 

  constructor(private route:ActivatedRoute, private readerService: ReaderService, private router :Router) { }

  ngOnInit(): void {

    this.id2= this.route.snapshot.params['id']
  }

  onSubmit(){
 this.readerService.subscribe(this.subscriber.name, this.subscriber.email,this.id2).subscribe(
   (res:any)=>{
     this.flag=true
     console.log("subscribed")

   }
 )
  }

  updateBook(){
    this.router.navigate(['/findallbook'])

  }

}
