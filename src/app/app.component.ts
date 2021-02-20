import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;

  items: string[] = [
    'Vessels', 'Wet Grinder', 'Mat', 'Karanti', 'Badget'
  ]
  nivy: string[] = [
    'pant', 'Tiffen', 'Toys', 'Wetpassport', 'chain'
  ]
  sankari: string[] = [
    'broom', 'Poori', 'Nivy', 'Yuvi', 'charger'
  ]
  yuvi: string[] = [
    'Dress', 'Passport', 'pics', 'printouts', 'Insuraenc'
  ]
  home: string[] = [
    'Vessels', 'Wet Grinder', 'Mat', 'Karanti', 'Badget'
  ]
  settings: string[] = [
    'yuvi', 'Nivy', 'Sakari', 'Home' 
  ]

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  navItemClicked(event) {
    //just added console.log which will display the event details in browser on click of the button.   
    console.log(event.target.id);
    this.title = event.target.id;
    if("yuvi"==event.target.id)
    this.items = this.yuvi;
    else if("nivy"==event.target.id)
    this.items = this.nivy;
    else if("sankari"==event.target.id)
    this.items = this.sankari;
    else if("home"==event.target.id)
    this.items = this.home;
    else if("settings"==event.target.id)
    this.items = this.settings;
 }
  // sidenavEvents(str) {
  //   console.log(str);
  // }
}
