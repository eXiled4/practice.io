import { Component, OnInit } from '@angular/core';

declare const genRandomNumbers:any;

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  typesOfCoffee = ["Latte", "Long Black", "Cappucino", "Flat White"]

  listOfPokemon = [
    {
      name: "Bulbasaur",
      type: "Grass",
      region: "Kanto",
      age: 512
    },
    {
      name: "Chimchar",
      type: "Fire",
      region: "Sinnoh",
      age: 34
    },
    {
      name: "Totodile",
      type: "Water",
      region: "Johto",
      age: 123.2
    },
  ];

  rNum = <[]>genRandomNumbers();
  page: Number = 1;
  itemsToDisplay: Number = 10;

  // Property '...' has no initializer and is not definitely assigned in the constructor - fixed with "strictPropertyInitialization": false (in tsconfig.json)
  // Make sure you add that after "strict": true else the transpiler seems to turn it on again 

  pageChange(event){
    this.page = event
  }

  // Typescript: TS7006: Parameter 'xxx' implicitly has an 'any' type - fixed with "noImplicitAny": false (in tsconfig.json)

  constructor() { }

  ngOnInit(): void {
  }

}
