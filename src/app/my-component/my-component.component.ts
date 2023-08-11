import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  showDiv: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.hideDiv();
    }, 5000);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.hideDiv();
  }

  hideDiv(): void {
    this.showDiv = false;
  }

}
