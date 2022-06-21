import { Component, OnInit } from '@angular/core';
import {ClasseService} from "../services/classe.service";
import {Classe} from "../model/classe.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  classes!: Array<Classe>;
  errorsMessage!: string;
  searchFormGroup!: FormGroup;

  constructor(private classeService: ClasseService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.handleGetAllClasse();
    this.handleSearch();
  }

  handleSearch(){
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control(null)
    });
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
        let index = this.classes.indexOf(c);
        this.classes.splice(index, 1);
      }
    });
  }

  handlesearchClasse() {
    let keyword = this.searchFormGroup.value.keyword;
    this.classeService.searchClasse(keyword).subscribe({
      next: (data)=>{
        this.classes = data;
      }
    })
  }
}
