import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
  new Quote(1,'Love quotes :added by mike','1)A friend is someone who knows all about you and still loves you, 2) Darkness cannot drive out darkness only light can do that Hate cannot drive out hate only love can do that,3)We accept the love we think we deserve', new Date(2019,6,9)),
  new Quote(2,'Motivational quotes :added by john','1)Successful people don’t become that way overnight, 2)Push yourself, because no one else is going to do it for you, 3)Why pushing yourself to the limit is the best way to see what you’re capable of, 4) Dream it. Wish it. Do it.', new Date(2019,6,9)),
   new Quote(3,'Inspirational quotes :added by willy','1)Dont judge each day by the harvest you reap but by the seeds that you plant, 2)Write it on your heart that every day is the best day in the year, 3)Every moment is a fresh beginning, 4)Without His love I can do nothing, with His love there is nothing I cannot do', new Date(2019,6,9)),
   new Quote(4,'Dream quotes :added by lucy','1)A dream doesnt become reality through magic; it takes sweat, determination and hard work, 2)All our dreams can come true, if we have the courage to pursue them, 3)Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly, 4)The future belongs to those who believe in the beauty of their dreams', new Date(2019,6,9)),
   new Quote(5,'Life quotes added by ','1)Love For All, Hatred For None, 2)Change the world by being yourself, 3)Every moment is a fresh beginning, 4)Never regret anything that made you smile', new Date(2019,6,9)),
   new Quote(6,'Study quotes','Let us study things that are no more. It is necessary to understand them, if only to avoid them, 2)You cant study the darkness by flooding it with light, 3)The art of reading and studying consists in remembering the essentials and forgetting what is not essential, 4)The ink of the scholar is more holy than the blood of the martyr', new Date(2019,6,9)),

  ]

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

deleteQoute(isComplete, index){
if (isComplete){
  let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?` )
}

  if (isComplete){
    this.quotes.splice(index, 1);
    alert('you have deleted this quote')
  }
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

  constructor() { }

  ngOnInit() {
  }

}
