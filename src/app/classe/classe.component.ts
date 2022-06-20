import { Component, OnInit } from '@angular/core';
import {ClasseService} from "../services/classe.service";
import {Classe} from "../model/classe.model";

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  classes: Array<Classe> | undefined;
  errorsMessage!: string;

  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
    this.handleGetAllClasse();
  }

  handleGetAllClasse(){
    this.classeService.getAllClasses().subscribe({
      next: (data)=>{
        this.classes=data;
      },
      error: (err)=>{
        this.errorsMessage=err;
      }
    });
  }

  handleDeleteClasse(c:Classe) {
    // @ts-ignore
    let conf= confirm("etes-vous sure?");
    if(conf==false) return;
    this.classeService.deleteClasse(c.id).subscribe({
      next: (data)=>{
        //this.handleGetAllClasse();
        // @ts-ignore
        let index = this.classes.indexOf(c);
        this.classes?.splice(index, 1);
      }
    });
  }
}
