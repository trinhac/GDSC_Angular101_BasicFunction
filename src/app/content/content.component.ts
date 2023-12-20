import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input ({
    transform: (value: any) => {
      return{
        ...value,
        total: value.price * value.quantity,
      }
    },
    // alias: 
  }) product: any

  // @Output() onAddOnce = new EventEmitter();
  // @Output() onAddAll = new EventEmitter();

  // buyOnce(){
  //   this.onAddOnce.emit(this.product);
  // }

  // buyAll() {
  //   this.onAddAll.emit(this.product);
  // }
}
