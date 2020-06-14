import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

// services
import { DeseosService } from "../services/deseos.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async agregarLista() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Nueva Lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
          },
        },
        {
          text: "Crear",
          handler: (response) => {
            console.log(response);
            if (response.titulo.length === 0) {
              return;
            }

            const listaId = this.deseosService.crearLista(response.titulo);

            // Crear lista

            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          },
        },
      ],
    });

    alert.present();
  }
}
