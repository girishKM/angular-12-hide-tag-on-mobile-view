import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-hide-div-example';

  showDiv: boolean = true;

  timeoutRef: any;

  ngOnInit(): void {
    this.applyMobileConditions();
  }

  applyMobileConditions(): void {
    if (window.matchMedia('(max-width: 767px)').matches) {
      this.startTimeout();
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkScreenSizeAndHide();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.handleScreenSizeChange();
  }

  checkScreenSizeAndHide(): void {
    if (window.matchMedia('(max-width: 767px)').matches) {
      this.hideDiv();
    }
  }

  checkScreenSizeAndShow(): void {
    if (!window.matchMedia('(max-width: 767px)').matches) {
      this.showDiv = true;
    }
  }

  handleScreenSizeChange(): void {
    clearTimeout(this.timeoutRef);

    if (window.matchMedia('(max-width: 767px)').matches) {
      this.startTimeout();
    } else {
      this.checkScreenSizeAndShow();
    }
  }

  hideDiv(): void {
    this.showDiv = false;
  }

  startTimeout(): void {
    this.timeoutRef = setTimeout(() => {
      this.hideDiv();
    }, 5000);
  }
}
