import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Classe} from "../model/classe.model";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private classes!: Classe[]

  constructor() {
    this.classes=[
      {id:1, niveau:"terminale", index:"A", nbreEleve:55},
      {id:2, niveau:"terminale", index:"B", nbreEleve:40},
      {id:3, niveau:"premiere", index:"C", nbreEleve:60},
      {id:4, niveau:"premiere", index:"A", nbreEleve:50}
    ];
  }

  public getAllClasses(): Observable<Classe[]>{
    // let rnd=Math.random();
    // if(rnd<0.5) return throwError(()=>new Error("internet connection error"))
    // else
      return of(this.classes);
  }

  public deleteClasse(id: number): Observable<boolean>{
    this.classes = this.classes.filter(p=>p.id!=id);
    return of(true);
  }
}
