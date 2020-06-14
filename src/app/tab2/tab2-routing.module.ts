import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Tab2Page } from "./tab2.page";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: Tab2Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
