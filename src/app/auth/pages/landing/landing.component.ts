import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ProductService } from '../../../user/service/product.service';
import { IProduct } from '../../../user/model/IProduct.model';
import { CarruselComponent } from "../../../shared/components/carrusel/carrusel.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [CardComponent, CarruselComponent],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
    private productService = inject(ProductService);
    products : IProduct[] = []

    ngOnInit(): void {
        this.productService.getAllProduct().subscribe({
            error(err) {
                console.log(err);
            },
            next: (value) =>{
                this.products = value;
                console.log(this.products);
            },
        })
    }
}
