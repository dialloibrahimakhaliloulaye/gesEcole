import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  classes: Array<any> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.classes=[
      {id:1, niveau:"terminale", index:"A", nbreEleve:55},
      {id:2, niveau:"terminale", index:"B", nbreEleve:40},
      {id:3, niveau:"premiere", index:"C", nbreEleve:60},
      {id:4, niveau:"premiere", index:"A", nbreEleve:50}
    ];
  }

  deleteClasse(c:any) {
    
  }
}
