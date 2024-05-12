import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PRSTUDENT';
  items: MenuItem[] | undefined;

  ngOnInit() {


    this.items = [
      {
        label: 'Student ',
        icon: 'pi pi-fw pi-file',

        items: [
          {
            label: 'Add New Student',
            icon: 'pi pi-fw pi-plus',
            routerLink:"add"

          },
          {
            label: 'View Student',
            icon: 'pi pi-fw pi-eye',
            routerLink:"view"
          },

        ]
      },
      {label:'Admisone',
        icon: 'pi pi-fw pi-file',
        items:[
          {
            label: 'Add New Student',
            icon: 'pi pi-fw pi-plus',

          },
          {
            label: 'Add New Student',
            icon: 'pi pi-fw pi-plus',
          }
        ]
      }

    ];
  }

}
