import { Component, OnInit } from '@angular/core';

declare const genRandomNumbers:any;

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  rNum = <[]>genRandomNumbers();
  page = 1;
  itemsToDisplay = 10;
  // Property '...' has no initializer and is not definitely assigned in the constructor - fixed with "strictPropertyInitialization": false (in tsconfig.json)
  // Make sure you add that after "strict": true else the transpiler seems to turn it on again 

  pageChanged(event){
    this.page = event
  }

  // Typescript: TS7006: Parameter 'xxx' implicitly has an 'any' type - fixed with "noImplicitAny": false (in tsconfig.json)

  constructor() { }

  ngOnInit(): void {
  }

}
