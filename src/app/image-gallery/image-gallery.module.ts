import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import {ImageGalleryCardComponent} from './image-gallery-card/image-gallery-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageGalleryComponent, ImageGalleryCardComponent],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {
}
