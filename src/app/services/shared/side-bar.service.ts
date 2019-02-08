import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

 public menu: any = [
    {
      title: 'Princiapal',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Charts', url: '/chartsOne' },
      ]
    }
  ]

  constructor() { }
}
