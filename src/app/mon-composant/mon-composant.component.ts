import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent implements OnInit {

  constructor() { }

  User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };
  isHidden: boolean = true;

  ngOnInit(): void {}

  handleHide() {
    this.isHidden = !this.isHidden;
  }
}