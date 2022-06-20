import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClasseComponent} from "./classe/classe.component";
import {EleveComponent} from "./eleve/eleve.component";

const routes: Routes = [
  {path: "classes", component: ClasseComponent},
  {path: "eleves", component: EleveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
