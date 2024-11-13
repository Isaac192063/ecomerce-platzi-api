import { IProduct } from './../../../user/model/IProduct.model';
import { Component, Input, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
    selector: 'app-carrusel',
    standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule],
    templateUrl: './carrusel.component.html',
    styleUrl: './carrusel.component.scss',
})
export class CarruselComponent implements OnInit {
    @Input({ required: true }) products: IProduct[] = [];
    currentSlide = 0;
    responsiveOptions: any[] | undefined;

    trackByIndex(index: number, item: any) {
        return index;
    }

    getTransform(): string {
        return `translateX(-${this.currentSlide * 100}%)`;
    }

    ngOnInit(): void {

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '600px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string): any {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return '';
        }
    }
}
