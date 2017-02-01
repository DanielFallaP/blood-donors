import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  
  template: `
   <nav>
    <div class="nav-wrapper" style="background-color:red;">
      <div class="brand-logo">&nbsp;{{title}}</div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="patient">I'll Give, Damn</a></li>
        <li><a href="donor">I Need Some!</a></li>
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent  {
  title = 'Blood Donors';
}
