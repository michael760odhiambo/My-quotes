import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    {id:1, name:'Love quotes', description:''},
   {id:2,name:'Motivational quotes', description:''},
   {id:3,name:'Inspirational quotes', description:''},
   {id:4,name:'Dream quotes', description:''},
   {id:5,name:'Life quotes', description:''},
   {id:6,name:'Study quotes', description:''},
  ]

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
