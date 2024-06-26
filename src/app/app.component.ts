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
        icon: 'pi pi-fw pi-users',

        items: [
          {
            label: 'Add New Student',
            icon: 'pi pi-fw pi-plus',
            routerLink:"add"

          },
          {
            label: 'View Student',
            icon: 'pi pi-fw pi-eye',
            routerLink:"view",

          },

        ]
      },
      {
        label: 'Couers ',
        icon: 'pi pi-fw pi-file',

        items: [
          {
            label: 'Add New Couers',
            icon: 'pi pi-fw pi-plus',
            routerLink:"AddCouers"

          },
          {
            label: 'View Student',
            icon: 'pi pi-fw pi-eye',
            routerLink: "ViewCouers"

          },

        ]
      },
      {
        label:'Admission',
        icon: 'pi pi-fw pi-file',

        items:[
          {
            label: 'Add admission',
            icon: 'pi pi-fw pi-plus',
            routerLink:"adm"

          },
          {
            label: 'View Admission',
            icon: 'pi pi-fw pi-eye',
            routerLink:"viewAdm"
          }
        ]
      }

    ];
  }

}
