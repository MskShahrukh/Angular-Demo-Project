import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [
    trigger('accountBtnAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('accountLinkAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class HeaderComponent {
  packagesBox: HTMLElement;
  scrollPositionOfPackages: number;
  showOpenAccountBtn: boolean = false;

  constructor() {}

  ngAfterViewInit() {
    this.addListnerOnScroll();
  }

  // Make a Recursion cause of we are getting Packages id from diffrenet container and once header component is
  // rendered until that packages if was not created thats why we need to do that
  addListnerOnScroll() {
    this.packagesBox = document.getElementById('package-detials-0');
    if (this.packagesBox) {
      this.scrollPositionOfPackages = this.packagesBox.offsetTop + 120;
      window.addEventListener('scroll', this.scroll, true);
    } else {
      setTimeout(() => this.addListnerOnScroll(), 500);
    }
  }

  scroll = (e): void => {
    let currentScroll = document.documentElement.scrollTop;

    currentScroll >= this.scrollPositionOfPackages
      ? (this.showOpenAccountBtn = true)
      : (this.showOpenAccountBtn = false);
  };

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
}
