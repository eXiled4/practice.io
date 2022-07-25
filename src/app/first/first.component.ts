import { Component, OnInit } from '@angular/core';



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

  

  constructor() { }

  ngOnInit(): void {
  }

}
