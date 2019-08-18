import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QUOTES';

  quotes: Quote[] = [
  new Quote(1,'Love quotes','never give up', new Date(2019,6,9)),
  new Quote(2,'Motivational quotes','never give up', new Date(2019,6,9)),
   new Quote(3,'Inspirational quotes','never give up', new Date(2019,6,9)),
   new Quote(4,'Dream quotes','never give up', new Date(2019,6,9)),
   new Quote(5,'Life quotes','never give up', new Date(2019,6,9)),
   new Quote(6,'Study quotes','never give up', new Date(2019,6,9)),

  ]

}
