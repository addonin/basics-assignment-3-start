import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showParagraph: boolean = true;
  attempts: number[] = [];
  counter: number = 0;
  background: string;
  changeColor: boolean = false;

  toggleShowParagraph() {
    this.attempts.push(++this.counter);
    if (this.counter >= 5) {
      this.background = 'blue';
      this.changeColor = true;
    }
    this.showParagraph = !this.showParagraph;
  }

  getBackground() {
    return this.background;
  }

}
