import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Classe} from "../model/classe.model";
import {UUID} from "angular2-uuid";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private classes!: Classe[]
  errorMessage!: string;

  constructor() {
    this.classes=[
      {id:UUID.UUID(), niveau:"terminale", index:"A", nbreEleve:55, anneeScolaire:'2022'},
      {id:UUID.UUID(), niveau:"terminale", index:"B", nbreEleve:40, anneeScolaire:'2022'},
      {id:UUID.UUID(), niveau:"premiere", index:"C", nbreEleve:60, anneeScolaire:'2022'},
      {id:UUID.UUID(), niveau:"premiere", index:"A", nbreEleve:50, anneeScolaire:'2022'}
    ];

    for (let i = 0; i < 10; i++) {
      this.classes.push({id:UUID.UUID(), niveau:"terminale", index:"A", nbreEleve:55, anneeScolaire:'2022'});
      this.classes.push({id:UUID.UUID(), niveau:"terminale", index:"B", nbreEleve:40, anneeScolaire:'2022'});
      this.classes.push({id:UUID.UUID(), niveau:"premiere", index:"C", nbreEleve:60, anneeScolaire:'2022'});
      this.classes.push({id:UUID.UUID(), niveau:"premiere", index:"A", nbreEleve:50, anneeScolaire:'2022'});
    }
  }

  public getAllClasses(): Observable<Classe[]>{
    // let rnd=Math.random();
    // if(rnd<0.5) return throwError(()=>new Error("internet connection error"))
    // else
      return of(this.classes);
  }

  public deleteClasse(id: string): Observable<boolean>{
    this.classes = this.classes.filter(p=>p.id!=id);
    return of(true);
  }

  public searchClasse(keyword: string): Observable<Classe[]>{
    let classe = this.classes.filter(c=>c.niveau.includes(keyword));
    return of(classe);
  }
}
