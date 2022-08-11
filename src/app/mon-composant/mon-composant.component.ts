import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent implements OnInit {

  constructor() { }
  title = 'Raclette Party';

  isThisIngredientVital:boolean = true;
  displayGuestList:boolean = false;
  songList:string[] = ["Alejendro", "Ne me quitte pas", "Le temps est bon"];
  ngOnInit(): void {}
}