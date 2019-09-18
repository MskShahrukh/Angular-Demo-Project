import { Component, OnInit, Input } from '@angular/core';
declare let $;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {
  @Input() images: any[];
  @Input() index: number;

  sliderName: string = '';
  sliderTarget: string = '';

  constructor() {}

  ngOnInit() {
    $(window).on('load', function() {
      $('.carousel').carousel('pause');
    });
    this.sliderName = 'PackageSlider-' + this.index;
    this.sliderTarget = '#' + this.sliderName;
  }
}
