import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  // {
  //   path: "agregar",
  //   loadChildren: () =>
  //     import("./pages/agregar/agregar.module").then((m) => m.AgregarPageModule),
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), ReactiveFormsModule, FormsModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
