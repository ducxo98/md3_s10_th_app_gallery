import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-gallery-card',
  templateUrl: './image-gallery-card.component.html',
  styleUrls: ['./image-gallery-card.component.scss']
})
export class ImageGalleryCardComponent implements OnInit {
  @Input() src = '';
  constructor() { }

  ngOnInit() {
  }

}
