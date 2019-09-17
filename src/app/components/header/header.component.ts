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
      // transition(':leave', [
      //   style({ transform: 'translateY(0)', opacity: 1 }),
      //   animate('200ms', style({ transform: 'translateY(100%)', opacity: 0 }))
      // ])
    ]),
    trigger('accountLinkAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
      // transition(':leave', [
      //   style({ transform: 'translateY(0)', opacity: 1 }),
      //   animate('300ms', style({ transform: 'translateY(-200%)', opacity: 0 }))
      // ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  packagesBox: HTMLElement;
  scrollPositionOfPackages: number;
  showOpenAccountBtn: boolean = false;

  ngOnInit() {
    this.packagesBox = document.getElementById('packages');
    this.packagesBox &&
      (this.scrollPositionOfPackages = this.packagesBox.offsetTop - 50);
    window.addEventListener('scroll', this.scroll, true);
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
