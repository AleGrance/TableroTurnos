import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.page.html',
  styleUrls: ['./turnos.page.scss'],
})
export class TurnosPage implements OnInit {
  // El listado de clientes
  public turnos: any;

  constructor(public api: ApiService, private toastController: ToastController) {}

  ngOnInit() {
    const position = 'top';
    const message = 'Aplicación iniciada';
    //this.presentToast(position, message);
    //this.toastr.success('App iniciada');
    this.traer();
    // setInterval((): void => {
    //   this.traer();
    // }, 2000);

  }

  async presentToast(position: any, message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      cssClass: 'custom-toast',
      position: position
    });

    await toast.present();
  }

  traer() {
    // Trae datos del api
    this.api
      .get('tasks')
      .pipe(
        map((data) => {
          this.turnos = data;
          //console.log(this.turnos);
        })
      )
      .subscribe();
  }
}
