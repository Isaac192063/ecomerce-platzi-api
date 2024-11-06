import { IProduct } from './../../../user/model/IProduct.model';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carrusel',
    standalone: true,
    imports: [CardComponent, CommonModule],
    templateUrl: './carrusel.component.html',
    styleUrl: './carrusel.component.scss',
})
export class CarruselComponent {
    @Input({ required: true }) products: IProduct[] = [];
    currentSlide = 0;

    trackByIndex(index: number, item: any) {
        return index;
      }

      getTransform(): string {
        return `translateX(-${this.currentSlide * 100}%)`;
      }

    prev(): void {
        if (this.currentSlide > 0) {
            this.currentSlide--;
        }
    }

    next(): void {
        if (this.currentSlide < this.products.length - 1) {
            this.currentSlide++;
        }
    }
}
