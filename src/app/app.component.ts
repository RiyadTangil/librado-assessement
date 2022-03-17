import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librado';
  isOpen: boolean = true;
  navClosed() {
    // function when sidenav is closed
    // this.sidenav.closeNav();
  }

}
