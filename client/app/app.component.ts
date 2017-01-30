import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
//  template: `
//   <nav>
//    <div class="nav-wrapper" style="background-color:black;">
//      <div class="brand-logo">&nbsp;{{title}}</div>
//    </div>
//  </nav>
//    <router-outlet></router-outlet>
//  `,
  
  template: `
   <nav>
    <div class="nav-wrapper" style="background-color:red;">
      <div class="brand-logo">&nbsp;{{title}}</div>
    </div>
  </nav>
  `,
})
export class AppComponent  {
  title = 'Blood Donors';
}
