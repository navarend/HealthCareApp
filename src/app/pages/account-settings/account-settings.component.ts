import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public pSettings: SettingsService ) { }

  ngOnInit() {
    this.AddClassCheck();
  }

  ChangeColor( pTheme: string, pLink: any ){
    this.ApplyCheck( pLink );//set the class selected
    this.pSettings.ApplyTheme( pTheme );
  };

  ApplyCheck( pLinkSelected: any ){
      let selectors: any = document.getElementsByClassName('selector'); //Vanilla JavaScript
      for( let ref of selectors ){
         ref.classList.remove('working');
      }
      pLinkSelected.classList.add('working');
  };

  AddClassCheck(){
    let selectors: any = document.getElementsByClassName('selector'); //Vanilla JavaScript
    let theme : string = this.pSettings.settings.theme;
    for( let ref of selectors ){
      if( ref.getAttribute('data-theme') === theme ){
        ref.classList.add('working');
        break;
      }
    }
  };
}
