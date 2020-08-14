import { Component} from '@angular/core';

@Component({
  selector: 'app-space',
  template: `
    <p>
    {{randomNum}}
    </p>
  `,
  styles: [
  ]
})
export class SpaceComponent {

  randomNum = Math.random();

}
