import { Component } from "@angular/core"

@Component({
  selector: 'app-counter',
  template: `
  <p>
    Counter {{ counter }}
  </p>

  <button (click)="increseBy(1)">+1</button>
  <button (click)="resetCounter(10)">Reset</button>
  <button (click)="increseBy(-1)">-1</button>
  `,
})

export class CounterComponent {
  public title: string = 'bases';
  public counter: number = 10;

  increseBy(value:number):void {
    this.counter += value;
  }

  resetCounter(value:number):void {
    this.counter = value;
  }
}
