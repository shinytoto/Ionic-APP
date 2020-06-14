import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { TabsPage } from "../pages/tabs/tabs";

import { PendientesComponent } from "../pages/pendientes/pendientes.component";
import { TerminadosComponent } from "../pages/terminados/terminados.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    PendientesComponent,
    TabsPage,
  ],
  imports: [IonicModule.forRoot(MyApp), ReactiveFormsModule, FormsModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    PendientesComponent,
    TabsPage,
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }],
})
export class AppModule {}
