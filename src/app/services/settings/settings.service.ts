import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

 settings: Settings = {
   themeUrl: 'assets/css/colors/default.css',
   theme: 'default'
 };

  constructor( @Inject(DOCUMENT) private pDocument) {
    this.LoadSettings();
  }

  SaveSettings(){
    localStorage.setItem('settings', JSON.stringify( this.settings ));
  };

  LoadSettings(){
    if( localStorage.getItem('settings') ){
      this.settings = JSON.parse( localStorage.getItem('settings') );
      this.ApplyTheme( this.settings.theme );
    }
    else{
      this.ApplyTheme( this.settings.theme );
    }
  };

 ApplyTheme( pTheme: string ){
   let url: string = `assets/css/colors/${pTheme}.css`;
   this.pDocument.getElementById('theme').setAttribute('href', url);
   this.settings.theme = pTheme;
   this.settings.themeUrl = url;
   this.SaveSettings();
 };

}

interface Settings {
  themeUrl: string;
  theme: string;
}
