import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-progress-bar',
  templateUrl: './angular-progress-bar.component.html',
  styleUrls: ['./angular-progress-bar.component.css']
})
export class AngularProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;
  constructor() { }

  ngOnInit(): void {
    // this.loading();
  }

  loading() {

  }

  start() {
    clearInterval(0);
    let interval = setInterval(() => {
      this.progress = +this.progress + 5;
      if (this.progress == 100) {
        clearInterval(interval);
        this.progress = 0;
      }
    }, 1000);
  }
}
