import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../user/service/product.service';
import { IProduct } from '../../../user/model/IProduct.model';
import { CarruselComponent } from "../../../shared/components/carrusel/carrusel.component"
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [ CarruselComponent, MessagesModule ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
    private productService = inject(ProductService);
    products : IProduct[] = []
    messages: Message[] = [{ severity: 'info', detail: 'Message Content' }] ;

    ngOnInit(): void {
        this.messages = [{ severity: 'info', detail: 'Message Content' }];

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
