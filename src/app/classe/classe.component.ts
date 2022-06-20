import { Component, OnInit } from '@angular/core';
import {ClasseService} from "../services/classe.service";

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  classes: Array<any> | undefined;
  errorsMessage!: string;

  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
    this.classeService.getAllClasses().subscribe({
      next: (data)=>{
        this.classes=data;
      },
      error: (err)=>{
        this.errorsMessage=err;
      }
    });
  }

  deleteClasse(c:any) {

  }
}
